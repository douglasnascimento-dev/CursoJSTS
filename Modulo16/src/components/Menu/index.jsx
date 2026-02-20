import './styled.css'
import { Link } from 'react-router-dom'
export const Menu = () => {
  return <div>
    <nav className='menu'>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about" state={'This is state from Home'}>About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/10">Posts 10+</Link>
        <Link to="/redirect">Redirect</Link>
      </ul>
    </nav>
  </div>
}