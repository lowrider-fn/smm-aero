import type { ReactNode } from 'react';

declare global {
 type PropsWithClassName<P> = P & { className?: string };

 type PropsWithRequiredChildren<P> = P & { children: ReactNode };

 type PropsWithTitle<P> = P & { title?: string };
}
