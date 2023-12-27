import { Dispatch, SetStateAction, createContext } from "react";

export type AuthContextProps = {
  authenticated: boolean | null;
  setAuthenticated: Dispatch<SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
