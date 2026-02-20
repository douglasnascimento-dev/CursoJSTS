import PropTypes from 'prop-types';

import { Overlay } from './styled';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <div>
        <span>Carregando...</span>
      </div>
    </Overlay>
  );
};

export default Loading;

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
