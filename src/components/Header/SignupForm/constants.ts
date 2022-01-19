import { boolean, string } from 'yup';

import type { ValidationType } from '@/hooks/useForm';
import type { SignupDataType, SignupFieldName } from '@/store';

import { getMinLengthText, getMaxLengthText, REQUIRED_TEXT_EMAIL, REQUIRED_TEXT_PASSWORD } from '@/hooks/useForm';

export const INITIAL_FORM: SignupDataType = {
  agreement: false,
  password : '',
  email    : ''
};

export const VALIDATION: ValidationType<typeof SignupFieldName> = {
  email: {
    hasErr : false,
    errText: '',
    schema : string()
      .required(REQUIRED_TEXT_EMAIL)
      .checkEmail()
      .max(60, getMaxLengthText(60))
  },

  password: {
    hasErr : false,
    errText: '',
    schema : string()
      .required(REQUIRED_TEXT_PASSWORD)
      .checkPwd()
      .min(6, getMinLengthText(6))
      .max(32, getMaxLengthText(32))
  },

  agreement: {
    hasErr : false,
    errText: '',
    schema : boolean().oneOf([true], 'Необходимо согласие')
  }
};

