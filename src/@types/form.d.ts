/*
 * FormInput incluent toutes les propriétés natives d'un <input> HTML : type, placeholder, required, etc. (pas besoin de redéfinir manuellement des props)
 */
import { InputHTMLAttributes } from 'react';

/*
 * UseFormRegisterReturn est une interface définie dans la librairie react-hook-form, utilisée pour typer la prop 'register' de FormInput
 */
import { UseFormRegisterReturn } from 'react-hook-form';

/*
 * FormField représente les propriétés d'un champ de formulaire
 */
export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/*
 * Props pour le composant FormInput (sous-composant de ReusableForm)
 */
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
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
