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
            <div className='box0'>
                <img className="movieImg" src={movie.img} alt={movie.title} />
                <section>
                    <div className='box1'>
                        <p>평가하기</p>
                    </div>
                    <div className='box2'>
                        <p>보고싶어요</p>
                        <p>코멘트</p>
                        <p>보는중</p>
                        <p>더보기</p>
                    </div>
                </section>
                <section className='box3'>
                    <p className="movieContent">{movie.content}</p>
                </section>
            </div>
        </div>
    );
};

export default MovieDetail;
