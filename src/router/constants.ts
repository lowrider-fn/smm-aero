import { RoutePath } from './interfaces';
import { preparesPage } from './utils';

import type { RouteItem } from './interfaces';

const Profile = preparesPage(import('@/pages/Profile'));
const Home = preparesPage(import('@/pages/Home'));

export const ROUTES: Array<RouteItem> = [
  {
    path     : RoutePath.Main,
    Component: Home,
    exact    : true,
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