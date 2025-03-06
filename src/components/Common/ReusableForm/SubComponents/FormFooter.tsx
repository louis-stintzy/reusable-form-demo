/**
 * Composant FormFooter : Affiche un texte et/ou lien en bas du formulaire
 *
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.formattedTitle - Titre du formulaire formaté pour les classNames CSS
 * @param {Object} props.footerLink - Texte et lien à afficher
 * @param {string} props.footerLink.text - Texte d'accompagnement
 * @param {string} props.footerLink.linkText - Texte du lien cliquable
 * @param {string} props.footerLink.linkTo - URL vers laquelle redirige le lien
 */

import { NavLink } from 'react-router-dom';

interface FormFooterProps {
  formattedTitle: string;
  type: 'default' | 'error' | 'success';
  footerLink: {
    text?: string;
    linkText?: string;
    linkTo?: string;
  };
}

function FormFooter({ formattedTitle, type, footerLink }: FormFooterProps) {
  const { text, linkText, linkTo } = footerLink;
  return (
    <div className={`${formattedTitle}-form__link-container--${type}`}>
      {text && (
        <p className={`${formattedTitle}-form__link-message--${type}`}>
          {text}
        </p>
      )}
      {linkText && linkTo && (
        <NavLink
          className={`${formattedTitle}-form__link--${type}`}
          to={`${linkTo}`}
        >
          {linkText}
        </NavLink>
      )}
    </div>
  );
}

export default FormFooter;
