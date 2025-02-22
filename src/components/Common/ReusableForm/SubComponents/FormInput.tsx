import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// FormInput incluent toutes les propriétés natives d'un <input> HTML : type, placeholder, required, etc. (pas besoin de redéfinir manuellement des props)
// et les propriétés personnalisées suivantes:

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames: {
    inputContainer: string;
    label: string;
    input: string;
    errorContainer: string;
    error: string;
  };
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
}

function FormInput({
  classNames,
  label,
  error,
  register, // 'register' est défini dans le composant parent
  ...inputProps // '...inputProps' permet de récupérer toutes les autres props passées à FormInput et les transmet à l’<input>
}: FormInputProps) {
  return (
    <div className={classNames.inputContainer}>
      <label htmlFor={inputProps.id} className={classNames.label}>
        {label}
      </label>
      <input {...register} {...inputProps} className={classNames.input} />
      <div className={classNames.errorContainer}>
        {error && <p className={classNames.error}>{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
