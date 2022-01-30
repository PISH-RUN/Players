import { createContext } from 'react';
import { Auth } from './types/auth';

export const defaultAuthContext: Auth = { isLogin: false, setLogin: () => {}, setLogout: () => {} };

export const AuthContext = createContext<Auth>(defaultAuthContext);
