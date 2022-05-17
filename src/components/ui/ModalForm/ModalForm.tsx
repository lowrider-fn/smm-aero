import { Form } from '../Form';
import { Modal } from '../Modal';

import type { FormProps } from '../Form';
import type { ModalProps } from '../Modal';

export const ModalForm = ({ onClose, title, ...formProps }: PropsWithRequiredChildren<ModalProps & FormProps>) => (
  <Modal title={ title } onClose={ onClose }>
    <Form { ...formProps } />
  </Modal>
);
