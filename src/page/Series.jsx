import React from 'react';
import { Link } from 'react-router-dom';
import '../page/StyleComponents.css';

const Series = ({ series }) => {

    return (
        <div className='MainContainer'>
            <div className='titleName'>인기 시리즈</div>
            <div className="movieList">
                {series.map((serie) => (
                    <div key={serie.id} className='movieItem'>
                        <Link to={`/series/${serie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
                        </Link>
                        <div className='content1'> {serie.name}</div>
                        <div className='content2'>{serie.first_air_date.split('-')[0]} ・ {serie.original_language.toUpperCase()}</div>
                        <div className='content3'>평점 {serie.vote_average} ・ 투표수 {serie.vote_count}</div>
                    </div>
                ))}
            </div>
            <div className='titleName'>공개 예정작</div>
            <div className="movieList">
                {series.slice(0, 5).map((serie) => (
                    <div key={serie.id} className='movieItem'>
                        <Link to={`/series/${serie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
                        </Link>
                        <div className='content1'> {serie.name}</div>
                        <div className='content2'>{serie.first_air_date.split('-')[0]} ・ {serie.original_language.toUpperCase()}</div>
                        <div className='content3'>평점 {serie.vote_average} ・ 투표수 {serie.vote_count}</div>
                    </div>
                ))}
            </div>
            <div className='titleName'>왓챠 구매 순위</div>
            <div className="movieList">
                {series.slice(5, 10).map((serie) => (
                    <div key={serie.id} className='movieItem'>
                        <Link to={`/series/${serie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
                        </Link>
                        <div className='content1'> {serie.name}</div>
                        <div className='content2'>{serie.first_air_date.split('-')[0]} ・ {serie.original_language.toUpperCase()}</div>
                        <div className='content3'>평점 {serie.vote_average} ・ 투표수 {serie.vote_count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Series;
