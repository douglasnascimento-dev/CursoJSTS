import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styled.css'

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate()

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime(t => t - 1)
      if (time <= 0) navigate('/about', {
        state: true
      })
      return () => clearTimeout(timeout.current);
    }, 1000)

  }, [navigate, time])
  return <div><h1>Get out of here in: {time}</h1></div>
}