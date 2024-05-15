import "./UserButton.css";

import React from "react";

import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import UserContext from "./UserContext";

export default function UserButton() {
  const user = React.useContext(UserContext);
  const [state, setState] = React.useState("login");
  React.useEffect(() => {
    if (user) {
      setState("profile");
    }
  }, [user]);

  return (
    <div className="user-button">
      <button
        className="user-button__button"
        onClick={() => {
          if (user) {
            if (state === "profile") {
              setState("");
              return;
            }
            setState("profile");
            return;
          }
          if (state === "login") {
            setState("register");
            return;
          }
          if (state === "register") {
            setState("login");
            return;
          }
        }}
      >
        {user ? `${user.firstName}'s profile` : "Login"}
      </button>
      <div className="popup">
        {state === "login" ? (
          <Login />
        ) : state === "register" ? (
          <Register />
        ) : state === "profile" ? (
          <Profile />
        ) : null}
      </div>
    </div>
  );
}
