import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';
import { User, UserMessageInterface, VoidFunction } from 'utils/interfaces';
import useHttp from '../../hooks/useHttp';
import AuthContext from './AuthContext';
import {
  initialUserMessageState,
  initialUserState,
} from '../../utils/initialStates';

const ApiAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    setTimeout(callback, 500);
  },
  signOut(callback: VoidFunction) {
    callback();
  },
};
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loginError, setLoginError] = useState<UserMessageInterface>(
    initialUserMessageState,
  );
  // const [loading, setLoading] = useState(false);
  const [user, setUser] = React.useState<User>(initialUserState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = JSON.parse(localStorage.getItem('_Tuser') as string);

  const { loading, setLoading, sendRequest } = useHttp({
    url: `auth/isAuth`,
    method: 'GET',
    withCredentials: false,
    token,
  });

  useEffect(() => {
    if (token) {
      sendRequest('', () => {
        setIsAuthenticated(true);
        setUser({
          email: '',
          password: '',
          token,
        });
      });
    }
  }, [isAuthenticated]);

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
        ApiAuthProvider.signIn(() => {
          setLoading(false);
          setIsAuthenticated(true);
          setUser({
            email: res.data.email,
            password: res.data.password,
            token: res.data.token,
          });
          localStorage.setItem('_Tuser', JSON.stringify(res.data.token));

          setLoginError(initialUserMessageState);
          // callback triggers the redirect from Login component
          callback();
        });
      })
      .catch((err) => {
        setLoading(false);
        setTimeout(() => {
          setLoginError({
            message: err.response.data.message,
            isErrorMessage: true,
            showUserMessage: true,
          });
        }, 600);
      });
  };

  const signOut = () =>
    ApiAuthProvider.signOut(() => {
      setUser(initialUserState);
      setIsAuthenticated(false);
      localStorage.clear();
    });
  const value = useMemo(
    () => ({
      loading,
      user,
      signIn,
      signOut,
      isAuthenticated,
      loginError,
      setLoginError,
      setUser,
    }),
    [user, loading, loginError.message, isAuthenticated],
  );

  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line import/prefer-default-export
export { AuthProvider };
