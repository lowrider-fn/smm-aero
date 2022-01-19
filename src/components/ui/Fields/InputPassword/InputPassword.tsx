
import { DynamicInputType } from '../common/DynamicInput';
import { Input } from '../Input';

import type { InputPasswordProps } from './interfaces';

import { useToggle } from '@/hooks';

export function InputPassword<T>(props: InputPasswordProps<T>) {
  const { isShow, toggleShowing } = useToggle(false);

  return (
    <Input
      { ...props }
      type={ (isShow && DynamicInputType.text) || DynamicInputType.password }
      icon={ (isShow && 'eyeCrossed') || 'eye' }
      onIconClick={ toggleShowing }
    />
  );
}
