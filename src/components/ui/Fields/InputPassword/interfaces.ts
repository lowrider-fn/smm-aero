import type { InputProps } from '../Input';

export type InputPasswordProps<T> = Omit<InputProps<T>, 'type' | 'icon' | 'iconSide' | 'onIconClick'>;
