import { configureStore } from '@reduxjs/toolkit';
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import { authPersistedReducer } from './auth/authPersist';
import { globalReducer } from './global/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);