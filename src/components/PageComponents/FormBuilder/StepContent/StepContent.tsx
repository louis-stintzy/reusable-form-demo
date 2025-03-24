import { StepName } from '../../../../@types/builder';
import FormFields from './Steps/FormFields/FormFields';
import General from './Steps/General/General';
import Messages from './Steps/Message/Messages';
import PreviewGenerate from './Steps/PreviewGenerate/PreviewGenerate';
import SubmitButton from './Steps/SubmitButton/SubmitButton';

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
