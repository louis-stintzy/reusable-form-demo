import { useState } from 'react';
import { Step } from '../../../@types/builder';
import Stepper from './Stepper/Stepper';
import StepContent from './StepContent/StepContent';
import ActionButtons from './ActionButtons/ActionButtons';

function FormBuilder() {
  const [activeStep, setActiveStep] = useState<Step>({
    id: 0,
    name: 'general',
    title: 'General',
  });

  const steps: Step[] = [
    {
      id: 0,
      name: 'general',
      title: 'General',
    },
    {
      id: 1,
      name: 'form-fields',
      title: 'Form Fields',
    },
    {
      id: 2,
      name: 'submit-button',
      title: 'Submit Button',
    },
    {
      id: 3,
      name: 'messages',
      title: 'Messages',
    },
    {
      id: 4,
      name: 'preview-generate',
      title: 'Preview & Generate',
    },
  ];
  return (
    <div className="form-builder">
      <Stepper activeStepName={activeStep.name} steps={steps} />
      <StepContent activeStepName={activeStep.name} />
      <ActionButtons
        activeStepId={activeStep.id}
        steps={steps}
        setActiveStep={setActiveStep}
      />
    </div>
  );
}

export default FormBuilder;
