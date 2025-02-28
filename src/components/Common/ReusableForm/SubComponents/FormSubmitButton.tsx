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
