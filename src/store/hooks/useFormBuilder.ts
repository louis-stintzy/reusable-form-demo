import useStore from '../store';

export const useFormBuilder = () => {
  return {
    isLoading: useStore((state) => state.isLoadingFormBuilder),
    error: useStore((state) => state.errorFB),
    success: useStore((state) => state.successFB),
    title: useStore((state) => state.title),
    fields: useStore((state) => state.fields),
    submitButton: useStore((state) => state.submitButton),
    footerMessage: useStore((state) => state.footerMessage),
    setTitle: useStore((state) => state.setTitle),
    setFields: useStore((state) => state.setFields),
    setSubmitButton: useStore((state) => state.setSubmitButton),
    setFooterMessage: useStore((state) => state.setFooterMessage),
    save: useStore((state) => state.save),
    reset: useStore((state) => state.resetFormBuilder),
  };
};
