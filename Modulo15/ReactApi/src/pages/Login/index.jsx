import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { Container, Title } from '../../styles/GlobalStyles';

import { Form } from './styled';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const redirectPath = useSelector((state) => state.auth.redirectPath);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn && redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [isLoggedIn, redirectPath, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('O Email deve ser válido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('A Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    const prevPath = location.state?.from?.pathname || '/';

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Title>Login</Title>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <label htmlFor='emailUser'>Email</label>
        <input
          id='emailUser'
          placeholder='Email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='passwordUser'>Senha</label>
        <input
          autoComplete='current-password'
          id='passwordUser'
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading} type='submit'>
          {isLoading ? 'Carregando...' : 'Fazer Login'}
        </button>
      </Form>
    </Container>
  );
};

export default Login;
