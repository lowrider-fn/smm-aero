import type { FC } from 'react';
import type { ModalFormProps } from './interfaces';

import { Form } from '@/components/ui/Form/Form';
import { Modal } from '@/components/ui/Modal';

export const ModalForm: FC<ModalFormProps> = ({ onClose, title, ...formProps }) => (

  <Modal title={ title } onClose={ onClose }>
    <Form { ...formProps } />
  </Modal>

);
