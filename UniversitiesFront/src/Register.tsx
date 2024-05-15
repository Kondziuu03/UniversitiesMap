export default function Register() {
  return (
    <div className="register">
      <div className="register__form">
        <h1 className="register__title">Register</h1>
        <form className="register__form">
          <input
            type="text"
            className="register__input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="register__input"
            placeholder="Last Name"
          />
          <input type="email" className="register__input" placeholder="Email" />
          <input
            type="password"
            className="register__input"
            placeholder="Password"
          />
          <input
            type="password"
            className="register__input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="register__button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
