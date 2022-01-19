import { FormStyled } from './styled';

import type { ChangeEvent, FC } from 'react';
import type { FormProps } from './interfaces';

export const Form: FC<FormProps> = ({
  children,
  isValidForm,
  onSubmit,
  onValidate
}) => {
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
