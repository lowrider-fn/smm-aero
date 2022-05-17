import { useEffect, useRef } from 'react';

import { ButtonStyled, ModalMaskStyled, ModalStyled, TitleStyled } from './styled';

import type { ModalProps } from './types';

export const Modal = ({
  title,
  onClose,
  children
}: PropsWithRequiredChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef?.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalMaskStyled ref={ modalRef } onMouseDown={ handleClose }>
      <ModalStyled>
        <ButtonStyled
          mode="icon"
          icon="close"
          onClick={ onClose }
        />

        <TitleStyled
          tag="h2"
          size="h2"
          text={ title }
        />

        { children }
      </ModalStyled>
    </ModalMaskStyled>
  );
};
