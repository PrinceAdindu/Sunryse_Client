export type AuthState = {
  accessToken: string;
};

export type AuthContextType = {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
};
