import types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
  redirectPath: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.redirectPath = action.payload.prevPath;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_UPDATED_SUCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_CREATED_SUCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
