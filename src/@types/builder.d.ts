export type ActionType = 'next' | 'previous' | 'submit';

export type StepName =
  | 'general'
  | 'form-fields'
  | 'submit-button'
  | 'messages'
  | 'preview-generate';

export interface Step {
  id: number;
  name: StepName;
  title: string;
}

export interface FormBuilderFiles {
  types: string;
  config: string;
  schema: string;
  style: string | null;
  component: string;
  constants: string | null;
  license: string | null;
}

export interface BasicFormField
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  id: Path<T>;
  options?: readonly { readonly value: string; readonly label: string }[]; // `as const` est utilisé dans les constantes pour avoir le bon type (tuple) dans le schema zod et rend les tableaux readonly
}

export interface FormToSaveData {
  title: string;
  description: string | null;
  file: FormBuilderFiles;
  media: string | null;
  url: string | null;
  visibility: 'public' | 'private';
  price: number | null;
}
