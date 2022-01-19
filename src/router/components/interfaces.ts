
import type { RouteItem } from '../interfaces';

export interface RedirectedRouteProps {
  condition: boolean;
  redirect: string;
  routeProps: RouteItem & { location?: any };
}
