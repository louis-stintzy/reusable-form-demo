/**
 * Composant SignupForm : Formulaire d'inscription basé sur ReusableForm
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission, etc.)
 * - Charge dynamiquement les champs du formulaire depuis `signupFormConfig ` (name, email, password, confirmPassword)
 * - Valide les champs avec `Zod` en utilisant `signupFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

import { signupFormSchema } from './signupFormDemo.schema';
import { signupFormConfig } from './signupFormDemo.config';
import { RegisterCredentials } from '../../../../@types/auth';
import ReusableForm from '../../../Common/ReusableForm/ReusableForm';

import './SignupFormDemo.style.css';

// TODO: LoginDemo => rajouter une slice demo pour enregistrer l'utilisateur créé dans signup et se connecter avec lui dans login

function SignupFormDemo() {
  return (
    <ReusableForm<RegisterCredentials>
      isLoading={false}
      formConfig={signupFormConfig}
      formSchema={signupFormSchema}
      action={() => {
        console.log('Signup form Demo submitted');
      }}
      footerMessage={undefined}
    />
  );
}

export default SignupFormDemo;
