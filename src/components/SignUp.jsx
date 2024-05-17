import { useState } from 'react';
import google from '../assets/image/icon_google.png';
import kakao from '../assets/image/icon_kakao.png';
import line from '../assets/image/icon_line.png';
import { default as logo } from '../assets/image/icon_logo.png';
import twitter from '../assets/image/icon_twitter.png';
import '../components/Header/Header.css';
import Modal from './Modal';

const SignUp = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  return (
    <>
      <button className="SignUpButton" onClick={openSignUpModal}>회원가입</button>
      <Modal open={signUpModalOpen} close={closeSignUpModal}>
        <img className="LogoImage" src={logo} alt="로고 이미지" />
        <div className="Title">회원가입</div>
        <input className="LoginInput" placeholder="이름" />
        <input className="LoginInput" placeholder="이메일" />
        <input className="LoginInput" placeholder="비밀번호" />
        <button className="LoginRedButton">로그인</button>
        <div className="CenterBlock">
          <div className="Content" style={{ color: "#8c8c8c" }}>이미 가입하셨나요?</div>
          <div className="Content" style={{ color: "#ff2f6e" }}>로그인</div>
        </div>
        <div className="CenterBlock">
          <div className="GrayLine" />
          <div className="OrContent">OR</div>
          <div className="GrayLine" />
        </div>
        <div className="WrapIcon">
          <img src={kakao} alt="kako" />
          <img src={google} alt="google" />
          <img src={twitter} alt="twitter" />
          <img src={line} alt="line" />
        </div>
        <div className="LoginTip">
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
