import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
