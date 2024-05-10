import React from "react";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};

const UserContext = React.createContext<User | undefined>(undefined);
export const MOCK_USER: User = {
  email: "",
  firstName: "",
  lastName: "",
  token: "",
};

export default UserContext;
