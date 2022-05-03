import { Navigate } from 'react-router';

import type { RedirectRouteProps } from './interfaces';

export const RedirectRoute = ({
  middleware = true,
  to = '',
  meta,
  Component
}: RedirectRouteProps) => {
  if (meta.title) {
    document.title = meta.title;
  }

  return (middleware && <Component />) || <Navigate to={ to } />;
};
