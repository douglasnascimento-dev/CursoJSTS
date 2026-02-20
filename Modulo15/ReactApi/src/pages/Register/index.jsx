import { get } from 'loadsh';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container, Title } from '../../styles/GlobalStyles';

import { Form } from './styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

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

    if (password.length < 6 || password.length > 50) {
      formErrors = 1;
      toast.error('A Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        name,
        password,
        email,
      });

      toast.success('Cadastro concluído com sucesso');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', [false]);
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <Container>
      <Title>Register</Title>

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
        <button type='submit'>Criar Conta</button>
      </Form>
    </Container>
  );
};

export default Register;
