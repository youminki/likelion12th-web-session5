import React from 'react';
import bookImg1 from '../assets/image/bookImg1.jpeg';
import bookImg2 from '../assets/image/bookImg2.jpeg';
import bookImg3 from '../assets/image/bookImg3.jpeg';
import bookImg4 from '../assets/image/bookImg4.jpeg';
import bookImg5 from '../assets/image/bookImg5.jpeg';
import bookImg6 from '../assets/image/bookImg6.jpeg';
import bookImg7 from '../assets/image/bookImg7.jpeg';
import bookImg8 from '../assets/image/bookImg8.jpeg';
import bookImg9 from '../assets/image/bookImg9.jpeg';
import '../page/Movie.css';

const Series = () => {
    const bookImg = [
        { src: bookImg1, title: '종말의 바보', years:'2023', country: '한국', reservationRate: '36%', audience: '100만' },
        { src: bookImg2, title: '선재업고 튀어', years:'2023', country: '한국', reservationRate: '36%', audience: '200만' },
        { src: bookImg3, title: '눈물의 여왕', years:'2023', country: '한국', reservationRate: '36%', audience: '300만' },
        { src: bookImg4, title: '히어로는 아닙니다만', years:'2023', country: '한국', reservationRate: '36%', audience: '400만' },
        { src: bookImg5, title: '기생수 더그레이', years:'2023', country: '한국', reservationRate: '36%', audience: '500만' },
        { src: bookImg6, title: '지배종', years:'2023', country: '한국', reservationRate: '36%', audience: '600만' },
        { src: bookImg7, title: '수사반장 1958', years:'2023', country: '한국', reservationRate: '36%', audience: '700만' },
        { src: bookImg8, title: '비밀은 없어', years:'2023', country: '한국', reservationRate: '36%', audience: '800만' },
        { src: bookImg9, title: '살인 장난감', years:'2023', country: '한국', reservationRate: '36%', audience: '900만' },
    ];

    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {bookImg.map((movie, index) => (
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
                {bookImg.map((movie, index) => (
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
                {bookImg.map((movie, index) => (
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
