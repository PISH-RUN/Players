import React, { useState, useContext, useEffect } from 'react';
import { AuthContext, defaultAuthContext } from './auth.context';
import { useCookies } from 'react-cookie';
import { setToken } from '../../api/baseRequest';

export type AuthProviderProps = {
  children: JSX.Element;
};

type TokenType = string | undefined;

export let TOKEN: TokenType;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);
  const [{ isLogin, user }, setState] = useState({ isLogin: !!cookies['token'], user: cookies?.user });

  const setLogin = (user: any) => {
    if (!!user.user && !!user.jwt) {
      setState((prevState) => ({ ...prevState, isLogin: true, user: user.user }));
      setCookie('user', user.user);
      setCookie('token', user.jwt);
      setToken(user.jwt);
    }
  };

  useEffect(() => {
    console.log(cookies);
    if (cookies?.token && cookies.token !== TOKEN) {
      TOKEN = cookies.token;
      setToken("Bearer " + TOKEN);
    }
  }, [cookies]);

  const setLogout = () => {
    removeCookie('token');
    setState((prevState) => ({ ...prevState, isLogin: false }));
  };

  return <AuthContext.Provider value={{ isLogin, user, setLogin, setLogout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
