export default function Login() {
  return (
    <div className="login">
      <div className="login__form">
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          <input type="text" className="login__input" placeholder="Username" />
          <input
            type="password"
            className="login__input"
            placeholder="Password"
          />
          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
