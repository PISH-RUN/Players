import { lazy } from 'react';
import { RouteType } from './types/route';

/***
 * project routers list with abilities to define layouts and basic url auth setting
 */
export const panelRoutes: Array<RouteType> = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/dashboard/dashboard')),
    isPrivate: true,
  },
  {
    path: '/abilities',
    exact: true,
    component: lazy(() => import('../pages/abilities/abilities')),
    isPrivate: true,
  },
  {
    path: '/add-abilities',
    exact: true,
    component: lazy(() => import('../pages/abilities/abilities.form')),
    isPrivate: true,
  },
];
