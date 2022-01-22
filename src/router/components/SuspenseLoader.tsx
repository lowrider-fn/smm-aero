import { Suspense } from 'react';

import type { ComponentType } from 'react';

export const SuspenseLoader = <T,>(Component: ComponentType<T>) => (props: T) => (
  <Suspense fallback={ <div>Загрузка</div> }>
    <Component { ...props } />
  </Suspense>
);

