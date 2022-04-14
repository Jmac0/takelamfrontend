import React, {useMemo} from 'react';
import ApiAuthProvider from './ApiAtuthProvider';
import AuthContext from './AuthContext';

interface VoidFunction {
  (): void;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>();

  const signIn = (newUser: string, callback: VoidFunction) => ApiAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });

  const signOut = (callback: VoidFunction) => ApiAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
	// eslint-disable-next-line react/jsx-no-constructed-context-values
  const value =  useMemo(() =>({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line import/prefer-default-export
export { AuthProvider };
