interface FormTitleProps {
  formattedTitle: string;
  title: string;
}

function FormTitle({ formattedTitle, title }: FormTitleProps) {
  return <h2 className={`${formattedTitle}-form__title`}>{title}</h2>;
}

export default FormTitle;
