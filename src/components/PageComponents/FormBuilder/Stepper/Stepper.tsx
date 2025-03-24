import { Step } from '../../../../@types/builder';

interface StepperProps {
  steps: Step[];
  activeStep: string;
}

function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <div className="form-builder__stepper">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`stepper__step ${
            activeStep === step.id ? 'stepper__step--active' : ''
          }`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
