import { runInAction, makeAutoObservable } from 'mobx';

import type { SigninDataType, SignupDataType } from './interfaces';

import { Storage } from '@/utils';

class AuthClass {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  private SET_IS_AUTH = (isAuth = false) => {
    runInAction(() => {
      this.isAuth = isAuth;
    });
  };

  signin = async (data: SigninDataType) => {
    Storage.setData('auth', data);
    this.SET_IS_AUTH(true);
  };

  logout = async () => {
    this.SET_IS_AUTH();
    Storage.clear();
  };

  signup = async (data: SignupDataType) => {
    Storage.setData('auth', data);
    this.SET_IS_AUTH(true);
  };

  checkLogin = () => {
    if (Storage.getData<SigninDataType>('auth')) {
      this.SET_IS_AUTH(true);
    }
  };
}

export const AuthStore = new AuthClass();

AuthStore.checkLogin();
