import { ModalForm } from '../../ui/ModalForm';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Fields/Input';
import { InputPassword } from '../../ui/Fields/InputPassword';

import { ControlsStyled, BoxStyled, TextGreyStyled, ButtonStyled } from './styled';
import { INITIAL_FORM, VALIDATION } from './constants';

import type { SigninFormProps } from './interfaces';

import { useForm } from '@/hooks/useForm';
import { SigninFieldName } from '@/store';

export const SigninForm = ({ onSubmit, onClose, onSignup }: SigninFormProps) => {
  const {
    form,
    validation,
    isValidForm,
    validateForm,
    changeFormField
  } = useForm(INITIAL_FORM, VALIDATION);

  const handleSubmit = () => {
    onSubmit(form);
  };

  const { email, password } = validation;

  const handleSignin = () => {
    onClose();
    onSignup();
  };

  return (
    <ModalForm
      title="Личный кабинет"
      isValidForm={ isValidForm }
      onValidate={ validateForm }
      onSubmit={ handleSubmit }
      onClose={ onClose }
    >
      <Input
        label="Почта"
        placeholder="pochtagmail.com"
        name={ SigninFieldName.email }
        value={ form.email }
        hasError={ email.hasErr }
        error={ email.errText }
        onChange={ changeFormField }
      />

      <InputPassword
        autoComplete="new-password"
        label="Пароль"
        placeholder="●●●●●●●●●●●"
        name={ SigninFieldName.password }
        value={ form.password }
        hasError={ password.hasErr }
        error={ password.errText }
        onChange={ changeFormField }
      />

      <ButtonStyled
        title="Войти в личный кабинет"
        mode="success"
        size="l"
        type="submit"
        text="Вход"
      />

      <ControlsStyled>
        <BoxStyled>
          <TextGreyStyled text="Еще нет аккаунта?" />

          <Button
            title="Зарегистрироваться в SMM Aero"
            mode="link-dashed"
            text="Зарегистрироваться"
            onClick={ handleSignin }
          />
        </BoxStyled>

        <BoxStyled>
          <TextGreyStyled text="Забыли пароль?" />

          <Button
            title="Востановить пароль"
            mode="link-dashed"
            text="Восстановить"
            onClick={ handleSignin }
          />
        </BoxStyled>
      </ControlsStyled>
    </ModalForm>
  );
};
