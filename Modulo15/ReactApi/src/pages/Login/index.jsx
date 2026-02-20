import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
} from '../../styles/GlobalStyles';

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
        <Label htmlFor='emailUser'>Email</Label>
        <Input
          id='emailUser'
          placeholder='email@exemplo.com'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor='passwordUser'>Senha</Label>
        <Input
          autoComplete='current-password'
          id='passwordUser'
          placeholder='****'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={isLoading} type='submit'>
          {isLoading ? 'Carregando...' : 'Fazer Login'}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
