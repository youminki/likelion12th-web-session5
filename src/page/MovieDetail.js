import React from 'react';
import { useParams } from 'react-router-dom';
import { DATA } from '../assets/Data.js';
import '../page/Movie.css';
import '../page/MovieDetail.css';

const MovieDetail = () => {
    const { rank } = useParams();
    const movie = DATA.find(m => m.rank === Number(rank));
    return (
        <div className="movieDetail">
            <h1 className="movieTitle">{movie.title}</h1>
            <img className="movieImg" src={movie.img} alt={movie.title} />
            <p className="movieYear">Year: {movie.year}</p>
            <p className="movieCountry">Country: {movie.country}</p>
            <p className="movieAverage">Average: {movie.average}</p>
            <p className="moviePercent">Percent: {movie.percent}</p>
            <p className="movieAudience">Audience: {movie.audience}</p>
        </div>
    );
};

export default MovieDetail;
