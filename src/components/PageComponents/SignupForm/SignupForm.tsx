/**
 * Composant SignupForm : Formulaire d'inscription basé sur ReusableForm
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission, etc.)
 * - Charge dynamiquement les champs du formulaire depuis `signupFormConfig ` (name, email, password, confirmPassword)
 * - Valide les champs avec `Zod` en utilisant `signupFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

import { signupFormSchema } from './signupForm.schema';
import { signupFormConfig } from './signupForm.config';
import { RegisterCredentials } from '../../../@types/auth';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';
import { useAuth } from '../../../store/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import './SignupForm.style.css';
import { useEffect } from 'react';

function SignupForm() {
  const { isLoading, isAuthenticated, message, register, resetMessage } =
    useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      void navigate('/dashboard');
    }
    return () => resetMessage();
  }, [isAuthenticated, navigate, resetMessage]);

  return (
    <ReusableForm<RegisterCredentials>
      isLoading={isLoading}
      formConfig={signupFormConfig}
      formSchema={signupFormSchema}
      action={register}
      footerMessage={message ?? undefined}
    />
  );
}

export default SignupForm;
