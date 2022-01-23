import { RoutePath } from './interfaces';
import { lazy } from './utils';

import type { RouteItem } from './interfaces';
 
const Profile = lazy(import('@/pages/Profile'));
const NotFound = lazy(import('@/pages/NotFound'));
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
  },
  {
    path     : RoutePath.NotFound,
    Component: NotFound,
    meta     : { title: 'Страница не найдена' }
  }
];
