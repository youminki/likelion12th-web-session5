import React from 'react';
import movie1 from '../assets/image/1.jpg';
import movie2 from '../assets/image/2.jpg';
import movie3 from '../assets/image/3.jpg';
import movie4 from '../assets/image/4.jpg';
import movie5 from '../assets/image/5.jpg';
import movie6 from '../assets/image/6.jpg';
import movie7 from '../assets/image/7.jpg';
import movie8 from '../assets/image/8.jpg';
import movie9 from '../assets/image/9.jpg';
import '../page/Movie.css';

const Movie = () => {
    const movies = [
        { src: movie1, title: '범죄도시4', years:'2024', country: '한국', reservationRate: '37%', audience: '871만' },
        { src: movie2, title: '쿵푸팬더4', years:'2024', country: '미국', reservationRate: '36%', audience: '170만' },
        { src: movie3, title: '혹성탈출(새로운 시대)', years:'2024', country: '미국', reservationRate: '18%', audience: '624만' },
        { src: movie4, title: '포켓몬스터(성도지방 이야기, 최종장)', years:'2024', country: '일본', reservationRate: '0.5%', audience: '13만' },
        { src: movie5, title: '스턴트맨', years:'2024', country: '미국', reservationRate: '36%', audience: '18만' },
        { src: movie6, title: '악마와의 토크쇼', years:'2024', country: '오스트레일리아', reservationRate: '5.6%', audience: '1476' },
        { src: movie7, title: '가필드 더 무비', years:'2024', country: '미국', reservationRate: '16%', audience: '411만' },
        { src: movie8, title: '하이큐 극장판(쓰레기장의 결전)', years:'2024', country: '일본', reservationRate: '1.4%', audience: '10만' },
        { src: movie9, title: '꼬마참새 리차드(신비한 보석 탐험대)', years:'2024', country: '독일', reservationRate: '2%', audience: '2.4만' },
    ];

    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {movies.map((movie, index) => (
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
                {movies.map((movie, index) => (
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
                {movies.map((movie, index) => (
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

export default Movie;
