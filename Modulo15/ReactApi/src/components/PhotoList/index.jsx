import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import { FiDelete } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { DeleteButton } from '../../styles/GlobalStyles';

import { PhotoContainer } from './styled';

const PhotoList = ({ photos, onDeleteSuccess }) => {
  const userId = useSelector((state) => state.auth.user.id);

  const handleClick = (id) => {
    if (id === 'all') {
      confirmAlert({
        title: 'Confirmar exclussão',
        message: 'Você tem certeza que deseja fazer isso?',
        buttons: [
          {
            label: 'Sim',
            className: 'confirm-button',
            onClick: async () => {
              try {
                await axios.delete(`/photo/${userId}/all`);
                onDeleteSuccess(id);
                toast.success('Todas as fotos foram deletas');
              } catch (e) {
                console.error(e);
                toast.error('Erro ao deletar as fotos');
              }
            },
          },
          {
            label: 'Não',
            className: 'cancel-button',
          },
        ],
      });
      return;
    }

    confirmAlert({
      title: 'Confirmar exclussão',
      message: 'Você tem certeza que deseja fazer isso?',
      buttons: [
        {
          label: 'Sim',
          className: 'confirm-button',
          onClick: async () => {
            try {
              await axios.delete(`/photo/${userId}/${id}`);
              onDeleteSuccess(id);
              toast.success('Foto deletada');
            } catch (e) {
              console.error(e);
              toast.error('Erro ao deletar a foto');
            }
          },
        },
        {
          label: 'Não',
          className: 'cancel-button',
        },
      ],
    });
  };

  return (
    photos.length > 1 && (
      <>
        <DeleteButton type='button' onClick={() => handleClick('all')}>
          Deletar todas as Fotos
        </DeleteButton>
        <PhotoContainer>
          {photos.map(({ url, filename, id }) => (
            <span key={id}>
              <p className='id'>{id}</p>
              <img alt='' src={url} />
              <p className='photoName'>{filename}</p>
              <DeleteButton type='button' onClick={() => handleClick(id)}>
                <FiDelete size={16} />
              </DeleteButton>
            </span>
          ))}
        </PhotoContainer>
      </>
    )
  );
};
export default PhotoList;

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};
