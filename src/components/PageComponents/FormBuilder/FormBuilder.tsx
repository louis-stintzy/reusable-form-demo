import { useState } from 'react';
import { Step } from '../../../@types/builder';
import Stepper from './Stepper/Stepper';
import StepContent from './StepContent/StepContent';

function FormBuilder() {
  const [activeStep, setActiveStep] = useState<Step>({
    index: 0,
    id: 'general',
    title: 'General',
  });

  const steps: Step[] = [
    {
      index: 0,
      id: 'general',
      title: 'General',
    },
    {
      index: 1,
      id: 'form-fields',
      title: 'Form Fields',
    },
    {
      index: 2,
      id: 'submit-button',
      title: 'Submit Button',
    },
    {
      index: 3,
      id: 'messages',
      title: 'Messages',
    },
    {
      index: 4,
      id: 'preview-generate',
      title: 'Preview & Generate',
    },
  ];
  return (
    <div className="form-builder">
      <Stepper activeStep={activeStep.id} steps={steps} />
      <StepContent activeStep={activeStep.id} />
      <div className="form-builder__actions">
        <button
          onClick={() => setActiveStep(activeStep.index - 1)}
          disabled={activeStep.index === 0}
        >
          Back
        </button>
        <button
          onClick={() => setActiveStep(activeStep.index + 1)}
          disabled={activeStep.index === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FormBuilder;
