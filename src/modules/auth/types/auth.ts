import { UserOutput } from 'api/types';
export type Auth = {
  username?: string;
  isLogin: boolean;
  setLogin: (user: Pick<UserOutput, 'username' | 'token'>) => void;
  setLogout: () => void;
};
