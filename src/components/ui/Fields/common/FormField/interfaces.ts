import type { DynamicInputProps } from '../DynamicInput';

export interface FormFieldProps extends Pick<DynamicInputProps, | 'hasError' | 'hasDirty' | 'disabled'> {
  id?: string;
  error: string;
  label?: string;
}
