import { useState } from 'react';

import { FieldStyled, FormFieldStyled, LabelStyled, TextStyled } from './styled';

import type { FC } from 'react';
import type { FormFieldProps } from './interfaces';

import { Text } from '@/components/ui/Text';

export const FormField: FC<PropsWithClassName<FormFieldProps>> = ({
  children,
  hasError,
  hasDirty = true,
  error,
  id,
  label,
  disabled,
  className = ''
}) => {
  const [dirty, setDirty] = useState(hasDirty);

  const errorText = dirty && hasError && !disabled && error;

  const handleClick = () => {
    setDirty(true);
  };

  return (
    <FormFieldStyled
      role="button"
      tabIndex={ -1 }
      className={ className }
      onClick={ handleClick }
    >
      { label && (
        <LabelStyled htmlFor={ id }>
          <Text text={ label } weight={ 400 } />
        </LabelStyled>
      ) }

      <FieldStyled>
        { children }

        { errorText && <TextStyled size="xs" text={ errorText } /> }
      </FieldStyled>
    </FormFieldStyled>
  );
};
