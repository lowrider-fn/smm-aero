
import { FormField } from '../common/FormField';
import { Text } from '../../Text';
import { DynamicInput } from '../common/DynamicInput';

import { CheckboxStyled, IconStyled, LabelStyled } from './styled';

import type { CheckboxProps } from './interfaces';
import type { ChangeEvent, PropsWithChildren } from 'react';

export const Checkbox = <T,>({
  name,
  label,
  content,
  children,
  className = '',
  disabled,
  error,
  hasDirty,
  hasError,
  checked,
  onChange,
  ...rest
}: PropsWithChildren<PropsWithClassName<CheckboxProps<T>>>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked, name);
  };

  return (
    <FormField
      label={ label }
      hasDirty={ hasDirty }
      hasError={ hasError }
      error={ error }
      disabled={ disabled }
      className={ className }
    >
      <LabelStyled disabled={ disabled }>

        <CheckboxStyled>
          <IconStyled icon='accept' checked={ checked } />

          <DynamicInput
            { ...rest }
            checked={ checked }
            hasDirty={ hasDirty }
            hasError={ hasError }
            disabled={ disabled }
            type="checkbox"
            onChange={ handleChange }
          />
        </CheckboxStyled>

        { children || (content && <Text text={ content } />) }
      </LabelStyled>
    </FormField>
  );
};
