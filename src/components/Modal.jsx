import React from 'react';
import './Modal.css';

const Modal = ({ open, close, children }) => {
  if (!open) return null;

  return (
    <div className="ModalBackground">
      <div className="ModalBlock">
        <div className="TopContent">
          <button className="CloseButton" onClick={close}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
