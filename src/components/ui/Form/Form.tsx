import { FormStyled } from './styled';

import type { ChangeEvent } from 'react';
import type { FormProps } from './types';

export const Form = ({
  children,
  isValidForm,
  onSubmit,
  onValidate
}: PropsWithRequiredChildren<FormProps>) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidForm) {
      onSubmit();
    } else {
      onValidate();
    }
  };

  return (
    <FormStyled onSubmit={ handleSubmit }>
      { children }
    </FormStyled>
  );
};
