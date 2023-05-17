import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReduser from './userSlice'

const usersPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
  }

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReduser);


const store = configureStore({
    reducer: {
        users: persistedUsersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  }
  );


const persistor = persistStore(store);

export { store, persistor };