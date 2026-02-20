import types from '../types';

const initialState = {
  buttonClicked: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCESS: {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }
    case types.BUTTON_CLICKED_REQUEST: {
      return state;
    }
    case types.BUTTON_CLICKED_FAILURE: {
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
