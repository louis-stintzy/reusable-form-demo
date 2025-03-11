/**
 * Configuration du formulaire de connexion.
 *
 * - Définition du titre, des boutons et des champs.
 * - `FormField<LoginCredentials>` garantit que `id` correspond à une clé de `LoginCredentials`.
 * - `footerMessage` contient un lien vers la page de réinitialisation du mot de passe.
 */

import { LoginCredentials } from '../../../@types/auth';
import { FormConfig } from '../../../@types/form';
import loader from '../../../assets/loader-circle.svg';

export const loginFormConfig: FormConfig<LoginCredentials> = {
  title: 'Login',
  fields: [
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
      autoComplete: 'current-password',
      required: true,
    },
  ],
  submitButton: {
    loading: {
      type: 'image',
      content: loader,
    },
    default: {
      type: 'text',
      content: 'Log in',
    },
  },
  footerMessage: {
    type: 'default',
    text: "Don't have an account?",
    linkText: 'Sign up',
    linkTo: '/signup',
  },
};
