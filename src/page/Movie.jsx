import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
    position: relative;
    color: rgb(41, 42, 50);
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 100px;
    margin-bottom: 300px;
`;

const TitleName = styled.div`
    position: relative;
    color: rgb(41, 42, 50);
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 100px;
    margin: 42px;
    margin-bottom: -50px;
`;

const MovieList = styled.div`
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    overflow: visible;
    gap: 16px;
    margin: 42px;

    &.scrollable {
        overflow-x: auto;
        white-space: nowrap;
    }
`;

const MovieItem = styled.div`
    img {
        vertical-align: top;
        width: 200px;
        min-height: 1px;
        opacity: 1;
        object-fit: cover;
        transition: opacity 420ms ease 0s;
    }
`;

const Content1 = styled.div`
    color: rgb(41, 42, 50);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
`;

const Content2 = styled.div`
    color: rgb(41, 42, 50);
    padding-bottom: 1px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 21px;
`;

const Content3 = styled.div`
    color: rgb(116, 116, 123);
    white-space: normal;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 18px;
    margin-top: 5px;
`;

const Movie = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>No movies available</p>;
    }

    return (
        <MainContainer>
            <TitleName>박스오피스 순위</TitleName>
            <MovieList className="scrollable">
                {movies.map((movie) => (
                    <MovieItem key={movie.rank}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.release_date.split('-')[0]} ・ {movie.original_language.toUpperCase()}</Content2>
                        <Content3>평점 {movie.vote_average} ・ 투표수 {movie.vote_count}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
            <TitleName>공개 예정작</TitleName>
            <MovieList className="scrollable">
                {movies.slice(0, 5).map((movie) => (
                    <MovieItem key={movie.rank}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.release_date.split('-')[0]} ・ {movie.original_language.toUpperCase()}</Content2>
                        <Content3>평점 {movie.vote_average} ・ 투표수 {movie.vote_count}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
            <TitleName>왓챠 구매 순위</TitleName>
            <MovieList className="scrollable">
                {movies.slice(5, 10).map((movie) => (
                    <MovieItem key={movie.rank}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.release_date.split('-')[0]} ・ {movie.original_language.toUpperCase()}</Content2>
                        <Content3>평점 {movie.vote_average} ・ 투표수 {movie.vote_count}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
        </MainContainer>
    );
};

export default Movie;
