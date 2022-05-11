import React from 'react';

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
  loginError: {
    showUserMessage: boolean;
    isErrorMessage: boolean;
    message: string;
  };

  setLoginError: (_arg: {}) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
