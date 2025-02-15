function LoginForm() {
  return (
    <div className="login-form__container">
      <div className="login-form__wrapper">
        <h2 className="login-form__title">Log in</h2>
        <form className="login-form__form">
          <div className="login-form__input-container">
            <label htmlFor="email" className="login-form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="login-form__input"
            />
          </div>
          <div className="login-form__input-container">
            <label htmlFor="password" className="login-form__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="login-form__input"
            />
          </div>
          <button type="submit" className="login-form__button">
            Log in
          </button>
          <div className="login-form__link-container">
            <a href="#" className="login-form__link">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
