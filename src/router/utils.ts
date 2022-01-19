import { lazy } from 'react';

import { SuspenseLoader } from './components/SuspenseLoader';

import type { ComponentType } from 'react';

export const preparesPage = (component: Promise<{ default: ComponentType<any> }>) => SuspenseLoader(lazy(() => component));

