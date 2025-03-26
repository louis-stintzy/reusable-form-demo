import { StateCreator } from 'zustand';
import { ButtonContentData, FooterMessageData } from '../../@types/form';
import { saveForm } from '../../services/formBuilderService';
import { BasicFormField, FormToSaveData } from '../../@types/builder';

export interface SubmitButtonData {
  //todo: à déplacer dans le type form et dans le "package"
  loading: ButtonContentData;
  default: ButtonContentData;
}

export interface FormBuilderState {
  isLoadingFormBuilder: boolean;
  errorFB: string | null;
  successFB: string | null;
  title: string;
  fields: BasicFormField[];
  submitButton: SubmitButtonData;
  footerMessage: FooterMessageData;
}

export interface FormBuilderActions {
  setTitle: (title: string) => void;
  setFields: (fields: BasicFormField[]) => void;
  setSubmitButton: (submitButton: SubmitButtonData) => void;
  setFooterMessage: (footerMessage: FooterMessageData) => void;
  save: (formData: FormToSaveData) => Promise<void>;
  resetFormBuilder: () => void;
}

export interface FormBuilderSlice
  extends FormBuilderState,
    FormBuilderActions {}

export const initialState: FormBuilderState = {
  isLoadingFormBuilder: false,
  errorFB: null,
  successFB: null,
  title: '',
  fields: [],
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
  footerMessage: {
    type: 'none',
  },
};

export const createFormBuilderSlice: StateCreator<FormBuilderSlice> = (
  set
) => ({
  ...initialState,
  setTitle: (title: string) => set({ title }),
  setFields: (fields: BasicFormField[]) => set({ fields }),
  setSubmitButton: (submitButton: SubmitButtonData) => set({ submitButton }),
  setFooterMessage: (footerMessage: FooterMessageData) =>
    set({ footerMessage }),
  save: async (formData: FormToSaveData) => {
    try {
      set({ isLoadingFormBuilder: true });
      await saveForm(formData);
      console.log('Form saved');
      set(initialState);
    } catch (error) {
      console.error('Save form error: ', error);
      set({
        errorFB: 'An error occurred while saving the form',
      });
    } finally {
      set({ isLoadingFormBuilder: false });
    }
  },
  resetFormBuilder: () => {
    set(initialState);
  },
});
