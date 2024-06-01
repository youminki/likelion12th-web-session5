import React from 'react';
import styled from 'styled-components';


const Rating = ({ movie }) => (
    <Box1>
        <RatingContainer className='ratingContainer'>
            <div className='starRating'>
                {Array(5).fill().map((_, i) => (
                    <svg key={i} height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee">
                        <g fill-rule="evenodd">
                            <path d={starSvgPath}></path>
                        </g>
                    </svg>
                ))}
            </div>
            <Content5>평가하기</Content5>
        </RatingContainer>
        <div className='contentContainer'>
            <Content4>{movie.average}</Content4>
            <Content5>평균 별점</Content5>
        </div>
    </Box1>
);

export default Rating;

const Box1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const RatingContainer = styled.div`
    svg {
        fill: #eee;
    }
    &:hover svg {
        fill: #F82C60;
    }
`;

const Content4 = styled.div`
    position: relative;
    justify-content: center;
    display: flex;
    color: #888;
    font-size: 36px;
`;

const Content5 = styled.div`
    position: relative;
    justify-content: center;
    display: flex;
    color: #8c8c8c;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 20px;
`;

const starSvgPath = "M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z";
