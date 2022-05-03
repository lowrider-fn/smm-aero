import { string } from 'yup';

import type { ValidationType } from '@/hooks/useForm';
import type { SigninDataType, SigninFieldName } from '@/store';

import { getMaxLengthText, REQUIRED_TEXT_EMAIL, REQUIRED_TEXT_PASSWORD } from '@/hooks/useForm';

export const INITIAL_FORM: SigninDataType = {
  password: '',
  email   : ''
};

export const VALIDATION: ValidationType<typeof SigninFieldName> = {
  email: {
    hasErr : false,
    errText: '',
    schema : string().required(REQUIRED_TEXT_EMAIL)
      .checkEmail()
      .max(60, getMaxLengthText(60))
  },

  password: {
    hasErr : false,
    errText: '',
    schema : string()
      .required(REQUIRED_TEXT_PASSWORD)
  }
};
