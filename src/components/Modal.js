import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { open, close } = props;

  return (
    <>
      {open && (
        <div className="ModalBackground">
          <div className="ModalBlock">
            <div className="TopContent">
              <button className="CloseButton" onClick={close}>×</button>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
