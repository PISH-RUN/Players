import { lazy } from 'react';
import { RouteType } from './types/route';

/***
 * project routers list with abilities to define layouts and basic url auth setting
 */
export const routes: Array<RouteType> = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/auth')),
  },
  {
    path: '/panel',
    component: lazy(() => import('../components/dashboard/Dashboard')),
    subRoutes: [
    ],
  },
];
