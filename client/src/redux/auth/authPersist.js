import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token', 'user'],
};

export const authPersistedReducer = persistReducer(
  persistConfig,
  authReducer
);