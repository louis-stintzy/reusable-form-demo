import { NavLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RegisterCredentials } from '../../../@types/auth';
import FormInput from '../../Common/ReusableForm/SubComponents/FormInput';
import { signupFormFields } from '../../../constants/formFields';

import './SignupForm.css';

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
          {signupFormFields.map((field) => (
            <FormInput
              key={field.id}
              classNames={{
                inputContainer: 'signup-form__input-container',
                label: 'signup-form__label',
                input: 'signup-form__input',
                errorContainer: 'signup-form__error-container',
                error: 'signup-form__error',
              }}
              label={field.label}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              error={errors[field.id] ? 'This field is required' : ''}
              register={register(field.id, { required: field.required })}
            />
          ))}
          {/* <FormInput
            classNames={{
              inputContainer: 'signup-form__input-container',
              label: 'signup-form__label',
              input: 'signup-form__input',
              errorContainer: 'signup-form__error-container',
              error: 'signup-form__error',
            }}
            label="ENTER NAME"
            id="name"
            type="text"
            placeholder="Enter Name"
            autoComplete="given-name"
            error={errors.name ? 'This field is required' : ''}
            register={register('name', { required: true })}
          />
          <FormInput
            classNames={{
              inputContainer: 'signup-form__input-container',
              label: 'signup-form__label',
              input: 'signup-form__input',
              errorContainer: 'signup-form__error-container',
              error: 'signup-form__error',
            }}
            label="ENTER EMAIL"
            id="email"
            type="email"
            placeholder="Enter Email"
            autoComplete="email"
            error={errors.email ? 'This field is required' : ''}
            register={register('email', { required: true })}
          />
          <FormInput
            classNames={{
              inputContainer: 'signup-form__input-container',
              label: 'signup-form__label',
              input: 'signup-form__input',
              errorContainer: 'signup-form__error-container',
              error: 'signup-form__error',
            }}
            label="ENTER PASSWORD"
            id="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="new-password"
            error={errors.password ? 'This field is required' : ''}
            register={register('password', { required: true })}
          />
          <FormInput
            classNames={{
              inputContainer: 'signup-form__input-container',
              label: 'signup-form__label',
              input: 'signup-form__input',
              errorContainer: 'signup-form__error-container',
              error: 'signup-form__error',
            }}
            label="CONFIRM PASSWORD"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            error={errors.confirmPassword ? 'This field is required' : ''}
            register={register('confirmPassword', { required: true })}
          /> */}
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
