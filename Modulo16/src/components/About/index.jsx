import { useLocation } from 'react-router-dom'
import './styled.css'

export const About = () => {
  const { state } = useLocation();
  console.log(state)

  return <div><h1>About</h1>
    <p>{state}</p></div>
}