// SEU CÓDIGO - JÁ ESTÁ CORRETO COM O NOVO PrivateRoute
import { Routes, Route, Outlet } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photos from '../pages/Photos';
import Register from '../pages/Register';

import PrivateRoute from './PrivateRoute';

const AdminLayout = () => <Outlet />; // Perfeito para layouts

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Alunos />} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />

      <Route element={<PrivateRoute isClosed />}>
        <Route element={<AdminLayout />}>
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
