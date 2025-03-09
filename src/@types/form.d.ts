import { InputHTMLAttributes } from 'react';
import { FieldValues, Path } from 'react-hook-form';

/**
 * Interface FooterMessageData : Définition des données d'un message de pied de formulaire
 * - `type` est le type de message (default, error, success, info)
 * - `text` est le message
 * - `linkText` est le texte du lien cliquable
 * - `linkTo` est l'URL vers laquelle redirige le lien
 */

export interface FooterMessageData {
  type: 'default' | 'error' | 'success' | 'info' | 'none';
  text?: string;
  linkText?: string;
  linkTo?: string;
}

/**
 * Interface FormField : Définition générique d'un champ de formulaire
 * - `T` représente les valeurs du formulaire (ex: `RegisterCredentials`)
 * - FieldValues est une interface définie dans la librairie react-hook-form pour typer les valeurs des champs de formulaire (export type FieldValues = Record<string, any>;)
 * - `label` est le texte du libellé affiché.
 * - `id` est une clé de `T`, typée avec `Path<T>`
 * -`Path<T>` est utilisé pour typer l'id d'un champ de formulaire comme une clé de l'interface T (chemin "T.clé" similaire à "keyof T"))
 * - On étend `InputHTMLAttributes<HTMLInputElement>` pour inclure toutes les propriétés natives des `<input>`(ex: type, placeholder, etc. pas besoin de les redéfinir ici)
 *
 * @template T - Type générique représentant les valeurs du formulaire (ex: `RegisterCredentials`)
 * @property {string} label - Libellé du champ de formulaire
 * @property {Path<T>} id - Clé de l'objet `T`, utilisée pour identifier l'input dans `react-hook-form`
 */
export interface FormField<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: Path<T>;
}

/**
 * Interface FormConfig<T> : Définition de la structure d'un formulaire configurable.
 *
 * @template T - Type des données du formulaire (ex: `RegisterCredentials`)
 * @property {string} title - Titre du formulaire.
 * @property {Object} buttonText - Texte du bouton de soumission.
 * @property {string} buttonText.loading - Texte affiché lorsque le formulaire est en cours de soumission.
 * @property {string} buttonText.default - Texte affiché par défaut sur le bouton de soumission.
 * @property {FormField<T>[]} fields - Liste des champs du formulaire, chacun défini selon `FormField<T>`.
 * @property {FooterMessageData} [footerMessage] - Message de pied de formulaire option
 */

export interface FormConfig<T extends FieldValues> {
  title: string;
  buttonText: {
    loading: string;
    default: string;
  };
  fields: FormField<T>[];
  footerMessage?: FooterMessageData;
}
