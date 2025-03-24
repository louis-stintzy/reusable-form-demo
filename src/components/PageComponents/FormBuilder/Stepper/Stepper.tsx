import { Step, StepName } from '../../../../@types/builder';

interface StepperProps {
  steps: Step[];
  activeStepName: StepName;
}

function Stepper({ steps, activeStepName }: StepperProps) {
  return (
    <div className="form-builder__stepper">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`stepper__step ${
            activeStepName === step.name ? 'stepper__step--active' : ''
          }`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
