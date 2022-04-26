import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStogare";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("sesion", {
    user: null,
    roles: [],
    token: null,
    id: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
