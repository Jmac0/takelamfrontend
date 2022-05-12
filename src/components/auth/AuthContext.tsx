import React from 'react';
import { User } from "../../utils/interfaces";

interface VoidFunction {
  (): void;
}
interface AuthContextType {
  loading: boolean;
  user: { email: string; password: string; token: string };
  password: string;
  email: string;
  signIn: (_password: string, _email: string, _callback: VoidFunction) => void;
  signOut: (_callback: VoidFunction) => void;
  setUser: ({email, password, token}: User) => void;
  loginError: {
    showUserMessage: boolean;
    isErrorMessage: boolean;
    message: string;
  };

  setLoginError: (_arg: {}) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
