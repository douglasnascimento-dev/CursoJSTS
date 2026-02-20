import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { FiUser, FiEdit, FiDelete } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  Title,
  LinkButton,
  ProfilePicture,
  ActionIcon,
} from '../../styles/GlobalStyles';

import {
  AlunoContainer,
  ProfileInfos,
  ProfileIcones,
  StudentContainer,
} from './styled';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get('/students');
        setStudents(response.data);
      } catch (e) {
        if (e.response.status === 401) {
          toast.error('Erro ao obter usuário. Realize o Login novamente.');
          dispatch(actions.loginFailure());
        }
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [dispatch]);

  const handleDelete = async (e, id, index) => {
    e.persist();
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.delete(`students/${id}`);
      const newStudents = [...students].splice(index, 1);
      setStudents(newStudents);
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
      <LinkButton
        className='newStudent'
        style={{ alignSelf: 'center' }}
        to={'/aluno'}
      >
        Novo Aluno
      </LinkButton>
      <StudentContainer>
        {students.map((aluno, index) => (
          <AlunoContainer key={aluno.id}>
            <ProfilePicture>
              {get(aluno, 'photos[0].url') ? (
                <img
                  alt={`Foto de ${aluno.name || 'aluno'}`}
                  src={get(aluno, 'photos[0].url')}
                />
              ) : (
                <FiUser className='userIcon' size={36} />
              )}
            </ProfilePicture>
            <ProfileInfos>
              <span className='profileName'>{aluno.name}</span>
              <span className='profileSurnameAge'>
                {aluno.surname ? `${aluno.surname} -` : ''} ({aluno.age}y)
              </span>
              <span className='profileEmail'>{aluno.email}</span>
            </ProfileInfos>
            <ProfileIcones>
              <ActionIcon to={`/aluno/:${aluno.id}/edit`}>
                <FiEdit />
              </ActionIcon>
              <ActionIcon
                to={`/aluno/:${aluno.id}/delete`}
                onClick={(e) => handleDelete(e, aluno.id, index)}
              >
                <FiDelete />
              </ActionIcon>
            </ProfileIcones>
          </AlunoContainer>
        ))}
      </StudentContainer>
    </Container>
  );
};

export default Students;
