import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { Container, Title } from '../../styles/GlobalStyles';

import { Form } from './styled';

const Register = () => {
  const {
    id,
    name: nameStorage,
    email: emailStorage,
  } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    if (!id) return;
    setName(nameStorage);
    setEmail(emailStorage);
  }, [id, nameStorage, emailStorage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = 0;

    if (name.length < 3 || name.length > 255) {
      formErrors = 1;
      toast.error('O Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = 1;
      toast.error('O Email deve ser válido');
    }

    if ((!id && password.length < 6) || password.length > 50) {
      formErrors = 1;
      toast.error('A Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, email, password, id: id }));
  };

  return (
    <Container>
      <Title>{id ? 'Edite sua conta' : 'Registre sua conta'}</Title>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <label htmlFor='nomeUser'>Nome de Usuário</label>
        <input
          id='nomeUser'
          placeholder='Nome de Usuário'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          id='passwordUser'
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type='submit'>{id ? 'Editar Conta' : 'Criar Conta'}</button>
      </Form>
    </Container>
  );
};

export default Register;
