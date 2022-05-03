import type { AnySchema } from 'yup';

export type DataType<D extends Record<keyof E, unknown>, E> = { [K in keyof E]?: D[K] };

export type ValidationObject<T> = { hasErr: boolean; errText: string; schema: AnySchema; dependences?: Array<keyof T> };

export type ValidationType<T> = Record<keyof T, ValidationObject<T>>;

export enum YupMethod {
  checkEmail = 'checkEmail',
  checkPwd = 'checkPwd'
}
