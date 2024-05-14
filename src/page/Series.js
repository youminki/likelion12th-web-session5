import React from 'react';
import { Link } from 'react-router-dom';
import { SeriesDATA } from '../assets/Data.js';
import '../page/Movie.css';

const Series = () => {
    return (
        <>
            <div className='MainContainer'>
                <div className='titleName'>박스오피스 순위</div>
                <div className="movieList">
                    {SeriesDATA.map((movie, index) => (
                        <div key={index} className='movieItem'>
                            <Link to={`/movie/${movie.rank}`}>
                                <img src={movie.img} alt={movie.title} />
                            </Link>
                            <div className='content1'> {movie.title}</div>
                            <div className='content2'>{movie.year} ・ {movie.country}</div>
                            <div className='content3'>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</div>
                        </div>
                    ))}
                </div>
                <div className='titleName'>공개 예정작</div>
                <div className="movieList">
                    {SeriesDATA.map((movie, index) => (
                        <div key={index} className='movieItem'>
                            <Link to={`/movie/${movie.rank}`}>
                                <img src={movie.img} alt={movie.title} />
                            </Link>
                            <div className='content1'> {movie.title}</div>
                            <div className='content2'>{movie.year} ・ {movie.country}</div>
                            <div className='content3'>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</div>
                        </div>
                    ))}
                </div>
                <div className='titleName'>왓챠 구매 순위</div>
                <div className="movieList">
                    {SeriesDATA.map((movie, index) => (
                        <div key={index} className='movieItem'>
                            <Link to={`/movie/${movie.rank}`}>
                                <img src={movie.img} alt={movie.title} />
                            </Link>
                            <div className='content1'> {movie.title}</div>
                            <div className='content2'>{movie.year} ・ {movie.country}</div>
                            <div className='content3'>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Series;
