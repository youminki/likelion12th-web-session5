import React from 'react';
import webtoonImg1 from '../assets/image/webtoonImg1.jpeg';
import webtoonImg2 from '../assets/image/webtoonImg2.jpeg';
import webtoonImg3 from '../assets/image/webtoonImg3.jpeg';
import webtoonImg4 from '../assets/image/webtoonImg4.jpeg';
import webtoonImg5 from '../assets/image/webtoonImg5.jpeg';
import webtoonImg6 from '../assets/image/webtoonImg6.jpeg';
import webtoonImg7 from '../assets/image/webtoonImg7.jpeg';
import webtoonImg8 from '../assets/image/webtoonImg8.jpeg';
import webtoonImg9 from '../assets/image/webtoonImg9.jpeg';
import '../page/Movie.css';

const Series = () => {
    const webtoonImg = [
        { src: webtoonImg1, title: '나 혼자만 레벨업', years:'2023', country: '한국', reservationRate: '36%', audience: '100만' },
        { src: webtoonImg2, title: '휘영검전', years:'2023', country: '한국', reservationRate: '36%', audience: '200만' },
        { src: webtoonImg3, title: '아기님 캐시로 로판 달린다', years:'2023', country: '한국', reservationRate: '36%', audience: '300만' },
        { src: webtoonImg4, title: '던전 리셋', years:'2023', country: '한국', reservationRate: '36%', audience: '400만' },
        { src: webtoonImg5, title: '시그리드', years:'2023', country: '한국', reservationRate: '36%', audience: '500만' },
        { src: webtoonImg6, title: '만렙 영웅님께서 귀환하신다!', years:'2023', country: '한국', reservationRate: '36%', audience: '600만' },
        { src: webtoonImg7, title: '로드 오브 머니', years:'2023', country: '한국', reservationRate: '36%', audience: '700만' },
        { src: webtoonImg8, title: '검술명가 막내아들', years:'2023', country: '한국', reservationRate: '36%', audience: '800만' },
        { src: webtoonImg9, title: '토끼와 흑표범의 공생관계', years:'2023', country: '한국', reservationRate: '36%', audience: '900만' },
    ];

    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {webtoonImg.map((movie, index) => (
                    <div key={index} className='movieItem'>
                        <img src={movie.src} alt={movie.title} />
                        <div className='content1'> {movie.title}</div>
                        <div className='content2'>{movie.years} ・ {movie.country}</div>
                        <div className='content3'>예매율 {movie.reservationRate} ・ 누적 관객 {movie.audience}</div>
                    </div>
                ))}
            </div>
            
            <div className='titleName'>공개 예정작</div>
            <div className="movieList">
                {webtoonImg.map((movie, index) => (
                    <div key={index} className='movieItem'>
                        <img src={movie.src} alt={movie.title} />
                        <div className='content1'> {movie.title}</div>
                        <div className='content2'>{movie.years} ・ {movie.country}</div>
                        <div className='content3'>예매율 {movie.reservationRate} ・ 누적 관객 {movie.audience}</div>
                    </div>
                ))}
            </div>

            <div className='titleName'>왓챠 구매 순위</div>
            <div className="movieList">
                {webtoonImg.map((movie, index) => (
                    <div key={index} className='movieItem'>
                        <img src={movie.src} alt={movie.title} />
                        <div className='content1'> {movie.title}</div>
                        <div className='content2'>{movie.years} ・ {movie.country}</div>
                        <div className='content3'>예매율 {movie.reservationRate} ・ 누적 관객 {movie.audience}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Series;
