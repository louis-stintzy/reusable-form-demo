import { LoginCredentials, RegisterCredentials } from '../@types/auth';
import { axiosInstance } from './axiosInstance';

// TODO reprendre et uniformiser les types frontend et backend
export interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export const registerUser = async (
  credentials: RegisterCredentials
): Promise<UserData> => {
  const response = await axiosInstance.post<UserData>(
    '/auth/register',
    credentials
  );
  return response.data;
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<UserData> => {
  const response = await axiosInstance.post<UserData>(
    '/auth/login',
    credentials
  );
  return response.data;
  // Simulate API call
  // return new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     if (
  //       credentials.email === 'good@mail.com' &&
  //       credentials.password === '12345678910Ll$'
  //     ) {
  //       resolve({
  //         id: 1,
  //         name: 'John Doe',
  //         email: credentials.email,
  //         role: 'user',
  //       });
  //     }
  //     reject(new Error('Invalid credentials'));
  //   }, 300)
  // );
};

export const logoutUser = async (): Promise<void> => {
  await axiosInstance.post('/auth/logout');
};

export const verifyToken = async (): Promise<UserData> => {
  const response = await axiosInstance.post<UserData>('/auth/verify');
  return response.data;
};
