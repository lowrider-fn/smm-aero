import { string, addMethod } from 'yup';

import { YupMethod } from './interfaces';

export const REQUIRED_TEXT_EMAIL = 'Введите E-mail';
export const REQUIRED_TEXT_PASSWORD = 'Введите пароль';
export const getMinLengthText = (val: number) => `Минимальное количество символов ${val}`;
export const getMaxLengthText = (val: number) => `Максимальное количество символов ${val}`;

export const PWD_REG = /^(?=.*[0-9])(?=.*[-+_()!@#$%^&*~])(?=.*[a-z])(?=.*[A-Z])([^а-яёА-ЯЁ]+$)/;
export const EMAIL_REG = /^[a-zA-Z0-9_.-]+@+[a-zA-Z0-9_.-]{2,}\.[ru|com|org|net|рф|de|RU|COM|ORG|NET|DE]{2,}$/;

addMethod(string, YupMethod.checkPwd, function () {
  return this.test({
    name   : YupMethod.checkPwd,
    message: 'Обязательно наличие цифр, символов, строчных и заглавных букв только латинского алфавита',
    test   : (val) => Boolean(val && PWD_REG.test(val))
  });
});

addMethod(string, YupMethod.checkEmail, function () {
  return this.test({
    name   : YupMethod.checkEmail,
    message: 'Введите корректный email',
    test   : (val) => Boolean(val && EMAIL_REG.test(val))
  });
});
