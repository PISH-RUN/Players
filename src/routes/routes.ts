import { lazy } from 'react';
import { RouteType } from './types/route';

/***
 * project routers list with abilities to define layouts and basic url auth setting
 */
export const routes: Array<RouteType> = [
  {
    path: '/video/:id',
    exact: true,
    component: lazy(() => import('../pages/media/video')),
  },
  {
    path: '/audio/:id',
    exact: true,
    component: lazy(() => import('../pages/media/audio')),
  },
  {
    path: '/pdf/:id',
    exact: true,
    component: lazy(() => import('../pages/media/pdf')),
  },
];
