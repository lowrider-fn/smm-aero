import type { SigninDataType, SignupDataType } from '@/store';

export interface HeaderProps {
  isAuth: boolean;
  onLogout: () => void;
  onSignup: (data: SignupDataType) => void;
  onSignin: (data: SigninDataType) => void;
}
