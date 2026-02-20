import types from '../types';

export function buttonClickedRequest() {
  return { type: types.BUTTON_CLICKED_REQUEST };
}

export function buttonClickedSucess() {
  return { type: types.BUTTON_CLICKED_SUCESS };
}

export function buttonClickedFailure() {
  return { type: types.BUTTON_CLICKED_FAILURE };
}
