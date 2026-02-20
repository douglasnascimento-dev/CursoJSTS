import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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

const EditUser = () => {
  const { id, name: nameStorage } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setSenha] = useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    if (!id) return;
    setName(nameStorage);
  }, [id, nameStorage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = 0;

    if (name.length < 3 || name.length > 255) {
      formErrors++;
      toast.error('O Nome deve ter entre 3 e 255 caracteres');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors++;
      toast.error('A Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, password, id: id }));
  };

  return (
    <Container>
      <Title>Edite sua conta</Title>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <Label htmlFor='nomeUser'>Nome de Usuário</Label>
        <Input
          id='nomeUser'
          placeholder='Nome de Usuário'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor='passwordUser'>Senha</Label>
        <Input
          id='passwordUser'
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button type='submit'>Editar Conta</Button>
      </Form>
    </Container>
  );
};

export default EditUser;
