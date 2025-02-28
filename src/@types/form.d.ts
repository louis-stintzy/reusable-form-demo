import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

/*
 * Interface FormField : Définition générique d'un champ de formulaire
 * - `T` représente les valeurs du formulaire (ex: `RegisterCredentials`)
 * - FieldValues est une interface définie dans la librairie react-hook-form pour typer les valeurs des champs de formulaire (export type FieldValues = Record<string, any>;)
 * - `label` est le texte du libellé affiché.
 * - `id` est une clé de `T`, typée avec `Path<T>`
 * -`Path<T>` est utilisé pour typer l'id d'un champ de formulaire comme une clé de l'interface T (chemin "T.clé" similaire à "keyof T"))
 * - On étend `InputHTMLAttributes<HTMLInputElement>` pour inclure toutes les propriétés natives des `<input>`(ex: type, placeholder, etc. pas besoin de les redéfinir ici)
 */
export interface FormField<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: Path<T>;
}

/*
 * Props pour le composant FormInput (sous-composant de ReusableForm)
 * - `T` assure que `register`, `errors` et `id` sont correctement typés en fonction du formulaire utilisé.
 * - classNames : styles CSS pour personnaliser l'affichage du champ.
 * - label : texte du libellé affiché.
 * - error : message d'erreur à afficher (optionnel).
 * - register : méthode `register` fournie par `react-hook-form` pour enregistrer les champs de formulaire.
 */
export interface FormInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  formattedTitle: string;
  label: string;
  id: Path<T>;
  error?: string | null;
  register: UseFormRegister<T>;
}
