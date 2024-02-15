import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { gameReducer } from './game';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedGameReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
  reducer: {
    game: persistedGameReducer,
  },
  middleware: getDefaultMiddleware => {
    const configs = {
      serializableCheck: false,
    };
    return getDefaultMiddleware(configs);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
