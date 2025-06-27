import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [id, setId] = useState(localStorage.getItem("id") || "");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");
  const value = {
    token,
    role,
    setToken,
    setRole,
    id,
    setId,
    isLogin,
    setIsLogin
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
