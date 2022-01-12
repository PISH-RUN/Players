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
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../pages/dashboard/dashboard')),
    layout: lazy(() => import('layout/default')),
  },
  {
    path: '/competency',
    exact: true,
    component: lazy(() => import('../pages/competency/competency')),
    layout: lazy(() => import('layout/default')),
  },
];

export default routes;
