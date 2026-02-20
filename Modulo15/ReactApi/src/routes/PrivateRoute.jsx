// Arquivo: PrivateRoute.jsx
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isClosed }) => {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate replace to='/login' />;
  }

  return <Outlet />;
};

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  isClosed: PropTypes.bool,
};

export default PrivateRoute;
