export interface SigninDataType {
  email: string;
  password: string;
}

export enum SigninFieldName {
  email = 'email',
  password = 'password'
}

export enum SignupFieldName {
  agreement = 'agreement',
  email = 'email',
  password = 'password'
}

export interface SignupDataType extends SigninDataType{
  agreement: boolean;
}
