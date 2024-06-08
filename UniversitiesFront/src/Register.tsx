import { register } from "./service";

export default function Register() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = (e.currentTarget[0] as HTMLInputElement).value;
    const lastName = (e.currentTarget[1] as HTMLInputElement).value;
    const email = (e.currentTarget[2] as HTMLInputElement).value;
    const password = (e.currentTarget[3] as HTMLInputElement).value;
    const confirmPassword = (e.currentTarget[4] as HTMLInputElement).value;

    const response = await register({
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    });
    const data = response.data;
    if (data.status === 200) {
      return;
    }
    const errors = data.errors;
    errors.forEach((error) => {
      console.log(error);
    });
  };

  return (
    <div className="register">
      <div className="register__form">
        <h1 className="register__title">Register</h1>
        <form className="register__form" onSubmit={handleSubmit}>
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
