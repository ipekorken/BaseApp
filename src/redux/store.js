import {combineReducers, configureStore} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from './reducers/userReducer';
import app from './reducers/appReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  tokenObj: 'token',
};

const rootReducer = combineReducers({
  app: app,
  user: persistReducer(persistConfig, user),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
