import { LoginCredentials, RegisterCredentials } from '../@types/auth';
import { axiosInstance } from './axiosInstance';

// TODO reprendre et uniformiser les types frontend et backend
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

export const verifyToken = async (): Promise<UserPublicData> => {
  const response = await axiosInstance.post<UserPublicData>('/auth/verify');
  return response.data;
};

export const registerUser = async (
  credentials: RegisterCredentials
): Promise<UserPublicData> => {
  const response = await axiosInstance.post<UserPublicData>(
    '/auth/register',
    credentials
  );
  return response.data;
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<UserPublicData> => {
  const response = await axiosInstance.post<UserPublicData>(
    '/auth/login',
    credentials
  );
  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  console.log('en attente de la route API de déconnexion');
  await axiosInstance.post('/auth/logout');
};
