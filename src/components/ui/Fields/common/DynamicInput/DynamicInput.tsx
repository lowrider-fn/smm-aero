import { useState, forwardRef } from 'react';

import { DynamicInputStyled } from './styled';

import type { FocusEvent } from 'react';
import type { DynamicInputProps } from './interfaces';

export const DynamicInput = forwardRef(({
  className = '',
  tag = 'input',
  type = 'text',
  checked,
  hasError,
  hasDirty = true,
  onFocus,
  ...rest
}: PropsWithClassName<DynamicInputProps>, ref: DynamicInputProps['ref']) => {
  const [dirty, setDirty] = useState(hasDirty);

  const isError = dirty && hasError;

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setDirty(true);
    onFocus?.(e);
  };

  return (
    <DynamicInputStyled
      { ...rest }
      ref={ ref }
      as={ tag }
      type={ type }
      hasError={ isError }
      className={ className }
      checked={ Boolean(checked) }
      onFocus={ handleFocus }
    />
  );
});
