/**
 * Composant LoginForm : Formulaire de connexion basé sur ReusableForm
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission
 * - Charge dynamiquement les champs du formulaire depuis `loginFormConfig` (email, password)
 * - Valide les champs avec `Zod` en utilisant `loginFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

import { LoginCredentials } from '../../../@types/auth';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';
import { loginFormConfig } from './loginForm.config';
import { loginFormSchema } from './loginForm.schema';

import './LoginForm.style.css';

function LoginForm() {
  return (
    <ReusableForm<LoginCredentials>
      formConfig={loginFormConfig}
      formSchema={loginFormSchema}
    />
  );
}

export default LoginForm;
