import { NavLink } from 'react-router-dom';
import './SIgnupForm.css';

function SignupForm() {
  return (
    <div className="signup-form__container">
      <div className="signup-form__wrapper">
        <h2 className="signup-form__title">Sign up</h2>
        <form className="signup-form__form">
          <div className="signup-form__input-container">
            <label htmlFor="username" className="signup-form__label">
              ENTER NAME
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Name"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="email" className="signup-form__label">
              ENTER EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="password" className="signup-form__label">
              ENTER PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="confirm-password" className="signup-form__label">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm password"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__button-container">
            <div className="signup-form__button-wrapper">
              <button type="submit" className="signup-form__button">
                Sign up
              </button>
            </div>
          </div>
        </form>
        <div className="signup-form__link-container">
          <p className="signup-form__link-message">
            Already have an account ?{' '}
          </p>
          <NavLink className="signup-form__link" to="/login">
            Login now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
