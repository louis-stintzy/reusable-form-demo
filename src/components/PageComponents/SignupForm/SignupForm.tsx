import { NavLink } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';

import './SIgnupForm.css';
import { RegisterCredentials } from '../../../@types/auth';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    console.log('Données du formulaire', data);
  };
  return (
    <div className="signup-form__container">
      <div className="signup-form__wrapper">
        <h2 className="signup-form__title">Sign up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form__form">
          <div className="signup-form__input-container">
            <label htmlFor="username" className="signup-form__label">
              ENTER NAME
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              id="username"
              placeholder="Enter Name"
              className="signup-form__input"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="email" className="signup-form__label">
              ENTER EMAIL
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              id="email"
              placeholder="Enter Email"
              className="signup-form__input"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="password" className="signup-form__label">
              ENTER PASSWORD
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
              id="password"
              placeholder="Enter Password"
              className="signup-form__input"
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="confirm-password" className="signup-form__label">
              CONFIRM PASSWORD
            </label>
            <input
              {...register('confirmPassword', { required: true })}
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              className="signup-form__input"
            />
            {errors.confirmPassword && <span>This field is required</span>}
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
