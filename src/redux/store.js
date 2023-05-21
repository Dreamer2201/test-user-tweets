import { configureStore } from '@reduxjs/toolkit';

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
import usersReduser from './userSlice';
import filterReducer from './filterSlice';

const usersPersistConfig = {
	key: 'root',
	storage,
};

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReduser);

const store = configureStore({
	reducer: {
		users: persistedUsersReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
