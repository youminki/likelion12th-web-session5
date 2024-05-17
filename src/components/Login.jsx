import { useState } from 'react';
import google from '../assets/image/icon_google.png';
import kakao from '../assets/image/icon_kakao.png';
import line from '../assets/image/icon_line.png';
import { default as logo } from '../assets/image/icon_logo.png';
import twitter from '../assets/image/icon_twitter.png';
import './Header/Header.css';
import Modal from './Modal';
const Login = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    const handleLogin = () => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('로그인 성공');
        } else {
            alert('로그인 실패');
        }
    };

    return (
        <>
            <div className="LoginButton" onClick={openLoginModal}>로그인</div>
            <Modal open={loginModalOpen} close={closeLoginModal}>
                <img className="LogoImage" src={logo} alt="로고 이미지" />
                <div className="Title">로그인</div>
                <input className="LoginInput" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
                <input className="LoginInput" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
                <button className="LoginRedButton" onClick={handleLogin}>로그인</button>
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
        </>
    );
};

export default Login;
