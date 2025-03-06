/**
 * Composant FormInputs :
 * - Gère l'affichage d'une liste de champs de formulaire
 * - Transmet les éventuelles erreurs de validation à chaque champ
 * - Transmet `register` de `react-hook-form` pour enregistrer les champs
 *
 * @template T - Type générique représentant les valeurs du formulaire (ex: `RegisterCredentials`)
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.formattedTitle - Titre du formulaire formaté pour les classNames CSS
 * @param {FormField<T>[]} props.fields - Liste des champs de formulaire à afficher
 * @param {FieldErrors<T>} props.errors - Erreurs de validation des champs de formulaire
 * @param {UseFormRegister<T>} props.register - Fonction `register` de `react-hook-form`
 * @returns {JSX.Element} - Liste de composants FormInput
 */

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormField } from '../../../../@types/form';
import FormInput from './FormInput';

interface FormInputsProps<T extends FieldValues> {
  formattedTitle: string;
  fields: FormField<T>[];
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

function FormInputs<T extends FieldValues>({
  formattedTitle,
  fields,
  errors,
  register,
}: FormInputsProps<T>) {
  return (
    <>
      {fields.map((field) => (
        <FormInput<T>
          key={field.id}
          formattedTitle={formattedTitle}
          // On passe directement toutes les propriétés de `field` à `FormInput` (label, id, type, etc. au lieu de `label={field.label}`, `id={field.id}`, etc.)
          {...field} //
          error={
            typeof errors[field.id]?.message === 'string'
              ? (errors[field.id]?.message as string)
              : null
          }
          register={register}
        />
      ))}
    </>
  );
}

export default FormInputs;
