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
