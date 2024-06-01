import React from 'react';
import styled from 'styled-components';


const Modal = ({ isOpen, closeModal, modalContent }) => {
    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContentWrapper>
                <div>
                    <BackButton onClick={closeModal} />
                </div>
                <ModalIcon />
                <ModalTextContent>{modalContent}</ModalTextContent>
                <SignupButton>회원가입</SignupButton>
                <LoginButton>로그인</LoginButton>
            </ModalContentWrapper>
        </ModalBackground>
    );
};

export default Modal;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalContentWrapper = styled.div`
    width: 375px;
    height: 540px;
    padding: 20px;
    margin-bottom: 100px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;


const SignupButton = styled.button`
    width: 334px;
    height: 44px;
    margin: 0px 20px;
    background-color: #ff2f6e;
    border-radius: 5px;
    border: none;
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: bolder;
    position: fixed;
    margin-top: 150px;
`;

const LoginButton = styled.button`
    width: 334px;
    height: 44px;
    margin: 0px 20px;
    background-color: white;
    border-radius: 5px;
    border: none;
    text-align: center;
    color: #ff2f6e;
    font-size: 15px;
    font-weight: bolder;
    position: fixed;
    margin-top: 200px;
`;

const ModalIcon = styled.div`
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4xOCA2LjczNUg0LjY4YS41LjUgMCAwIDAtLjUuNXYxMy41MTlhLjUuNSAwIDAgMCAuNzg4LjQwN2w2Ljk2MS00Ljk0IDYuOTYxIDQuOTRhLjUuNSAwIDAgMCAuNzktLjQwN1Y3LjIzNGEuNS41IDAgMCAwLS41LS41TTE4LjY4IDIuMjIxSDUuMThhMSAxIDAgMCAwLTEgMXYxLjVhLjUuNSAwIDAgMCAuNS41aDE0LjVhLjUuNSAwIDAgMCAuNS0uNXYtMS41YTEgMSAwIDAgMC0xLTEiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) center center / contain no-repeat;
    vertical-align: top;
    width: 88px;
    height: 88px;
    margin: 100px 150px;
`;

const ModalTextContent = styled.div`
    margin-top: -100px;
    position: relative;
    justify-content: center;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 30px;
    white-space: pre-line;
    text-align: center;
`;

const BackButton = styled.button`
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);
    padding: 0px;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
`;