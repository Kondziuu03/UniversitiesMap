import React from "react";

import UserContext from "./UserContext";

export default function Profile() {
  const { user, setUser } = React.useContext(UserContext)!;

  if (!user) {
    return "Please login to view your profile";
  }
  return (
    <div className="profile">
      <div className="profile__info">
        <h1 className="profile__title">Profile</h1>
        <div className="profile__details">
          <p className="profile__detail">
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p className="profile__detail">
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p className="profile__detail">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
      <button className="logout" onClick={() => setUser(undefined)}>
        Logout
      </button>
    </div>
  );
}
