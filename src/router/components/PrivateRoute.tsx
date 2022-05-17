import { observer } from 'mobx-react-lite';

import { RoutePath } from '../types';

import { RedirectRoute } from './RedirectRoute';

import type { RouteItem } from '../types';

import { AuthStore } from '@/store';

export const PrivateRoute = observer((props: RouteItem) => {
  const { isAuth } = AuthStore;

  return (
    <RedirectRoute
      { ...props }
      to={ RoutePath.Main }
      middleware={ isAuth }
    />
  );
});
