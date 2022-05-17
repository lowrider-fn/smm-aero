import { Text } from '../Text';

import { LinkStyled } from './styled';

import type { LinkProps } from './types';

export const Link = ({ to, text, className = '' }: PropsWithClassName<LinkProps>) => (
  <LinkStyled
    className={ className }
    href={ to }
    target="_blank"
  >
    <Text
      tag="span"
      size="s"
      text={ text }
    />
  </LinkStyled>
);
