import { LoginOutput } from 'api/types';
export type Auth = {
  username?: string;
  isLogin: boolean;
  setLogin: (user: Pick<LoginOutput, 'username' | 'token'>) => void;
  setLogout: () => void;
};
