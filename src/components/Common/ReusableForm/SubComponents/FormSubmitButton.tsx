/**
 * Composant FormSubmitButton : Bouton de soumission réutilisable
 * - Utilisé pour soumettre un formulaire
 * - Désactivé (`disabled`) pendant le chargement (`isLoading`)
 * - Affiche un texte dynamique selon l'état du formulaire (`loading` ou `default`)
 * - Applique des classes dynamiques basées sur `formattedTitle`
 *
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.formattedTitle - Titre du formulaire formaté pour les classNames CSS
 * @param {boolean} props.isLoading - Indique si le formulaire est en cours de soumission
 * @param {Object} props.buttonText - Contient les textes à afficher sur le bouton
 * @param {string} props.buttonText.loading - Texte affiché lorsque la soumission est en cours
 * @param {string} props.buttonText.default - Texte affiché lorsque le formulaire est prêt à être soumis
 */

interface FormSubmitButtonProps {
  formattedTitle: string;
  isLoading: boolean;
  buttonText: {
    loading: string;
    default: string;
  };
}

function FormSubmitButton({
  formattedTitle,
  isLoading,
  buttonText,
}: FormSubmitButtonProps) {
  return (
    <div className={`${formattedTitle}-form__button-container`}>
      <div className={`${formattedTitle}-form__button-wrapper`}>
        <button
          type="submit"
          className={`${formattedTitle}-form__button`}
          disabled={isLoading}
        >
          {isLoading ? buttonText.loading : buttonText.default}
        </button>
      </div>
    </div>
  );
}

export default FormSubmitButton;
