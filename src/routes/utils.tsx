import React from 'react';
import { RouteType } from './types/route';
import PrivateRoute from '../contexts/auth/privateRoute';

export const RenderComponent = ({ component: Component, isPrivate }: Pick<RouteType, 'component' | 'isPrivate'>) => {
  return isPrivate ? (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  ) : (
    <Component />
  );
};
