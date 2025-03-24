export type StepId =
  | 'general'
  | 'form-fields'
  | 'submit-button'
  | 'messages'
  | 'preview-generate';

export interface Step {
  index: number;
  id: StepId;
  title: string;
}
