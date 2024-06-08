import React from "react";

import { login } from "./service";
import UserContext, { User } from "./UserContext";

export default function Login() {
  const { setUser } = React.useContext(UserContext);
  const errorRef = React.useRef<HTMLDivElement>(document.createElement("div"));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    try {
      const response = await login({ email, password });
      const data: User = response.data;
      if (data) {
        setUser(data);
        return;
      }
    } catch (e) {
      errorRef.current.innerHTML = e.response.data;
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
          <div className="login__error" ref={errorRef}></div>
          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
