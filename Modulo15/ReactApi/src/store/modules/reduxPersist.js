import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'REACT-BASE',
  storage,
  whitelist: ['example'],
};

export default persistConfig;
