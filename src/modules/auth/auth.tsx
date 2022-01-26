import React, { useState, useContext, useEffect } from 'react';
import { AuthContext, defaultAuthContext } from './auth.context';
import { LoginOutput } from 'api/types';
import { useCookies } from 'react-cookie';

export type AuthProviderProps = {
  children: JSX.Element;
};

type TokenType = string | undefined;

export let TOKEN: TokenType;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
  const [{ isLogin, username }, setState] = useState({ isLogin: true, username: cookies?.username });

  const setLogin = (user: Pick<LoginOutput, 'username' | 'token'>) => {
    if (!!user.username && !!user.token) {
      setState((prevState) => ({ ...prevState, isLogin: true, username: username }));
      setCookie('token', user.token);
    }
  };

  useEffect(() => {
    console.log(cookies);
    if (cookies?.token && cookies.token !== TOKEN) {
      TOKEN = cookies.token;
    }
  }, [cookies]);

  const setLogout = () => {
    removeCookie('token');
    setState((prevState) => ({ ...prevState, isLogin: false }));
  };

  return <AuthContext.Provider value={{ isLogin, username, setLogin, setLogout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
