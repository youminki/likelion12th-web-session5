import React from 'react';
import styled from 'styled-components';


const Poster = ({ header, images }) => (
    <MainContainer4>
        <PosterHeader>{header}</PosterHeader>
        <PosterList className="scrollable">
            {images.map((movie, index) => (
                <PosterItemContainer key={index}>
                    <PosterItem style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }} />
                    <PosterInfo>
                        <PosterTitle>{movie.title}</PosterTitle>
                        <PosterRating>평균 ★ {movie.vote_average.toFixed(1)}</PosterRating>
                    </PosterInfo>
                </PosterItemContainer>
            ))}
        </PosterList>
    </MainContainer4>
);

export default Poster;

const MainContainer4 = styled.div`
    padding-left: 50px;
`;

const PosterHeader = styled.header`
    color: rgb(0, 0, 0);
    font-size: 24px;
    margin: 0px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 28px;
    margin-top: 50px;
`;

const PosterList = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 42px;
    margin-bottom: 100px;
`;

const PosterItemContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
`;

const PosterItem = styled.div`
    width: 200px;
    height: 300px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: all 300ms ease 0s;
    position: relative;
`;

const PosterInfo = styled.div`
    width: 200px;
    background: rgba(255, 255, 255, 0.9);
    color: black;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
`;

const PosterTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PosterRating = styled.div`
    font-size: 14px;
    color: gray;
`;