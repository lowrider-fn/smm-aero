import { RoutePath } from './interfaces';

import type { RouteItem } from './interfaces';

import HomePage from '@/pages/Home';
import ProfilePage from '@/pages/Profile';

// const Profile = lazy(()=> import('@/pages/Profile'));
// const Home = lazy(()=> import('@/pages/Home'));

export const ROUTES: Array<RouteItem> = [
  {
    path     : RoutePath.Main,
    Component: HomePage,
    meta     : { title: 'Главная' }
  },
  {
    path     : RoutePath.Profile,
    Component: ProfilePage,
    meta     : {
      auth : true,
      title: 'Профиль'
    }
  }
];
