declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';

  const src: string;

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

  export default src;
}
