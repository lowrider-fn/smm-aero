import { Route, Routes } from 'react-router';

import { ROUTES } from './constants';
import { PrivateRoute } from './components/PrivateRoute';
import { GuestRoute } from './components/GuestRoute';
import { RedirectRoute } from './components/RedirectRoute';

import type { RouterProps } from './interfaces';

export const Router = ({ routes = ROUTES }: RouterProps) => (
  <Routes>
    {
      routes.map((route) => {
        const { meta, path } = route;

        if (meta.auth) {
          return (
            <Route
              key={ path }
              path={ path }
              element={ <PrivateRoute { ...route } /> }
            />
          );
        }

        if (meta.guest) {
          return (
            <Route
              key={ path }
              path={ path }
              element={ <GuestRoute { ...route } /> }
            />
          );
        }

        return (
          <Route
            key={ path }
            path={ path }
            element={ <RedirectRoute { ...route } /> }
          />
        );
      })
    }
  </Routes>
);
