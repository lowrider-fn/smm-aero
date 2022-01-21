export interface RouteMeta {
  title: string;
  auth?: boolean;
  guest?: boolean;
}

export interface RouteItem {
  path: string;
  Component: React.ComponentType<any>;
  meta: RouteMeta;
}

export interface RouterProps {
  routes?: Array<RouteItem>;
}

export enum RoutePath {
  Main = '/',
  Profile = '/profile'
}
