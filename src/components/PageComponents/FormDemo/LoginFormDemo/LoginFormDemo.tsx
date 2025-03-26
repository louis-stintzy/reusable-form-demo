/**
 * Composant LoginForm : Formulaire de connexion basé sur ReusableForm
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission
 * - Charge dynamiquement les champs du formulaire depuis `loginFormConfig` (email, password)
 * - Valide les champs avec `Zod` en utilisant `loginFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

import { LoginCredentials } from '../../../../@types/auth';
import { loginFormConfig } from './loginFormDemo.config';
import { loginFormSchema } from './loginFormDemo.schema';
import ReusableForm from '../../../Common/ReusableForm/ReusableForm';
import { useState } from 'react';
import { FooterMessageData } from '../../../../@types/form';

import './LoginFormDemo.style.css';

// TODO: LoginDemo => rajouter une slice demo pour enregistrer l'utilisateur créé dans signup et se connecter avec lui dans login

interface UserDemo {
  id: number;
  name: string;
  email: string;
  role: string;
}

const loginUser = async (credentials: LoginCredentials): Promise<UserDemo> => {
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
    }, 300)
  );
};

function LoginFormDemo() {
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [messageDemo, setMessageDemo] = useState<FooterMessageData | null>(
    null
  );

  const loginDemo = async (credentials: LoginCredentials) => {
    // Simulate API call
    try {
      setIsLoadingDemo(true);
      const user: UserDemo = await loginUser(credentials);
      console.log('Logged in successfully', user);
      setMessageDemo({
        type: 'success',
        text: 'Logged in successfully',
        linkText: 'Go to dashboard',
        linkTo: '/dashboard',
      });
    } catch (error) {
      console.error(error);
      setMessageDemo({
        type: 'error',
        text: (error as Error).message,
        linkText: 'Forgot password ? Reset now',
        linkTo: '/reset-password',
      });
    } finally {
      setIsLoadingDemo(false);
    }
  };

  return (
    <ReusableForm<LoginCredentials>
      isLoading={isLoadingDemo}
      formConfig={loginFormConfig}
      formSchema={loginFormSchema}
      action={loginDemo}
      footerMessage={messageDemo ?? undefined}
    />
  );
}

export default LoginFormDemo;
