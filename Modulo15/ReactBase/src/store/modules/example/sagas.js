import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import types from '../types';

import * as actions from './actions';

const req = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 20);
  });
};

function* exampleRequest() {
  try {
    yield call(req);
    yield put(actions.buttonClickedSucess());
  } catch {
    toast.error('ERRO');
    yield put(actions.buttonClickedFailure());
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);
