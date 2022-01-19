
import type { AnyObject, Maybe } from 'yup/lib/types';

import { YupMethod } from '@/hooks/useForm';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    [YupMethod.checkPwd](): StringSchema<TType, TContext>;
    [YupMethod.checkEmail](): StringSchema<TType, TContext>;
  }
}

export default yup;