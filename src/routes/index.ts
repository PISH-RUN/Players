import React, { lazy } from 'react';

export type Route = {
  path: string;
  exact: boolean;
  layout?: React.ComponentType;
  component: React.ComponentType;
};

/***
 * project routers list with ability to define layouts and basic url auth setting
 */
const routes: Array<Route> = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/auth/login')),
  },
];

export default routes;
