import React from 'react';
import styled from 'styled-components';

const MainContainer1 = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin-bottom: 20px;
`;

const IntroImg = styled.img`
    display: flex;
    position: relative;
    justify-content: center;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-bottom: 20px;
`;

const Lec1 = styled.div`
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 120px;
    left: 0;
    padding-left: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #ffffff;
    max-width: 1320px;
    margin-right: 20px;
`;

const Lec2 = styled.div`
    padding-left: 20px;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 80px;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #ffffff;
    max-width: 1320px;
    margin-right: 20px;
`;

const Lec3 = styled.div`
    padding-left: 20px;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 50px;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #ffffff;
    max-width: 1320px;
    margin-right: 20px;
`;

const MovieInfo = ({ movie, introImage }) => (
    <MainContainer1>
        <IntroImg className="introImg" src={`https://image.tmdb.org/t/p/w500${introImage}`} alt={movie.title} />
        <Lec1>{movie.title}</Lec1>
        <Lec2>{movie.year} ・ {movie.country}</Lec2>
        <Lec3>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</Lec3>
    </MainContainer1>
);

export default MovieInfo;
