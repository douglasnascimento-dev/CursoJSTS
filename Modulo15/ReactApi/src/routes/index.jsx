import { Routes, Route, Outlet } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photos from '../pages/Photos';
import Register from '../pages/Register';

import PrivateRoute from './PrivateRoute';

const AdminLayout = () => <Outlet />;

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />

      <Route element={<PrivateRoute isClosed />}>
        <Route element={<AdminLayout />}>
          <Route element={<EditUser />} path='/edit' />
          <Route element={<Alunos />} path='/alunos' />
          <Route element={<Aluno />} path='/aluno/:id/edit' />
          <Route element={<Aluno />} path='/aluno' />
          <Route element={<Photos />} path='/photos/:id' />
        </Route>
      </Route>

      <Route element={<Page404 />} path='*' />
    </Routes>
  );
};

export default AppRoutes;
