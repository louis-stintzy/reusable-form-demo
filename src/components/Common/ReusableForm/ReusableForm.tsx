/**
 * Composant ReusableForm : Formulaire dynamique basé sur une configuration et un schéma de validation.
 * @template T - Type générique représentant les valeurs du formulaire (ex: `RegisterCredentials`)
 * @param {Object} props - Les propriétés du composant
 * @param {boolean} props.isLoading - État de chargement du formulaire
 * @param {FormConfig<T>} props.formConfig - Configuration du formulaire (titre, champs, bouton, footer)
 * @param {ZodSchema<T>} props.formSchema - Schéma de validation du formulaire
 * @param {FooterMessageData} [props.footerMessage] - Message de pied de formulaire optionnel
 * @param {(data: T) => void} props.action - Fonction à exécuter lors de la soumission du formulaire
 * @returns {JSX.Element} - Le formulaire généré dynamiquement
 */

import { ZodSchema } from 'zod';
import { FooterMessageData, FormConfig } from '../../../@types/form';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import FormContainer from './SubComponents/FormContainer';
import FormTitle from './SubComponents/FormTitle';
import FormBase from './SubComponents/FormBase';
import FormInputs from './SubComponents/FormInputs';
import FormSubmitButton from './SubComponents/FormSubmitButton';
import FormFooter from './SubComponents/FormFooter';
import { formatTitle } from '../../../utils/formatTitle';

interface ReusableFormProps<T extends FieldValues> {
  isLoading: boolean;
  formConfig: FormConfig<T>;
  formSchema: ZodSchema<T>;
  footerMessage?: FooterMessageData;
  action: (data: T) => void;
}

function ReusableForm<T extends FieldValues>({
  isLoading,
  formConfig,
  formSchema,
  footerMessage,
  action,
}: ReusableFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });

  // const [footerMessage, setFooterMessage] = useState<{
  //   type: 'error' | 'success' | 'default';
  //   content: {
  //     text: string;
  //     linkText: string;
  //     linkTo: string;
  //   };
  // } | null>(null);
  const title = formConfig.title;
  const formattedTitle = formatTitle(title);

  // note : Simulation de l'état de chargement, de succès et d'erreur

  // const footerError = {
  //   text: 'Email already exists,',
  //   linkText: 'please login ',
  //   linkTo: '/login',
  // };
  // const footerSuccess = {
  //   text: 'Account created successfully',
  //   linkText: 'Login now',
  //   linkTo: '/login',
  // };

  const onSubmit: SubmitHandler<T> = (data) => {
    console.log('Données du formulaire', data);
    action(data);
    // note : ici, on simule un appel API pour vérifier si l'email existe déjà
    // if (data.email === 'bad@mail.com') {
    //   setFooterMessage({
    //     type: 'error',
    //     content: footerError,
    //   });
    // }
    // if (data.email === 'good@mail.com') {
    //   setFooterMessage({
    //     type: 'success',
    //     content: footerSuccess,
    //   });
    // }
  };

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Change la clé à chaque changement de message, pour forcer le re-rendu
    setAnimationKey((prev) => prev + 1);
  }, [footerMessage]);

  return (
    <FormContainer formattedTitle={formattedTitle}>
      <FormTitle formattedTitle={formattedTitle} title={title} />
      <FormBase
        formattedTitle={formattedTitle}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInputs<T>
          formattedTitle={formattedTitle}
          fields={formConfig.fields}
          errors={errors}
          register={register}
        />
        <FormSubmitButton
          formattedTitle={formattedTitle}
          isLoading={isLoading}
          buttonText={formConfig.buttonText}
        />
      </FormBase>
      <FormFooter
        key={animationKey}
        formattedTitle={formattedTitle}
        footerMessage={
          footerMessage ??
          formConfig.footerMessage ?? {
            type: 'none',
            text: undefined,
            linkText: undefined,
            linkTo: undefined,
          }
        }
      />
    </FormContainer>
  );
}

export default ReusableForm;
