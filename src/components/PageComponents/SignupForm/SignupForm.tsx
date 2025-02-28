import { NavLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RegisterCredentials } from '../../../@types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from '../../../validators/signupFormSchema';
import { signupFormFields } from '../../../constants/formFields';
import FormInput from '../../Common/ReusableForm/SubComponents/FormInput';

import './SignupForm.css';
import FormSubmitButton from '../../Common/ReusableForm/SubComponents/FormSubmitButton';
import FormTitle from '../../Common/ReusableForm/SubComponents/FormTitle';

/*
 * Composant SignupForm : Formulaire d'inscription
 * - Utilise `react-hook-form` pour gérer le formulaire (validation, soumission, etc.)
 * - Charge dynamiquement les champs du formulaire depuis `signupFormFields` (name, email, password, confirmPassword)
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

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    console.log('Données du formulaire', data);
  };
  return (
    <div className="signup-form__container">
      <div className="signup-form__wrapper">
        <FormTitle formattedTitle="signup" title="Sign up" />
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form__form">
          {signupFormFields.map((field) => (
            <FormInput<RegisterCredentials>
              key={field.id}
              formattedTitle="signup"
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
            formattedTitle="signup"
            isLoading={false}
            buttonText={{
              loading: 'Signing up...',
              default: 'Sign up',
            }}
          />
        </form>
        <div className="signup-form__link-container">
          <p className="signup-form__link-message">
            Already have an account ?{' '}
          </p>
          <NavLink className="signup-form__link" to="/login">
            Login now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
