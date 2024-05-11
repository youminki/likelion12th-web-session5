import React from 'react';
import { useParams } from 'react-router-dom';
import { DATA } from '../assets/Data.js';

const MovieDetail = () => {
    const { rank } = useParams();
    const movie = DATA.find(m => m.rank === Number(rank));
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title} />
            <p>Year: {movie.year}</p>
            <p>Country: {movie.country}</p>
            <p>Average: {movie.average}</p>
            <p>Percent: {movie.percent}</p>
            <p>Audience: {movie.audience}</p>
        </div>
    );
};

export default MovieDetail;