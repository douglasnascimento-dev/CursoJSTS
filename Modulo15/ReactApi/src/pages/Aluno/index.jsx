import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  Title,
  Form,
  ProfilePicture,
  Button,
  Label,
  Input,
  LinkButton,
} from '../../styles/GlobalStyles';

export function validateAluno(name, surname, email, age, weight, height) {
  let formErrors = false;

  if (name.length < 3 || name.length >= 255) {
    formErrors = true;
    toast.error('O Nome deve ter entre 3 e 255 caracteres');
  }

  if (surname.length < 3 || surname.length >= 255) {
    formErrors = true;
    toast.error('O Sobrenome deve ter entre 3 e 255 caracteres');
  }

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('O Email deve ser válido');
  }

  if (!isInt(String(age))) {
    formErrors = true;
    toast.error('A Idade deve ser um número inteiro');
  }

  if (!isFloat(String(weight))) {
    formErrors = true;
    toast.error('O Peso deve ser um número');
  }

  if (!isFloat(String(height))) {
    formErrors = true;
    toast.error('A Altura deve ser um número');
  }

  return formErrors;
}

const Aluno = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: idParam } = useParams();
  const id = idParam ? String(idParam).replace(/^:/, '') : 0;

  const [name, setName] = useState('');
  const [surname, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [age, setIdade] = useState('');
  const [weight, setPeso] = useState('');
  const [height, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        setPhoto(get(data, 'photos[0].url', ''));
        setName(data.name || '');
        setSobrenome(data.surname || '');
        setEmail(data.email || '');
        setIdade(data.age || '');
        setPeso(data.weight || '');
        setAltura(data.height || '');
      } catch (err) {
        const status = get(err, 'response.status', 0);
        const erros = get(err, 'response.data.errors', []);

        if (status === 400) {
          erros.forEach((error) => toast.error(error));
          navigate('/');
        }
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateAluno(name, surname, email, age, weight, height)) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/students/${id}`, {
          name,
          surname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Aluno editado com sucesso.');
      } else {
        await axios.post(`/students`, {
          name,
          surname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Aluno criado com sucesso.');
        navigate('/');
      }
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);
      if (status === 401) {
        toast.error('Para esta ação é necessário estar logado.');
        dispatch(actions.loginFailure());
      }
      if (errors.length > 0) {
        errors.forEach((error) => toast.error(error));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar' : 'Adicionar'} Aluno </Title>
      <ProfilePicture style={{ alignSelf: 'center' }}>
        {photo ? (
          <img alt='Foto de Perfil' src={photo} />
        ) : (
          <FiUser className='userIcon' size={36} />
        )}
      </ProfilePicture>
      <LinkButton style={{ alignSelf: 'center' }} to={`/photos/${id}`}>
        Alterar Img
      </LinkButton>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor='name'>Nome:</Label>
        <Input
          aria-label='Nome'
          id='name'
          placeholder='Nome do Aluno'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor='surname'>Sobrenome:</Label>
        <Input
          aria-label='Sobrenome'
          id='surname'
          placeholder='Sobrenome do Aluno'
          type='text'
          value={surname}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <Label htmlFor='email'>Email:</Label>
        <Input
          aria-label='Email'
          id='email'
          placeholder='email@exmplo.com.br'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor='age'>Idade:</Label>
        <Input
          aria-label='Idade'
          id='age'
          placeholder='Idade do Aluno (em anos)'
          type='number'
          value={age}
          onChange={(e) => setIdade(e.target.value)}
        />
        <Label htmlFor='weight'>Peso:</Label>
        <Input
          aria-label='Peso'
          id='weight'
          placeholder='Peso do Aluno (em KGs - com casa decimal)'
          type='number'
          value={weight}
          onChange={(e) => setPeso(e.target.value)}
        />
        <Label htmlFor='height'>Altura:</Label>
        <Input
          aria-label='Altura'
          id='height'
          placeholder='Altura do Aluno (em metros - com casa decimal)'
          type='number'
          value={height}
          onChange={(e) => setAltura(e.target.value)}
        />
        <Button type='submit'>{id ? 'Salvar' : 'Adicionar'} Aluno</Button>
      </Form>
    </Container>
  );
};

export default Aluno;

Aluno.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
