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
      <span>
        <Link className='home' to='/'>
          HomePage
        </Link>
        <Link to='/alunos'>Alunos</Link>
      </span>
      <span>
        {isLoggedIn ? (
          <Link className='userName' to='/edit'>
            {userName}
          </Link>
        ) : (
          <>
            <Link to='/login'>Fazer Login</Link>
            <Link to='/register'>Registrar</Link>
          </>
        )}
        {isLoggedIn && (
          <Link to='/logout' onClick={handleLogout}>
            Sair da Conta
          </Link>
        )}
      </span>
    </Nav>
  );
};

export default Header;
