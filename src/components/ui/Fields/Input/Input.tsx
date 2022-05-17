import { v4 as uuid } from 'uuid';

import { FormField } from '../common/FormField';
import { DynamicInput } from '../common/DynamicInput';

import { BoxStyled, ButtonStyled } from './styled';

import type { InputProps } from './types';
import type { ChangeEvent } from 'react';

export const Input = <T,>({
  className = '',
  error,
  name,
  label,
  value,
  hasDirty,
  disabled,
  hasError,
  inputRef,
  icon,
  iconSide = 'right',
  type,
  onIconClick,
  onChange,
  ...rest
}: PropsWithClassName<InputProps<T>>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };

  const id = uuid();
  const commonProps = { hasDirty, hasError, disabled };

  return (
    <FormField
      { ...commonProps }
      className={ className }
      label={ label }
      id={ id }
      error={ error }
    >
      <BoxStyled iconSide={ icon && iconSide }>
        <DynamicInput
          { ...rest }
          { ...commonProps }
          type={ type }
          ref={ inputRef }
          value={ value }
          id={ id }
          onChange={ handleChange }
        />

        { icon && (
          <ButtonStyled
            mode="icon"
            icon={ icon }
            onClick={ onIconClick }
          />
        ) }
      </BoxStyled>
    </FormField>
  );
};
