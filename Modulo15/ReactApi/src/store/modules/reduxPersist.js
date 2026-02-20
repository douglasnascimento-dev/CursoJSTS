import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'API',
  storage,
  whitelist: ['auth'],
};

export default persistConfig;
