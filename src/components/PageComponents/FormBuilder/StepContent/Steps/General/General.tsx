import GeneralForm from './GeneralForm/GeneralForm';

import './General.css';

function General() {
  return (
    <div className="form-builder__general">
      <h2 className="form-builder__step-title">General Information</h2>
      <p className="form-builder__step-description">
        Start by giving your form a descriptive title. This will be used to
        generate class names and type definitions.
      </p>
      <GeneralForm />
    </div>
  );
}

export default General;
