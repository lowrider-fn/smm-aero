import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

export enum ButtonMode {
  icon = 'icon',
  info = 'info',
  'link-dashed' = 'link-dashed',
  'link-dotted' = 'link-dotted',
  success = 'success'
}

export enum ButtonIconPosition {
  left = 'left',
  right = 'right'
}

export interface ButtonProps extends Partial<Pick<IconProps, 'icon'>> {
  text?: string;
  type?: 'button' | 'submit';
  mode?: keyof typeof ButtonMode;
  size?: Extract<TextProps['size'], 'l' | 'm' | 's'>;
  position?: keyof typeof ButtonIconPosition;
  onClick?: () => void;
}
