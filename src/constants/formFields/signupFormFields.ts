import { FormField } from '../../@types/form';

export const signupFormFields: FormField[] = [
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
];
