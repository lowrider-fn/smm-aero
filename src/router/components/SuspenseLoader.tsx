import { lazy, Suspense } from 'react';

import type { FC, ComponentType } from 'react';

export const SuspenseLoader: FC<{ component: Promise<{ default: ComponentType<any> }> }> = ({ children, component }) => {
  const comp = lazy(() => component);
  
  return (
    <Suspense fallback={ <div>Загрузка</div> }>
      { children || comp }
    </Suspense>
  );
};

