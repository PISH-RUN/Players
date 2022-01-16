import React, { useState, useContext } from 'react';
import { AuthContext, defaultAuthContext } from './auth.context';
import { User } from 'api/types';

export type AuthProviderProps = {
  children: JSX.Element;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [{ isLogin, username }, setState] = useState(defaultAuthContext);

  const setLogin = (user: Pick<User, 'username'>) => {
    setState((prevState) => ({ ...prevState, isLogin: true, username: username }));
  };

  const setLogout = () => {};

  return <AuthContext.Provider value={{ isLogin, username, setLogin, setLogout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
