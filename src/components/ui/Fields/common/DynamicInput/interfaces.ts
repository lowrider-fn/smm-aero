import type { ChangeEvent, FocusEvent, Ref } from 'react';

export interface DynamicInputProps {
  ref?: Ref<HTMLInputElement>;
  id?: string;
  tag?: keyof typeof DynamicInputTag;
  type?: keyof typeof DynamicInputType;
  value?: string | number;
  hasError: boolean;
  hasDirty?: boolean;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export enum DynamicInputTag {
  input = 'input',
  textarea = 'textarea'
}

export enum DynamicInputType {
  checkbox = 'checkbox',
  password = 'password',
  text = 'text'
}
