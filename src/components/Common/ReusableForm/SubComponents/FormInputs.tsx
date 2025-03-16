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

import {
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { FieldDesactivation, FormField } from '../../../../@types/form';
import FormInput from './FormInput';

interface FormInputsProps<T extends FieldValues> {
  formattedTitle: string;
  fields: FormField<T>[];
  options?: {
    fieldsDesactivation?: FieldDesactivation<T>[];
  };
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
}

function FormInputs<T extends FieldValues>({
  formattedTitle,
  fields,
  options,
  errors,
  register,
  watch,
}: FormInputsProps<T>) {
  // On crée un tableau `disableFields` pour stocker les champs à désactiver
  const disableFields: Path<T>[] = [];
  // Si `options.fieldsDesactivation` existe, on crée un tableau `fieldsToWatch` contenant les champs à surveiller
  if (options?.fieldsDesactivation) {
    const fieldsToWatch = options.fieldsDesactivation.map(
      (field) => field.condition.field
    );
    // On récupère les valeurs des champs à surveiller avec `watch`
    const watchFieldsValues: PathValue<T, Path<T>>[] = watch(
      fieldsToWatch as Path<T>[]
    );
    // console.log(watchFieldsValues);
    // On compare les valeurs des champs surveillés aux conditions de désactivation (si la valeur en position `index` est égale à la valeur de la condition en position `index`, on désactive le champ correspondant)
    fieldsToWatch.forEach((_field, index) => {
      if (options.fieldsDesactivation) {
        if (
          watchFieldsValues[index] ===
          options.fieldsDesactivation[index].condition.value
        ) {
          disableFields.push(options.fieldsDesactivation[index].field);
        }
      }
    });
    // console.log(disableFields);
  }
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
          disabled={disableFields.includes(field.id as Path<T>)}
        />
      ))}
    </>
  );
}

export default FormInputs;
