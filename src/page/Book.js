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

const Book = () => {
    const bookImg = [
        { src: bookImg1, title: '블루 아카이브', years:'2023', country: '한국', reservationRate: '36%', audience: '100만' },
        { src: bookImg2, title: '하이큐', years:'2023', country: '한국', reservationRate: '36%', audience: '200만' },
        { src: bookImg3, title: '나의 돈키호테', years:'2023', country: '한국', reservationRate: '36%', audience: '300만' },
        { src: bookImg4, title: '전지적 푸바오 시점', years:'2023', country: '한국', reservationRate: '36%', audience: '400만' },
        { src: bookImg5, title: '어덯게 살것인가', years:'2023', country: '한국', reservationRate: '36%', audience: '500만' },
        { src: bookImg6, title: '하이큐', years:'2023', country: '한국', reservationRate: '36%', audience: '600만' },
        { src: bookImg7, title: 'IDOLIST Seven', years:'2023', country: '한국', reservationRate: '36%', audience: '700만' },
        { src: bookImg8, title: '제철 행복', years:'2023', country: '한국', reservationRate: '36%', audience: '800만' },
        { src: bookImg9, title: 'IDOLIST Trigger', years:'2023', country: '한국', reservationRate: '36%', audience: '900만' },
    ];

    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {bookImg.map((bookImg, index) => (
                    <div key={index} className='movieItem'>
                        <img src={bookImg.src} alt={bookImg.title} />
                        <div className='content1'> {bookImg.title}</div>
                        <div className='content2'>{bookImg.years} ・ {bookImg.country}</div>
                        <div className='content3'>예매율 {bookImg.reservationRate} ・ 누적 관객 {bookImg.audience}</div>
                    </div>
                ))}
            </div>
            
            <div className='titleName'>공개 예정작</div>
            <div className="movieList">
                {bookImg.map((bookImg, index) => (
                    <div key={index} className='movieItem'>
                        <img src={bookImg.src} alt={bookImg.title} />
                        <div className='content1'> {bookImg.title}</div>
                        <div className='content2'>{bookImg.years} ・ {bookImg.country}</div>
                        <div className='content3'>예매율 {bookImg.reservationRate} ・ 누적 관객 {bookImg.audience}</div>
                    </div>
                ))}
            </div>

            <div className='titleName'>왓챠 구매 순위</div>
            <div className="movieList">
                {bookImg.map((bookImg, index) => (
                    <div key={index} className='movieItem'>
                        <img src={bookImg.src} alt={bookImg.title} />
                        <div className='content1'> {bookImg.title}</div>
                        <div className='content2'>{bookImg.years} ・ {bookImg.country}</div>
                        <div className='content3'>예매율 {bookImg.reservationRate} ・ 누적 관객 {bookImg.audience}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Book;
