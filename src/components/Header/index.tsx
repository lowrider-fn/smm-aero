import { SignupForm } from './SignupForm';
import { ControlsStyled, HeaderStyled, NavStyled } from './styled';
import { SigninForm } from './SigninForm';

import type { HeaderProps } from './interfaces';
import type { SigninDataType, SignupDataType } from '@/store';

import { useToggle } from '@/hooks';
import { Button } from '@/components/ui/Button';

export const Header = ({
  isAuth,
  onLogout,
  onSignup,
  onSignin
}: HeaderProps) => {
  const { isShow: isShowSignup, toggleShowing: toggleShowingSignup } = useToggle();
  const { isShow: isShowSignin, toggleShowing: toggleShowingSignin } = useToggle();

  const handleSignup = (data: SignupDataType) => {
    toggleShowingSignup();
    onSignup(data);
  };

  const handleSignin = (data: SigninDataType) => {
    toggleShowingSignin();
    onSignin(data);
  };

  return (
    <HeaderStyled>
      <NavStyled>
        {
          (isAuth && (
            <Button
              mode="success"
              size="m"
              text="Выйти"
              title="Выйти из личного кабинета"
              onClick={ onLogout }
            />
          ))
          || (
            <ControlsStyled>
              <Button
                title="Войти в личный кабинет"
                mode="success"
                size="m"
                text="Войти"
                icon="user"
                position="left"
                onClick={ toggleShowingSignin }
              />

              <Button
                mode="link-dotted"
                text="Зарегистрироваться"
                title="Зарегистрироваться в SMM Aero"
                onClick={ toggleShowingSignup }
              />
            </ControlsStyled>
          )
        }
      </NavStyled>

      { isShowSignup && (
        <SignupForm
          onClose={ toggleShowingSignup }
          onSubmit={ handleSignup }
          onSignin={ toggleShowingSignin }
        />
      ) }

      { isShowSignin && (
        <SigninForm
          onClose={ toggleShowingSignin }
          onSubmit={ handleSignin }
          onSignup={ toggleShowingSignup }
        />
      ) }
    </HeaderStyled>
  );
};
