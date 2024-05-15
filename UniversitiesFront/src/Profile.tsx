import React from "react";

import UserContext from "./UserContext";

export default function Profile() {
  const user = React.useContext(UserContext)!;

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
    </div>
  );
}
