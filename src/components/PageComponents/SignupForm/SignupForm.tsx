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

import './SignupForm.style.css';

function SignupForm() {
  return (
    <ReusableForm<RegisterCredentials>
      formConfig={signupFormConfig}
      formSchema={signupFormSchema}
    />
  );
}

export default SignupForm;
