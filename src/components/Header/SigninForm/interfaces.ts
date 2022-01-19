
import type { ModalFormProps } from '../../ui/ModalForm';
import type { SigninDataType } from '@/store';

export interface SigninFormProps extends Pick<ModalFormProps, 'onClose'> {
  onSubmit: (data: SigninDataType) => void;
  onSignup: () => void;
}

