import { StepId } from '../../../../@types/builder';
import FormFields from '../Steps/FormFields';
import General from '../Steps/General';
import Messages from '../Steps/Messages';
import PreviewGenerate from '../Steps/PreviewGenerate';
import SubmitButton from '../Steps/SubmitButton';

interface StepContentProps {
  activeStep: StepId;
}

function StepContent({ activeStep }: StepContentProps) {
  return (
    <div className="form-builder__step-content">
      {activeStep === 'general' && <General />}
      {activeStep === 'form-fields' && <FormFields />}
      {activeStep === 'submit-button' && <SubmitButton />}
      {activeStep === 'messages' && <Messages />}
      {activeStep === 'preview-generate' && <PreviewGenerate />}
    </div>
  );
}

export default StepContent;
