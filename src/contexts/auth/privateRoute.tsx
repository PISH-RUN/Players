import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

export type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  if (!isLogin) {
    location.href = '/auth';
  }

  return isLogin ? children : <></>;
};

export default PrivateRoute;
