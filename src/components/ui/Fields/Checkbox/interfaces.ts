import type { DynamicInputProps } from '../common/DynamicInput';
import type { FormFieldProps } from '../common/FormField';

type CheckboxPropsType =
  Pick<DynamicInputProps, 'checked'> &
  Pick<FormFieldProps, 'error' | 'hasError' | 'hasDirty' | 'disabled' | 'label'>;

export interface CheckboxProps<T> extends CheckboxPropsType {
  name: T;
  content?: string;
  onChange: (checked: boolean, name: T) => void;
}
