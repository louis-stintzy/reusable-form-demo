import { StateCreator } from 'zustand';
import type {} from '@redux-devtools/extension';
import { LoginCredentials } from '../../@types/auth';
import { loginUser, logoutUser, verifyToken } from '../../services/authService';
import { FooterMessageData } from '../../@types/form';

// export interface UserData {
//   id: number;
//   name: string;
//   email: string;
//   role: 'admin' | 'user';
// }

export interface UserPublicData {
  id: number;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  isLoadingAuth: boolean;
  isAuthenticated: boolean;
  user: UserPublicData | null;
  message: FooterMessageData | null;
}

export interface AuthActions {
  verifyToken: () => Promise<boolean>;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  resetMessage: () => void;
}

export interface AuthSlice extends AuthState, AuthActions {}

export const initialState: AuthState = {
  isLoadingAuth: false,
  isAuthenticated: false,
  user: null,
  message: null,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  verifyToken: async () => {
    // Simulate API call
    try {
      set({ isLoadingAuth: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const user: UserPublicData = await verifyToken();
      set({ isAuthenticated: true, user: user });
      return true;
    } catch (error) {
      console.error('Verif token : ', error);
      set({
        isAuthenticated: false,
        user: null,
      });
      return false;
    } finally {
      set({ isLoadingAuth: false });
    }
  },
  login: async (credentials) => {
    // Simulate API call
    try {
      set({ isLoadingAuth: true });
      const user: UserPublicData = await loginUser(credentials);
      set({
        isAuthenticated: true,
        user: user,
        // message inutile car redirection vers le dashboard (au cas où...)
        message: {
          type: 'success',
          text: 'Logged in successfully',
          linkText: 'Go to dashboard',
          linkTo: '/dashboard',
        },
      });
      // localStorage.setItem('isAuthenticated', 'true', 'user', JSON
      // .stringify({ id: 1, name: 'John Doe', email: credentials.email }));
    } catch (error) {
      console.error('Login error : ', error);
      set({
        isAuthenticated: false,
        user: null,
        message: {
          type: 'error',
          text: (error as Error).message,
          linkText: 'Forgot password ? Reset now',
          linkTo: '/reset-password',
        },
      });
    } finally {
      set({ isLoadingAuth: false });
      // Effacer le message après 5 secondes
      // setTimeout(() => set({ message: null }), 5000);
    }
  },
  logout: async () => {
    try {
      set({ isLoadingAuth: true });
      await logoutUser();
    } catch (error) {
      console.error('Logout error : ', error);
    } finally {
      set({ isLoadingAuth: false, isAuthenticated: false, user: null });
      // localStorage.removeItem('isAuthenticated', 'user');
    }
  },

  resetMessage: () => set({ message: null }),
});
