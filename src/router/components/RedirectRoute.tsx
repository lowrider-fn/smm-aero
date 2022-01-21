import { Route, Redirect } from 'react-router';

import type { FC } from 'react';
import type { RedirectedRouteProps } from './interfaces';

export const RedirectRoute: FC<RedirectedRouteProps> = ({ condition, redirect, routeProps }) => {
  const { Component, ...restProps } = routeProps;
  const { location, meta } = routeProps;

  const to = (!location && redirect) || { pathname: redirect, state: { from: location } };

  if (meta.title) {
    document.title = meta.title;
  }

  return (
    <Route
      { ...restProps }
      render={ props => (condition && <Component { ...props } />) || <Redirect to={ to } /> }
    />
  );
};
