import { User } from 'api/types';
export type Auth = {
  username?: string;
  isLogin: boolean;
  setLogin: (user: Pick<User, 'username'>) => void;
  setLogout: () => void;
};
