import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import { Nav } from './styled';

const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.user.name);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to='/'>Home</Link>
      {isLoggedIn ? (
        // Show user name and link to profile (todo: update route)
        <Link className='userName' to='/register'>
          {userName}
        </Link>
      ) : (
        <Link to='/login'>Fazer Login</Link>
      )}
      {isLoggedIn && (
        <Link to='/logout' onClick={handleLogout}>
          Sair da Conta
        </Link>
      )}
    </Nav>
  );
};

export default Header;
