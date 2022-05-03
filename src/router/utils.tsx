import { lazy as reactLazy } from 'react';

import { SuspenseLoader } from './components/SuspenseLoader';

import type { ComponentType } from 'react';

export const lazy = (component: Promise<{ default: ComponentType<any> }>) => SuspenseLoader(reactLazy(() => component));
