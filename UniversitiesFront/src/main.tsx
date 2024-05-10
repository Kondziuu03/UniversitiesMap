import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import UserContext, { MOCK_USER } from "./UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContext.Provider value={MOCK_USER}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
