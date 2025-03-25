import { StateCreator } from 'zustand';
import { FormToSaveData } from '../../@types/builder';
import {
  getForm,
  getFormsByTitle,
  getFormsByUserId,
  getPublicForms,
} from '../../services/savedFormsService';

export interface FormPublicData extends FormToSaveData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedFormsState {
  isLoadingSavedForms: boolean;
  errorSF: string | null;
  successSF: string | null;
  savedForms: FormPublicData[];
  selectedForm: FormPublicData | null;
}

// todo : remplacer par getForms
// getForms = (params: {
//   userId?: number;
//   title?: string;
//   visibility?: 'public' | 'private';
//   page?: number;
//   limit?: number;
// })

export interface SavedFormsActions {
  getFormsByTitle: (
    title: string,
    visibility: 'private' | 'public'
  ) => Promise<void>;
  getFormsByUserId: (userId: number) => Promise<void>;
  getPublicForms: () => Promise<void>;
  getForm: (id: number) => void;
  resetMessages: () => void;
  resetSelectedForm: () => void;
  resetSavedForms: () => void;
  resetSavedFormsSlice: () => void;
}

export interface SavedFormsSlice extends SavedFormsState, SavedFormsActions {}

export const initialState: SavedFormsState = {
  isLoadingSavedForms: false,
  errorSF: null,
  successSF: null,
  savedForms: [],
  selectedForm: null,
};

export const createSavedFormsSlice: StateCreator<SavedFormsSlice> = (set) => ({
  ...initialState,
  getFormsByTitle: async (title: string, visibility: 'private' | 'public') => {
    try {
      set({ isLoadingSavedForms: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const forms: FormPublicData[] = await getFormsByTitle(title, visibility);
      set({ savedForms: forms, successSF: 'Forms loaded successfully' });
    } catch (error) {
      console.error('Get forms by title : ', error);
      set({ errorSF: 'An error occurred while fetching forms' });
    } finally {
      set({ isLoadingSavedForms: false });
    }
  },
  getFormsByUserId: async (userId: number) => {
    try {
      set({ isLoadingSavedForms: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const forms: FormPublicData[] = await getFormsByUserId(userId);
      set({ savedForms: forms, successSF: 'Forms loaded successfully' });
    } catch (error) {
      console.error('Get forms by user id : ', error);
      set({ errorSF: 'An error occurred while fetching forms' });
    } finally {
      set({ isLoadingSavedForms: false });
    }
  },
  getPublicForms: async () => {
    try {
      set({ isLoadingSavedForms: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const forms: FormPublicData[] = await getPublicForms();
      set({ savedForms: forms, successSF: 'Forms loaded successfully' });
    } catch (error) {
      console.error('Get public forms : ', error);
      set({ errorSF: 'An error occurred while fetching forms' });
    } finally {
      set({ isLoadingSavedForms: false });
    }
  },
  getForm: async (id: number) => {
    try {
      set({ isLoadingSavedForms: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const form: FormPublicData = await getForm(id);
      set({ selectedForm: form, successSF: 'Form loaded successfully' });
    } catch (error) {
      console.error('Get form : ', error);
      set({ errorSF: 'An error occurred while fetching form' });
    } finally {
      set({ isLoadingSavedForms: false });
    }
  },
  resetMessages: () => {
    set({ errorSF: null, successSF: null });
  },
  resetSelectedForm: () => {
    set({ selectedForm: null });
  },
  resetSavedForms: () => {
    set({ savedForms: [] });
  },
  resetSavedFormsSlice: () => {
    set({ ...initialState });
  },
});
