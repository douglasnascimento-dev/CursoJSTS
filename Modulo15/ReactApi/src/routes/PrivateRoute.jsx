import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ isClosed }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return <Navigate replace state={{ from: location }} to='/login' />;
  }

  return <Outlet />;
};

PrivateRoute.propTypes = {
  isClosed: PropTypes.bool.isRequired,
};

export default PrivateRoute;
