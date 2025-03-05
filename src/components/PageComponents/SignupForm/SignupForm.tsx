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
import FormFooter from '../../Common/ReusableForm/SubComponents/FormFooter';
import { useEffect, useState } from 'react';
import FormBase from '../../Common/ReusableForm/SubComponents/FormBase';

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

  const [footerMessage, setFooterMessage] = useState<{
    type: 'error' | 'success' | 'default';
    content: {
      text: string;
      linkText: string;
      linkTo: string;
    };
  } | null>(null);
  const title = signupFormConfig.title;
  const formattedTitle = formatTitle(title);

  // note : Simulation de l'état de chargement, de succès et d'erreur
  const isloading = false;

  const footerError = {
    text: 'Email already exists,',
    linkText: 'please login ',
    linkTo: '/login',
  };
  const footerSuccess = {
    text: 'Account created successfully',
    linkText: 'Login now',
    linkTo: '/login',
  };

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    console.log('Données du formulaire', data);
    // note : ici, on simule un appel API pour vérifier si l'email existe déjà
    if (data.email === 'bad@mail.com') {
      setFooterMessage({
        type: 'error',
        content: footerError,
      });
    }
    if (data.email === 'good@mail.com') {
      setFooterMessage({
        type: 'success',
        content: footerSuccess,
      });
    }
  };

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Change la clé à chaque changement de message, pour forcer le re-rendu
    setAnimationKey((prev) => prev + 1);
  }, [footerMessage]);

  return (
    <div className={`${formattedTitle}-form__container`}>
      <div className={`${formattedTitle}-form__wrapper`}>
        <FormTitle formattedTitle={formattedTitle} title={title} />
        <FormBase
          formattedTitle={formattedTitle}
          onSubmit={handleSubmit(onSubmit)}
        >
          {signupFormConfig.fields.map((field) => (
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
            isLoading={isloading}
            buttonText={signupFormConfig.buttonText}
          />
        </FormBase>
        <FormFooter
          key={animationKey}
          formattedTitle={formattedTitle}
          type={footerMessage?.type ?? 'default'}
          footerLink={
            footerMessage?.content ??
            signupFormConfig?.footerLink ?? {
              text: '',
              linkText: '',
              linkTo: '',
            }
          }
        />
      </div>
    </div>
  );
}

export default SignupForm;
