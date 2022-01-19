import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import { PrivateRoute } from './components/PrivateRoute';
import { GuestRoute } from './components/GuestRoute';
import { PublicRoute } from './components/PublicRoute';
import { preparesPage } from './utils';

import type { RouterProps } from './interfaces';

export const Router = observer(({ routes = ROUTES }: RouterProps) => (
  <Switch>
    {
      routes.map(route => {
        const { meta, path } = route;

        if (meta.auth) {
          return <PrivateRoute { ...route } key={ path } />;
        }

        if (meta.guest) {
          return <GuestRoute { ...route } key={ path } />;
        }

        return <PublicRoute { ...route } key={ path } />;
      })
    }

    <Route component={ preparesPage(import('@/pages/NotFound')) } />
  </Switch>
));

