import { RoutePath } from './interfaces';
import { lazy } from './utils';

import type { RouteItem } from './interfaces';
 
const Profile = lazy(import('@/pages/Profile'));
const Home = lazy(import('@/pages/Home'));

export const ROUTES: Array<RouteItem> = [
  {
    path     : RoutePath.Main,
    Component: Home,
    meta     : { title: 'Главная' }
  },
  {
    path     : RoutePath.Profile,
    Component: Profile,
    meta     : {
      auth : true,
      title: 'Профиль'
    }
  }
];
