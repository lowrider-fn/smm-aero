import { RoutePath } from './types';
import { lazy } from './utils';

import type { RouteItem } from './types';

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
