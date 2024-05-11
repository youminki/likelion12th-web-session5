import React from 'react';
import { DATA } from '../assets/Data.js';
import '../page/Movie.css';

const Movie = () => {
    return (
        <>
            <div className='titleName'>박스오피스 순위</div>
            <div className="movieList">
                {DATA.map((movie, index) => (
                    <div key={index} className='movieItem'>
                        <img src={movie.img} alt={movie.title} />
                        <div className='content1'> {movie.title}</div>
                        <div className='content2'>{movie.year} ・ {movie.country}</div>
                        <div className='content3'>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Movie;
