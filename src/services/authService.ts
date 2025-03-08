import { LoginCredentials } from '../@types/auth';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export const loginUser = async (
  credentials: LoginCredentials
): Promise<UserData> => {
  // Simulate API call
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (
        credentials.email === 'good@mail.com' &&
        credentials.password === '12345678910Ll$'
      ) {
        resolve({
          id: 1,
          name: 'John Doe',
          email: credentials.email,
          role: 'user',
        });
      }
      reject(new Error('Invalid credentials'));
    }, 1000)
  );
};
