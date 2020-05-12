import { useState } from 'react';

const useModal = () => {
  const [view, setView] = useState(false);

  function toggle() {
    setView(!view);
  }

  return {
    view,
    toggle,
  }
};

export default useModal;
