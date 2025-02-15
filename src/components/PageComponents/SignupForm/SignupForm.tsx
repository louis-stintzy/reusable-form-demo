function SignupForm() {
  return (
    <div className="signup-form__container">
      <div className="signup-form__wrapper">
        <h2 className="signup-form__title">Sign up</h2>
        <form className="signup-form__form">
          <div className="signup-form__input-container">
            <label htmlFor="username" className="signup-form__label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="email" className="signup-form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="password" className="signup-form__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="signup-form__input"
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="confirm-password" className="signup-form__label">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm password"
              className="signup-form__input"
            />
          </div>
          <button type="submit" className="signup-form__button">
            Sign up
          </button>
          <div className="signup-form__link-container">
            <p className="signup-form__link-message">
              Already have an account ?
            </p>
            <a href="#" className="signup-form__link">
              Login now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
