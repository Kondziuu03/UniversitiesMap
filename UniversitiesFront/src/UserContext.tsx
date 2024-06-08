import React from "react";

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};

const UserContext = React.createContext<{
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}>({ user: undefined, setUser: () => {} });

export default UserContext;
