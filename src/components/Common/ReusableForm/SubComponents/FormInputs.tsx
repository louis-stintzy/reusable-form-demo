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
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { FieldDesactivation, FormField } from '../../../../@types/form';
import FormInput from './FormInput';
import { useEffect } from 'react';

interface FormInputsProps<T extends FieldValues> {
  formattedTitle: string;
  fields: FormField<T>[];
  options?: {
    fieldsDesactivation?: FieldDesactivation<T>[];
  };
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
}

function FormInputs<T extends FieldValues>({
  formattedTitle,
  fields,
  options,
  errors,
  register,
  watch,
  setValue,
}: FormInputsProps<T>) {
  // note : fonctionne mais génère un warning car disableFields est utilisé dans le useEffect
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

  useEffect(() => {
    console.log('Champs à désactiver', disableFields);
    // On nettoie les champs stockés dans `disableFields` avec `setValue`
    disableFields.forEach((field) => {
      // todo: Réinitialiser avec la valeur par défaut ou une chaîne vide ?
      // il faut retrouver dans les fields du form config le champ à nettoyer (disableFields n'est qu'un tableau de string)
      // note : 1/ avec la valeur par défaut
      const fieldToClean = fields.find((f) => f.id === field)!; // on utilise le ! car on est sûr de trouver le champ
      const fieldToCleanId = fieldToClean.id as Path<T>; // on cast le id en Path<T> pour setValue
      const valueToPut =
        (fieldToClean.defaultValue as PathValue<T, Path<T>>) ??
        ('' as PathValue<T, Path<T>>); // on cast le defaultValue en PathValue<T, Path<T>> pour setValue
      setValue(fieldToCleanId, valueToPut); // on attribue au champ sa valeur par défaut ou une chaîne vide
      // note : 2/ avec une chaîne vide
      // const fieldToClean = fields.find((f) => f.id === field)?.id as Path<T>;
      // setValue(fieldToClean, '' as PathValue<T, Path<T>>);
    });
  }, [disableFields, fields, setValue]);
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
