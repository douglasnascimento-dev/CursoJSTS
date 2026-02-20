import { useDispatch } from 'react-redux';

import * as exempleActions from '../../store/modules/example/actions';
import { Container } from '../../styles/GlobalStyles';

import { Title } from './styled';
/*(React,
    useEffect(() => {
      async function getData() {
        const response = await axios.get('/');
        // eslint-disable-next-line no-console
        console.log(response.data);
      }

      getData();
    }, []));*/

const Login = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exempleActions.buttonClickedRequest());
  };

  return (
    <Container>
      <Title>Login</Title>
      <p>Lorem ipsum dolor sit.</p>
      <button type='button' onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};

export default Login;
