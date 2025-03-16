import { FormConfig } from '../../../../@types/form';
import { ProfileCredentials } from './userProfileForm.types';
import loader from '../../../../assets/loader-circle.svg';

export const userProfileFormConfig: FormConfig<ProfileCredentials> = {
  title: 'User Profile',
  fields: [
    {
      label: 'Username',
      id: 'username',
      type: 'text',
      placeholder: 'Enter your username',
      autoComplete: 'username',
      required: true,
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      autoComplete: 'email',
      required: true,
    },
    {
      label: 'Birth Date',
      id: 'birthDate',
      type: 'date',
      required: true,
    },
    {
      label: 'Avatar',
      id: 'avatar',
      type: 'file',
      accept: 'image/png, image/jpeg',
      required: true,
    },
    {
      label: 'I accept the terms of service',
      id: 'acceptTerms',
      type: 'checkbox',
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
      content: 'Save Profile',
    },
  },
  footerMessage: {
    type: 'info',
    text: 'Your profile information is secure.',
  },
};
