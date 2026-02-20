import { get } from 'lodash';
import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import axios from '../../../services/axios';
import types from '../types';

import * as actions from './actions';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(
      actions.loginSucess({ ...response.data, prevPath: payload.prevPath }),
    );

    toast.success('Login realizado com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const { id, name, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        id,
        name,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerUpdatedSucess(payload));
    } else {
      yield call(axios.post, '/users', {
        email,
        name,
        password,
      });

      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSucess());
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Sua sessão expirou. Por favor, faça login novamente.');
      yield put(actions.loginFailure());
      return;
    }

    if (Array.isArray(errors) && errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else if (typeof errors === 'string') {
      toast.error(errors);
    } else {
      console.error(errors);
    }

    yield put(actions.registerFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
