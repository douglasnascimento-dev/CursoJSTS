import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

const Header = () => {
  const buttonClicked = useSelector((state) => state.example.buttonClicked);
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Usuário</Link>
      <Link to='/signout'>Sair da Conta</Link>
      {buttonClicked ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
};

export default Header;
