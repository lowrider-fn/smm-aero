
import type { ModalFormProps } from '../../ui/ModalForm';
import type { SignupDataType } from '@/store';

export interface SignupFormProps extends Pick<ModalFormProps, 'onClose'> {
  onSubmit: (data: SignupDataType) => void;
  onSignin: () => void;
}

