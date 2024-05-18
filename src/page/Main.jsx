import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MovieDATA } from '../assets/Data.js';

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

const Movie = () => {
    return (
        <MainContainer>
            <TitleName>박스오피스 순위</TitleName>
            <MovieList className="scrollable">
                {MovieDATA.map((movie, index) => (
                    <MovieItem key={index}>
                        <Link to={`/movie/${movie.rank}`}>
                            <img src={movie.img} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.year} ・ {movie.country}</Content2>
                        <Content3>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
            <TitleName>공개 예정작</TitleName>
            <MovieList className="scrollable">
                {MovieDATA.map((movie, index) => (
                    <MovieItem key={index}>
                        <Link to={`/movie/${movie.rank}`}>
                            <img src={movie.img} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.year} ・ {movie.country}</Content2>
                        <Content3>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
            <TitleName>왓챠 구매 순위</TitleName>
            <MovieList className="scrollable">
                {MovieDATA.map((movie, index) => (
                    <MovieItem key={index}>
                        <Link to={`/movie/${movie.rank}`}>
                            <img src={movie.img} alt={movie.title} />
                        </Link>
                        <Content1>{movie.title}</Content1>
                        <Content2>{movie.year} ・ {movie.country}</Content2>
                        <Content3>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</Content3>
                    </MovieItem>
                ))}
            </MovieList>
        </MainContainer>
    );
};

export default Movie;
