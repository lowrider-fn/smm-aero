import { Text } from '../Text';
import { Icon } from '../Icon';

import { ButtonStyled } from './styled';

import type { ButtonProps } from './interfaces';

export const Button = ({
  className = '',
  mode = 'info',
  size = 's',
  type = 'button',
  position = 'right',
  text,
  icon,
  title,
  onClick
}: PropsWithTitle<PropsWithClassName<ButtonProps>>) => (
  <ButtonStyled
    title={ title }
    className={ className }
    mode={ mode }
    size={ size }
    type={ type }
    position={ (icon && text && position) || undefined }
    onClick={ onClick }
  >
    { text && (
      <Text tag="span" size={ size } text={ text } />
    ) }

    { icon && <Icon icon={ icon } /> }
  </ButtonStyled>
);
