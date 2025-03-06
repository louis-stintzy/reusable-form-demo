interface FormContainerProps {
  formattedTitle: string;
  children: React.ReactNode;
}

function FormContainer({ formattedTitle, children }: FormContainerProps) {
  return (
    <div className={`${formattedTitle}-form__container`}>
      <div className={`${formattedTitle}-form__wrapper`}>{children}</div>
    </div>
  );
}

export default FormContainer;
