import React, { LazyExoticComponent } from 'react';

export type RouteType = {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
  isPrivate?: boolean;
  subRoutes?: Array<RouteType>;
};
