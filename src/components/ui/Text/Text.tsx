import { TextStyled } from './styled';

import type { PropsWithChildren } from 'react';
import type { TextProps } from './types';

export const Text = ({
  text,
  children,
  className = '',
  tag = 'p',
  size = 's',
  ...rest
}: PropsWithChildren<PropsWithClassName<TextProps>>) => (
  <TextStyled
    as={ tag }
    className={ className }
    size={ size }
    { ...rest }
  >
    { children || text }
  </TextStyled>
);
