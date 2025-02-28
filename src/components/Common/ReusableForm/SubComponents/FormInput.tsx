import { FieldValues } from 'react-hook-form';
import { FormInputProps } from '../../../../@types/form';

/*
 * Composant FormInput : Champ de formulaire réutilisable
 * - Utilisé pour rendre un champ de formulaire avec un libellé `label`
 * - Applique des styles via `classNames`
 * - Affiche un message d'erreur `error` si nécessaire
 * - Utilise `register` pour enregistrer le champ dans `react-hook-form`
 * - Accepte toutes les propriétés HTML natives des `<input>` via `...inputProps`
 */

function FormInput<T extends FieldValues>({
  classNames,
  label,
  id,
  required,
  error,
  register,
  ...inputProps // '...inputProps' permet de récupérer toutes les autres props passées à FormInput et les transmet à l’<input>
}: FormInputProps<T>) {
  return (
    <div className={classNames.inputContainer}>
      <label htmlFor={id} className={classNames.label}>
        {label}
      </label>
      <input
        {...register(id, {
          required: required,
        })}
        {...inputProps}
        className={classNames.input}
      />
      <div className={classNames.errorContainer}>
        {error && <p className={classNames.error}>{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
