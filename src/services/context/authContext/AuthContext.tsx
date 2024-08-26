import React, {createContext, useState} from "react";
import {AuthState, AuthContextType} from "./authContextTypes"; // Adjust import path as needed

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthState>({
    accessToken: "",
  });

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
