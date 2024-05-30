import React from "react";

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};

const UserContext = React.createContext<{
  user: User | undefined;
  setUser: (user: User) => void;
}>({ user: undefined, setUser: () => {} });

export default UserContext;
