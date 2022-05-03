import { observer } from 'mobx-react-lite';

import { RoutePath } from '../interfaces';

import { RedirectRoute } from './RedirectRoute';

import type { RouteItem } from '../interfaces';

import { AuthStore } from '@/store';

export const GuestRoute = observer((props: RouteItem) => {
  const { isAuth } = AuthStore;

  return (
    <RedirectRoute
      { ...props }
      to={ RoutePath.Main }
      middleware={ !isAuth }
    />
  );
});
