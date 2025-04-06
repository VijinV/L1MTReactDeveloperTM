import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const loadAuthState = (): AuthState => {
  try {
    const authValue = localStorage.getItem('isAuthenticated');
    if (authValue) {
      return { isAuthenticated: authValue === 'true' };
    }
  } catch (error) {
    console.error('Error loading auth state from localStorage:', error);
  }

  return { isAuthenticated: false };
};

const initialState: AuthState = loadAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
