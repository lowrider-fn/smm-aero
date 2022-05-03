import type { RouteItem } from '../../interfaces';

export interface RedirectRouteProps extends RouteItem{
  middleware?: boolean;
  to?: string;
}
