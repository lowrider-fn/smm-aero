import { useState } from 'react';

export function useToggle(isOpen?: boolean) {
  const [isShow, setIsShow] = useState(Boolean(isOpen));

  const handleShow = () => setIsShow(true);

  const handleHide = () => setIsShow(false);

  const toggleShowing = () => setIsShow(prev => !prev);

  return {
    isShow,
    handleShow,
    handleHide,
    toggleShowing
  };
}
