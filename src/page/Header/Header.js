import { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import google from '../../assets/image/icon_google.png';
import kakao from '../../assets/image/icon_kakao.png';
import line from '../../assets/image/icon_line.png';
import { default as logo, default as watcha } from '../../assets/image/icon_logo.png';
import twitter from '../../assets/image/icon_twitter.png';
import Modal from '../../components/Modal';
import '../Header/Header.css';


const Footer = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <Router>
      <>
        <div className='watchaLogo'>
          <img src={watcha} alt="watcha"></img>
        </div>
        <div className='list1'><Link to="/movie">영화</Link></div>
        <div className='list2'><Link to="/series">시리즈</Link></div>
        <div className='list3'><Link to="/book">책</Link></div>
        <div className='list4'><Link to="/webtoon">웹툰</Link></div>

        <div className="LoginButton" onClick={openModal}>로그인</div>
        <Modal open={loginModalOpen} close={closeModal}>
          <img className="LogoImage" src={logo} alt="로고 이미지" />
          <div className="Title">로그인</div>
          <input className="LoginInput" placeholder="이메일" />
          <input className="LoginInput" placeholder="비밀번호" />
          <button className="LoginRedButton">로그인</button>
          <div className="Content" style={{ color: "#ff2f6e" }}>비밀번호를 잃어버리셨나요?</div>
          <div className="CenterBlock">
            <div className="Content" style={{ color: "#8c8c8c" }}>계정이 없으신가요?</div>
            <div className="Content" style={{ color: "#ff2f6e" }}>회원가입</div>
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
        <Route path="/movie" component={Movie} />
        <Route path="/series" component={Series} />
        <Route path="/book" component={Book} />
        <Route path="/webtoon" component={Webtoon} />
      </>
    </Router>
  );
};

export default Footer;
