/**
 * Composant LoginForm : Formulaire de connexion basé sur ReusableForm
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission
 * - Charge dynamiquement les champs du formulaire depuis `loginFormConfig` (email, password)
 * - Valide les champs avec `Zod` en utilisant `loginFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

import { useEffect } from 'react';
import { LoginCredentials } from '../../../@types/auth';
import { useAuth } from '../../../store/hooks/useAuth';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';
import { loginFormConfig } from './loginForm.config';
import { loginFormSchema } from './loginForm.schema';
import { useNavigate } from 'react-router-dom';

import './LoginForm.style.css';

function LoginForm() {
  const { isLoading, isAuthenticated, message, login, resetMessage } =
    useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      void navigate('/dashboard');
    }
    return () => resetMessage();
  }, [isAuthenticated, navigate, resetMessage]);

  return (
    <ReusableForm<LoginCredentials>
      isLoading={isLoading}
      formConfig={loginFormConfig}
      formSchema={loginFormSchema}
      action={login}
      footerMessage={message ?? undefined}
    />
  );
}

export default LoginForm;
