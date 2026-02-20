import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import { Container, Form, Title } from '../../styles/GlobalStyles';

import { ProfilePicture } from './styled';

const Photos = () => {
  const dispatch = useDispatch();
  const { id: idParam } = useParams();
  const id = idParam ? String(idParam).replace(/^:/, '') : 0;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setPhoto(get(data, 'Uploads[0].url', ''));
        setIsLoading(false);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        navigate('/');
      }
    };
    getData();
  }, [id, navigate]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPhoto(fileUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photos', file);

    try {
      setIsLoading(true);
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          photos: 'image/png',
        },
      });
      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (erro) {
      const { status } = get(erro, 'response.status', 0);
      toast.error('Erro ao enviar foto');
      console.error(erro);
      if (status === 401) {
        toast.error('Para fazer essa ação você precissa estar logado');
        dispatch(actions.loginFailure());
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Photos</Title>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProfilePicture>
          {photo ? (
            <img alt='Foto de Perfil' src={photo} />
          ) : (
            <FiUser size={150} />
          )}
        </ProfilePicture>
        <br />
        <label alt='photo' htmlFor='photo'>
          <input id='photo' name='photo' type='file' onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
};

export default Photos;

Photos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
