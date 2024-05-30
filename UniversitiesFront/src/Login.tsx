import React from "react";

import { login } from "./service";
import UserContext, { User } from "./UserContext";

export default function Login() {
  const { setUser } = React.useContext(UserContext);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    const response = await login({ email, password });
    const data: User = response.data;
    if (data) {
      setUser(data);
      return;
    }
  };

  return (
    <div className="login">
      <div className="login__form">
        <h1 className="login__title">Login</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <input type="text" className="login__input" placeholder="E-mail" />
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
