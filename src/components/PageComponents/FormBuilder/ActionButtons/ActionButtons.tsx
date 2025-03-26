import { ActionType, Step } from '../../../../@types/builder';

import './ActionButtons.css';

interface ActionButtonsProps {
  activeStepId: number;
  steps: Step[];
  setActiveStep: (step: Step) => void;
}

function ActionButtons({
  activeStepId,
  steps,
  setActiveStep,
}: ActionButtonsProps) {
  const handleClick = (action: ActionType) => {
    switch (action) {
      case 'next':
        setActiveStep(steps[activeStepId + 1]);
        break;
      case 'previous':
        setActiveStep(steps[activeStepId - 1]);
        break;
      case 'submit':
        // todo handle submit
        console.log('submit');
        break;
      default:
        break;
    }
  };
  return (
    <div className="form-builder__buttons-wrapper">
      <button
        onClick={() => handleClick('previous')}
        disabled={activeStepId === 0}
      >
        Previous
      </button>
      {activeStepId === steps.length - 1 ? (
        <button onClick={() => handleClick('submit')}>Submit</button>
      ) : (
        <button onClick={() => handleClick('next')}>Next</button>
      )}
    </div>
  );
}

export default ActionButtons;
