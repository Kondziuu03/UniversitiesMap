import "./UserButton.css";

import React from "react";

import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import UserContext from "./UserContext";

export default function UserButton() {
  const user = React.useContext(UserContext);
  const [state, setState] = React.useState("");
  const popupRef = React.useRef<HTMLDivElement>(document.createElement("div"));
  React.useEffect(() => {
    if (state !== "") {
      popupRef.current.classList.add("active");
      return;
    }
    popupRef.current.classList.remove("active");
  }, [state]);

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
          if (state === "register" || state === "") {
            setState("login");
            return;
          }
        }}
      >
        {user
          ? `${user.firstName}'s profile`
          : state === "login"
          ? "Register"
          : "Login"}
      </button>
      <div className="popup" ref={popupRef}>
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
