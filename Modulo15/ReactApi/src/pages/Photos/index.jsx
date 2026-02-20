import { get } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import PhotoList from '../../components/PhotoList';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  Form,
  InputFile,
  ProfilePicture,
  Title,
} from '../../styles/GlobalStyles';

const Photos = () => {
  const dispatch = useDispatch();
  const { id: idParam } = useParams();
  const id = idParam ? String(idParam).replace(/^:/, '') : 0;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const [photos, setPhotos] = useState([]);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/students/${id}`);
      setPhotos(get(data, 'photos', []));
      setPhoto(get(data, 'photos[0].url', ''));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      toast.error('Erro ao obter imagem');
      setIsLoading(false);
      navigate('/');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, getData]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    setPhoto(fileUrl);

    const formData = new FormData();
    formData.append('studentId', id);
    formData.append('photo', file);

    try {
      setIsLoading(true);
      await axios.post('/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      await getData();
      toast.success('Foto incluída com sucesso');
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      toast.error('Erro ao enviar foto');
      if (status === 401) {
        toast.error('Para fazer essa ação você precisa estar logado');
        dispatch(actions.loginFailure());
      }
      setIsLoading(false);
      await getData();
    }
  };

  const handleDeleteSuccess = (deletedPhotoId) => {
    if (deletedPhotoId === 'all') {
      setPhotos([]);
      setPhoto('');
      return;
    }

    const newPhotosList = photos.filter(
      (photoInList) => photoInList.id !== deletedPhotoId,
    );
    setPhotos(newPhotosList);

    const newProfilePic = get(newPhotosList, '[0].url', '');
    setPhoto(newProfilePic);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProfilePicture style={{ alignSelf: 'center' }}>
          {photo ? (
            <img alt='Foto de Perfil' src={photo} />
          ) : (
            <FiUser className='userIcon' size={36} />
          )}
        </ProfilePicture>
        <PhotoList photos={photos} onDeleteSuccess={handleDeleteSuccess} />
        <br />
        <label htmlFor='photo'>
          <InputFile
            id='photo'
            name='photo'
            type='file'
            onChange={handleChange}
          />
        </label>
      </Form>
    </Container>
  );
};

export default Photos;
