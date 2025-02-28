import { NavLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RegisterCredentials } from '../../../@types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from './signupForm.schema';
import { signupFormConfig } from './signupForm.config';
import FormInput from '../../Common/ReusableForm/SubComponents/FormInput';
import FormSubmitButton from '../../Common/ReusableForm/SubComponents/FormSubmitButton';
import FormTitle from '../../Common/ReusableForm/SubComponents/FormTitle';

import './SignupForm.style.css';
import { formatTitle } from '../../../utils/formatTitle';

/*
 * Composant SignupForm : Formulaire d'inscription
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission, etc.)
 * - Charge dynamiquement les champs du formulaire depuis `signupFormConfig ` (name, email, password, confirmPassword)
 * - Valide les champs via `Zod` en utilisant `signupFormSchema`.
 * - Affiche les messages d'erreur spécifiques à chaque champ en fonction du schéma Zod.
 */

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: zodResolver(signupFormSchema),
  });

  const title = 'Sign up';
  const formattedTitle = formatTitle(title);

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    console.log('Données du formulaire', data);
  };
  return (
    <div className={`${formattedTitle}-form__container`}>
      <div className={`${formattedTitle}-form__wrapper`}>
        <FormTitle formattedTitle={formattedTitle} title={title} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${formattedTitle}-form__form`}
        >
          {signupFormConfig.map((field) => (
            <FormInput<RegisterCredentials>
              key={field.id}
              formattedTitle={formattedTitle}
              label={field.label}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              error={errors[field.id]?.message}
              register={register}
              required={field.required}
            />
          ))}
          <FormSubmitButton
            formattedTitle={formattedTitle}
            isLoading={false}
            buttonText={{
              loading: 'Signing up...',
              default: 'Sign up',
            }}
          />
        </form>
        <div className={`${formattedTitle}-form__link-container`}>
          <p className={`${formattedTitle}-form__link-message`}>
            Already have an account ?{' '}
          </p>
          <NavLink className={`${formattedTitle}-form__link`} to="/login">
            Login now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
