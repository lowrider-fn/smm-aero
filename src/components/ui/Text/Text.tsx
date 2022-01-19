import { TextStyled } from './styled';

import type { FC } from 'react';
import type { TextProps } from './interfaces';

export const Text: FC<PropsWithClassName<TextProps>> = ({
  text,
  children,
  className = '',
  tag = 'p',
  size = 's',
  ...rest
}) => (
  <TextStyled
    as={ tag }
    className={ className }
    size={ size }
    { ...rest }
  >
    { children || text }
  </TextStyled>
);
