import type { RouteItem } from '../../types';

export interface RedirectRouteProps extends RouteItem {
  middleware?: boolean;
  to?: string;
}
