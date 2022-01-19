import { RedirectRoute } from './RedirectRoute';

import type { RedirectedRouteProps } from './interfaces';

export const PublicRoute = (props: RedirectedRouteProps['routeProps']) => (
  <RedirectRoute
    routeProps={ props }
    redirect={ props.path }
    condition={ true }
  />
);
