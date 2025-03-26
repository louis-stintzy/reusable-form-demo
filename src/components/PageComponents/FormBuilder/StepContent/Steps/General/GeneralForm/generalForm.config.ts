import { FormConfig } from '../../../../../../../@types/form';
import { GeneralFormData } from './generalForm.types';

export const generalFormConfig: FormConfig<GeneralFormData> = {
  title: 'Form Information',
  fields: [
    {
      label: 'Form Title',
      id: 'formTitle',
      type: 'text',
      placeholder: 'e.g. User Profile, Sign Up, Contact Form',
      required: true,
    },
  ],
  submitButton: {
    loading: {
      type: 'text',
      content: 'Saving...',
    },
    default: {
      type: 'text',
      content: 'Save',
    },
  },
};
