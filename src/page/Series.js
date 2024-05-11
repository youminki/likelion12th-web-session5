import React from 'react';
import seriesImg1 from '../assets/image/seriesImg1.jpeg';
import seriesImg2 from '../assets/image/seriesImg2.jpeg';
import seriesImg3 from '../assets/image/seriesImg3.jpeg';
import seriesImg4 from '../assets/image/seriesImg4.jpeg';
import seriesImg5 from '../assets/image/seriesImg5.jpeg';
import seriesImg6 from '../assets/image/seriesImg6.jpeg';
import seriesImg7 from '../assets/image/seriesImg7.jpeg';
import seriesImg8 from '../assets/image/seriesImg8.jpeg';
import seriesImg9 from '../assets/image/seriesImg9.jpeg';
import '../page/Movie.css';

const Series = () => {
    const seriesImg = [
        { src: seriesImg1, title: '종말의 바보', years:'2023', country: '한국', reservationRate: '36%', audience: '100만' },
        { src: seriesImg2, title: '선재업고 튀어', years:'2023', country: '한국', reservationRate: '36%', audience: '200만' },
        { src: seriesImg3, title: '눈물의 여왕', years:'2023', country: '한국', reservationRate: '36%', audience: '300만' },
        { src: seriesImg4, title: '히어로는 아닙니다만', years:'2023', country: '한국', reservationRate: '36%', audience: '400만' },
        { src: seriesImg5, title: '기생수 더그레이', years:'2023', country: '한국', reservationRate: '36%', audience: '500만' },
        { src: seriesImg6, title: '지배종', years:'2023', country: '한국', reservationRate: '36%', audience: '600만' },
        { src: seriesImg7, title: '수사반장 1958', years:'2023', country: '한국', reservationRate: '36%', audience: '700만' },
        { src: seriesImg8, title: '비밀은 없어', years:'2023', country: '한국', reservationRate: '36%', audience: '800만' },
        { src: seriesImg9, title: '살인 장난감', years:'2023', country: '한국', reservationRate: '36%', audience: '900만' },
    ];

    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {seriesImg.map((movie, index) => (
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
                {seriesImg.map((movie, index) => (
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
                {seriesImg.map((movie, index) => (
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
