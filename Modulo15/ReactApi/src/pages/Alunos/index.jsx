import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { FiUser, FiEdit, FiDelete } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { Container, Title } from '../../styles/GlobalStyles';

import {
  AlunoContainer,
  ProfilePicture,
  ProfileInfos,
  ProfileIcones,
} from './styled';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.persist();
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.delete(`alunos/${id}`);
      const newAlunos = [...alunos].splice(index, 1);
      setAlunos(newAlunos);
    } catch (err) {
      const errors = get(err, 'responde.data.error', []);
      errors.map((error) => toast.error(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Alunos</Title>
      <Link to={'/aluno'}>Novo Aluno</Link>
      {alunos.map((aluno, index) => (
        <AlunoContainer key={aluno.id}>
          <ProfilePicture>
            {get(aluno, 'Uploads[0].url') ? (
              <img
                alt={`Foto de ${aluno.name || 'aluno'}`}
                src={get(aluno, 'Uploads[0].url')}
              />
            ) : (
              <FiUser className='userIcon' size={36} />
            )}
          </ProfilePicture>
          <ProfileInfos>
            <span className='profileName'>{aluno.name}</span>
            <span className='profileEmail'>{aluno.email}</span>
          </ProfileInfos>
          <ProfileIcones>
            <Link to={`/aluno/:${aluno.id}/edit`}>
              <FiEdit />
            </Link>
            <Link
              to={`/aluno/:${aluno.id}/delete`}
              onClick={(e) => handleDelete(e, aluno.id, index)}
            >
              <FiDelete />
            </Link>
          </ProfileIcones>
        </AlunoContainer>
      ))}
    </Container>
  );
};

export default Alunos;
