import React, { lazy } from 'react';

export type Route = {
  path: string;
  exact: boolean;
  layout?: React.ComponentType;
  component: React.ComponentType;
};

/***
 * project routers list with abilities to define layouts and basic url auth setting
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
    path: '/abilities',
    exact: true,
    component: lazy(() => import('../pages/abilities/abilities')),
    layout: lazy(() => import('layout/default')),
  },
  {
    path: '/add-abilities',
    exact: true,
    component: lazy(() => import('../pages/abilities/abilities.form')),
    layout: lazy(() => import('layout/default')),
  },
];

export default routes;
