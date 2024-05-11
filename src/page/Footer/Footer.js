import React from 'react';
import '../../App.css';
import '../../App.js';
import '../Footer/Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className='star'>지금까지 <span className='highlight'>★716,392,403 개의 평가가</span> 쌓였어요.</div>
            <div className='li1'>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</div>

            <div className='li2'>고객센터 | cs@watchapedia.co.kr, 02-515-9985</div>
            <div className='li3'>제휴 . 및대외 협력 | https://watcha.team/contact</div>

            <div className='li4'>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</div>
            <div className='li5'>사업자 등록 번호 211-88-66013</div>
        </div>
    );
}

export default Footer;
