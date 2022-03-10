import { lazy } from 'react';
import { RouteType } from './types/route';

/***
 * project routers list with abilities to define layouts and basic url auth setting
 */
export const routes: Array<RouteType> = [
  {
    path: '/video',
    exact: true,
    component: lazy(() => import('../pages/media/video')),
  },
  {
    path: '/audio',
    exact: true,
    component: lazy(() => import('../pages/media/audio')),
  },
  {
    path: '/pdf',
    exact: true,
    component: lazy(() => import('../pages/media/pdf')),
  },
];
