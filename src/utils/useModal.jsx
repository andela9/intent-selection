import { useState } from 'react';

const useModal = () => {
  const [isVisible, setVisibility] = useState(false);

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };
  return [show, hide, isVisible];
};

export default useModal;
