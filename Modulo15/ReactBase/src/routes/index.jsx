import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

// import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path='/login' />

      {/*<Route element={<PrivateRoute isClosed />}>
        <Route element={<Home />} path='/' />
      </Route>*/}

      <Route element={<Page404 />} path='*' />
    </Routes>
  );
};

export default AppRoutes;
