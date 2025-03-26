import { Step, StepName } from '../../../../@types/builder';

import './Stepper.css';

interface StepperProps {
  steps: Step[];
  activeStepName: StepName;
  setActiveStep: (step: Step) => void;
}

function Stepper({ steps, activeStepName, setActiveStep }: StepperProps) {
  console.log(activeStepName);
  return (
    <div className="form-builder__stepper-wrapper">
      {steps.map((step) => (
        <button
          key={step.id}
          className={`form-builder__stepper-step ${
            activeStepName === step.name
              ? 'form-builder__stepper-step--active'
              : ''
          }`}
          onClick={() => setActiveStep(step)}
        >
          {step.title}
        </button>
      ))}
    </div>
  );
}

export default Stepper;
