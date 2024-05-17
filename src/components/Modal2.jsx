import React from 'react';
import '../page/MovieDetail.css';

const Modal = ({ isOpen, closeModal, modalContent }) => {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className="ButtonClass">
                <div><button onClick={closeModal} className="backButton"></button></div>
                <div className="modalIcon"></div>
                <div className='modalContent'>{modalContent}</div>
                <button className="SignupRedButton">회원가입</button>
                <button className="LoginWhiteButton">로그인</button>
            </div>
        </div>
    );
};

export default Modal;
