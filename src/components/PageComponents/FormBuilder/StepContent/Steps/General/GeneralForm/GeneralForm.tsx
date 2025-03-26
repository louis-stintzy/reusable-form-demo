import ReusableForm from '../../../../../../Common/ReusableForm/ReusableForm';
import { generalFormConfig } from './generalForm.config';
import { generalFormSchema } from './generalForm.schema';
import { GeneralFormData } from './generalForm.types';

// Style dans StepContent.css

function GeneralForm() {
  const handleGeneralSubmit = (data: GeneralFormData) => {
    console.log('Step General : ', data);
  };

  return (
    <ReusableForm<GeneralFormData>
      isLoading={false}
      formConfig={generalFormConfig}
      formSchema={generalFormSchema}
      action={handleGeneralSubmit}
    />
  );
}

export default GeneralForm;
