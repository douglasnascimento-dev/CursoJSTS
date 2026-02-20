import { get } from 'loadsh';
import { useEffect, useState } from 'react';
import { FiUser, FiEdit, FiDelete } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>Alunos</Title>
      {alunos.map((aluno) => (
        <AlunoContainer key={aluno.id}>
          <ProfilePicture>
            {get(aluno, 'Uploads[0].url') ? (
              <img
                alt={`Foto de ${aluno.nome || 'aluno'}`}
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
            <Link to={`/aluno/:${aluno.id}/delete`}>
              <FiDelete />
            </Link>
          </ProfileIcones>
        </AlunoContainer>
      ))}
    </Container>
  );
};

export default Alunos;
