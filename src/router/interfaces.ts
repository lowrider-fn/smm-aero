export interface RouteMeta {
  title: string;
  auth?: boolean;
  guest?: boolean;
}

export interface LocationState {
  from: {
    pathname: string;
  };
}

export interface RouteItem {
  path: string;
  exact?: boolean;
  Component: React.ComponentType<any>;
  defaultRoute?: boolean;
  meta: RouteMeta;
}

export interface RouterProps {
  routes?: Array<RouteItem>;
}

export enum RoutePath {
  Main = '/',
  Profile = '/profile'
}
