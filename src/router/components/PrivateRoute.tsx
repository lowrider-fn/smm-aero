import { observer } from 'mobx-react-lite';

import { RoutePath } from '../interfaces';

import { RedirectRoute } from './RedirectRoute';

import type { RedirectedRouteProps } from './interfaces';

import { AuthStore } from '@/store';

export const PrivateRoute = observer((props: RedirectedRouteProps['routeProps']) => {
  const { isAuth } = AuthStore;

  return (
    <RedirectRoute
      routeProps={ props }
      redirect={ RoutePath.Main }
      condition={ isAuth }
    />
  );
});
