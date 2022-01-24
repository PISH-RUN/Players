import { lazy } from 'react';
import { RouteType } from './types/route';

/***
 * project routers list with abilities to define layouts and basic url auth setting
 */
export const routes: Array<RouteType> = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/auth/login')),
  },
  {
    path: '/panel',
    component: lazy(() => import('layouts/default')),
    subRoutes: [
      {
        path: '/panel',
        exact: true,
        component: lazy(() => import('../pages/dashboard/dashboard')),
        isPrivate: true,
      },
      {
        path: '/panel/abilities',
        exact: true,
        component: lazy(() => import('../pages/abilities/abilities')),
        isPrivate: true,
      },
      {
        path: '/panel/add-abilities',
        exact: true,
        component: lazy(() => import('../pages/abilities/abilities.form')),
        isPrivate: true,
      },
      {
        path: '/panel/questions',
        exact: true,
        component: lazy(() => import('../pages/questions/questions')),
        isPrivate: true,
      },
    ],
  },
];
