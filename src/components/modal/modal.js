import React from 'react';
import ReactDOM from 'react-dom';

import {
  Overlay,
  Container
} from './styles';

const Modal = (props) => {

  const { children, view, close } = props;

  return (view) ? ReactDOM.createPortal(
    <>
      <Overlay onClick={close}/>
      <Container>
        {children}
      </Container>
    </>
    , document.body
  ) : null;
}

export default Modal;
