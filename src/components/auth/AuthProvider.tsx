import React, { useMemo, useState } from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';
import AuthContext from './AuthContext';

interface VoidFunction {
  (): void;
}

interface User {
  email: string;
  password: string;
}

const ApiAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = true;
    setTimeout(callback, 500);
  },
  signOut(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = false;
    callback();
  },
};

export default ApiAuthProvider;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = React.useState<any>(null);

  const signIn = async (
    email: string,
    password: string,
    callback: VoidFunction,
  ) => {
    setLoading(true);
    await axios
      .post(
        `${baseUrl}/users/login`,

        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
		  console.log(res.data)
        ApiAuthProvider.signIn(() => {
          setLoading(false);
          setUser(email);
          callback();
        });
      });
  };

  const signOut = () =>
    ApiAuthProvider.signOut(() => {
      setUser(null);
      // callback();
    });
  const value = useMemo(
    () => ({ loading, user, signIn, signOut, loginError }),
    [user, loading],
  );

  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line import/prefer-default-export
export { AuthProvider };
