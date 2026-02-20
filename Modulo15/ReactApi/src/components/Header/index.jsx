import { Link } from 'react-router-dom';

import { Nav } from './styled';

const Header = () => {
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Usuário</Link>
      <Link to='/signout'>Sair da Conta</Link>
    </Nav>
  );
};

export default Header;
