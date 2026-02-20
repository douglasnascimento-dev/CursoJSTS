import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import { Container, Title, Form } from '../../styles/GlobalStyles';

import { ProfilePicture } from './styled';

export function validateAluno(name, sobrenome, email, idade, peso, altura) {
  let formErrors = false;

  if (name.length < 3 || name.length >= 255) {
    formErrors = true;
    toast.error('O Nome deve ter entre 3 e 255 caracteres');
  }

  if (sobrenome.length < 3 || sobrenome.length >= 255) {
    formErrors = true;
    toast.error('O Sobrenome deve ter entre 3 e 255 caracteres');
  }

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('O Email deve ser válido');
  }

  if (!isInt(String(idade))) {
    formErrors = true;
    toast.error('A Idade deve ser um número inteiro');
  }

  if (!isFloat(String(peso))) {
    formErrors = true;
    toast.error('O Peso deve ser um número');
  }

  if (!isFloat(String(altura))) {
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
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setPhoto(get(data, 'Uploads[0].url', ''));
        setName(data.name);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
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

    if (validateAluno(name, sobrenome, email, idade, peso, altura)) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          name,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno editado com sucesso.');
      } else {
        await axios.post(`/alunos`, {
          name,
          sobrenome,
          email,
          idade,
          peso,
          altura,
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
      {id && (
        <ProfilePicture>
          {photo ? (
            <img alt='Foto de Perfil' src={photo} />
          ) : (
            <FiUser size={150} />
          )}
          <Link to={`/photos/${id}`}>Alterar Img</Link>
        </ProfilePicture>
      )}{' '}
      <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Nome:
          <input
            aria-label='Nome'
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='sobrenome'>
          Sobrenome:
          <input
            aria-label='Sobrenome'
            id='sobrenome'
            type='text'
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            aria-label='Email'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='idade'>
          Idade:
          <input
            aria-label='Idade'
            id='idade'
            type='number'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <label htmlFor='peso'>
          Peso:
          <input
            aria-label='Peso'
            id='peso'
            type='number'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <label htmlFor='altura'>
          Altura:
          <input
            aria-label='Altura'
            id='altura'
            type='number'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <button type='submit'>{id ? 'Salvar' : 'Adicionar'} Aluno</button>
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
