import { StateCreator } from 'zustand';
import type {} from '@redux-devtools/extension';
import { LoginCredentials } from '../@types/auth';
import { loginUser } from '../services/authService';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface AuthState {
  isLoadingAuth: boolean;
  isAuthenticated: boolean;
  user: UserData | null;
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export interface AuthSlice extends AuthState, AuthActions {}

export const initialState: AuthState = {
  isLoadingAuth: false,
  isAuthenticated: false,
  user: null,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  login: async (credentials) => {
    // Simulate API call
    try {
      set({ isLoadingAuth: true });
      const user: UserData = await loginUser(credentials);
      set({
        isAuthenticated: true,
        user: user,
      });
      // localStorage.setItem('isAuthenticated', 'true', 'user', JSON
      // .stringify({ id: 1, name: 'John Doe', email: credentials.email }));
    } catch (error) {
      console.error(error);
      set({ isAuthenticated: false, user: null });
      // throw new Error('Invalid credentials');
    } finally {
      set({ isLoadingAuth: false });
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
    // localStorage.removeItem('isAuthenticated', 'user');
  },
});
