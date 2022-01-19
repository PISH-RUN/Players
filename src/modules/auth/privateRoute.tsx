import React from 'react';
import { useAuth } from './auth';
import { Route, Navigate } from 'react-router-dom';

export type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  const { isLogin } = useAuth();

  return isLogin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
