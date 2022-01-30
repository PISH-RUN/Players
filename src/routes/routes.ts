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
    path: '/dashboard',
    component: lazy(() => import('../pages/layout')),
    isPrivate: true,
    subRoutes: [
      {
        path: '/dashboard/tasks',
        exact: true,
        component: lazy(() => import('../components/dashboard/Tasks')),
      },
      {
        path: '/dashboard/users',
        exact: true,
        component: lazy(() => import('../components/dashboard/Users')),
      },
      {
        path: '/dashboard/main',
        exact: true,
        component: lazy(() => import('../components/dashboard/Dashboard')),
      },
      {
        path: '/dashboard/adminTasks',
        exact: true,
        component: lazy(() => import('../components/dashboard/AdminTasks')),
      },
      {
        path: '/dashboard/settings',
        exact: true,
        component: lazy(() => import('../components/dashboard/UserTask')),
      },
    ],
  },
];
