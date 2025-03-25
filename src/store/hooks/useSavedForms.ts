import useStore from '../store';

export const useSavedForms = () => {
  return {
    isLoading: useStore((state) => state.isLoadingSavedForms),
    error: useStore((state) => state.errorSF),
    success: useStore((state) => state.successSF),
    forms: useStore((state) => state.savedForms),
    selectedForm: useStore((state) => state.selectedForm),
    getFormsByTitle: useStore((state) => state.getFormsByTitle),
    getFormsByUserId: useStore((state) => state.getFormsByUserId),
    getPublicForms: useStore((state) => state.getPublicForms),
    getForm: useStore((state) => state.getForm),
    resetMessages: useStore((state) => state.resetMessages),
    resetSelectedForm: useStore((state) => state.resetSelectedForm),
    resetSavedForms: useStore((state) => state.resetSavedForms),
    resetSavedFormsSlice: useStore((state) => state.resetSavedFormsSlice),
  };
};
