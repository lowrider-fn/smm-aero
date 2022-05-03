import type { FormFieldProps } from '../common/FormField';
import type { ButtonProps } from '../../Button';
import type { DynamicInputProps } from '../common/DynamicInput';

type InputPropsType = FormFieldProps & Omit<DynamicInputProps, 'tag' | 'type' | 'checked' | 'onChange' | 'id'>;

export interface InputProps<T> extends InputPropsType {
  icon?: ButtonProps['icon'];
  iconSide?: keyof typeof IconSide;
  type?: Extract<DynamicInputProps['type'], 'text' | 'password'>;
  name: T;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange: (value: string, name: T) => void;
  onIconClick?: () => void;
}

export enum IconSide {
  left = 'left',
  right = 'right'
}
