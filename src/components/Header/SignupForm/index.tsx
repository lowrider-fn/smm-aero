import { ModalForm } from '../../ui/ModalForm';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Fields/Input';
import { InputPassword } from '../../ui/Fields/InputPassword';
import { Checkbox } from '../../ui/Fields/Checkbox';
import { Link } from '../../ui/Link';

import { INITIAL_FORM, VALIDATION } from './constants';
import { DescriptionStyled, BoxStyled, TextGreenStyled, TextGreyStyled } from './styled';

import type { SignupFormProps } from './interfaces';

import { useForm } from '@/hooks/useForm';
import { SignupFieldName } from '@/store';

export const SignupForm = ({ onSubmit, onClose, onSignin }: SignupFormProps) => {
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

  const { email, password, agreement } = validation;

  const handleSignin = () => {
    onClose();
    onSignin();
  };

  return (
    <ModalForm
      title="Регистрация"
      isValidForm={ isValidForm }
      onValidate={ validateForm }
      onSubmit={ handleSubmit }
      onClose={ onClose }
    >
      <DescriptionStyled>
        Регистрация занимает 30 секунд.<br />
        После регистрации вы получите<br />
        <TextGreenStyled tag='span' text="7 дней бесплатного доступа." />
      </DescriptionStyled>

      <Input
        autoComplete='new-email'
        label="Почта"
        placeholder='pochtagmail.com'
        name={ SignupFieldName.email }
        value={ form.email }
        hasError={ email.hasErr }
        error={ email.errText }
        onChange={ changeFormField }
      />

      <InputPassword
        autoComplete='new-password'
        label="Пароль"
        placeholder='●●●●●●●●●●●'
        name={ SignupFieldName.password }
        value={ form.password }
        hasError={ password.hasErr }
        error={ password.errText }
        onChange={ changeFormField }
      />

      <Checkbox
        name={ SignupFieldName.agreement }
        checked={ form.agreement }
        hasError={ agreement.hasErr }
        error={ agreement.errText }
        onChange={ changeFormField }
      >
        <TextGreyStyled>
          Я принимаю условия <Link to="#" text='Соглашения' />
        </TextGreyStyled>
      </Checkbox>

      <Button
        title='Зарегистрироваться в SMM Aero'
        size='l'
        type="submit"
        text="Регистрация"
      />

      <BoxStyled>
        <TextGreyStyled text="Уже есть аккаунт?" />

        <Button
          title='Войти в личный кабинет'
          mode='link-dashed'
          text="Войти в личный кабинет"
          onClick={ handleSignin }
        />
      </BoxStyled>
    </ModalForm>
  );
};
