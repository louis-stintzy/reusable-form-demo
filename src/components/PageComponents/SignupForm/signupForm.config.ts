/**
 * Configuration du formulaire d'inscription.
 *
 * - Définition du titre, des boutons et des champs.
 * - `FormField<RegisterCredentials>` garantit que `id` correspond à une clé de `RegisterCredentials`.
 * - `footerMessage` contient un lien vers la page de connexion si l'utilisateur a déjà un compte.
 */

import { RegisterCredentials } from '../../../@types/auth';
import { FormConfig } from '../../../@types/form';

export const signupFormConfig: FormConfig<RegisterCredentials> = {
  title: 'Sign up',
  buttonText: {
    loading: 'Signing up...',
    default: 'Sign up',
  },
  fields: [
    {
      label: 'ENTER NAME',
      id: 'name',
      type: 'text',
      placeholder: 'Enter Name',
      autoComplete: 'given-name',
      required: true,
    },
    {
      label: 'ENTER EMAIL',
      id: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      autoComplete: 'email',
      required: true,
    },
    {
      label: 'ENTER PASSWORD',
      id: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      autoComplete: 'new-password',
      required: true,
    },
    {
      label: 'CONFIRM PASSWORD',
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    },
  ],
  footerMessage: {
    type: 'default',
    text: 'Already have an account ?',
    linkText: 'Login now',
    linkTo: '/login',
  },
};
