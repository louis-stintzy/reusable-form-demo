import { StepName } from '../../../../@types/builder';
import FormFields from '../Steps/FormFields';
import General from '../Steps/General';
import Messages from '../Steps/Messages';
import PreviewGenerate from '../Steps/PreviewGenerate';
import SubmitButton from '../Steps/SubmitButton';

interface StepContentProps {
  activeStepName: StepName;
}

function StepContent({ activeStepName }: StepContentProps) {
  return (
    <div className="form-builder__step-content">
      {activeStepName === 'general' && <General />}
      {activeStepName === 'form-fields' && <FormFields />}
      {activeStepName === 'submit-button' && <SubmitButton />}
      {activeStepName === 'messages' && <Messages />}
      {activeStepName === 'preview-generate' && <PreviewGenerate />}
    </div>
  );
}

export default StepContent;
