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

const Movie = () => {
    return (
        <div className="movieList">
            <img src={movie1} alt="movie1" />
            <img src={movie2} alt="movie2" />
            <img src={movie3} alt="movie3" />
            <img src={movie4} alt="movie4" />
            <img src={movie5} alt="movie5" />
            <img src={movie6} alt="movie6" />
            <img src={movie7} alt="movie7" />
            <img src={movie8} alt="movie8" />
            <img src={movie9} alt="movie9" />
        </div>
    );
};

export default Movie;
