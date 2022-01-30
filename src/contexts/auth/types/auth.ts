export type Auth = {
  user?: any;
  isLogin: boolean;
  setLogin: (user: any) => void;
  setLogout: () => void;
};
