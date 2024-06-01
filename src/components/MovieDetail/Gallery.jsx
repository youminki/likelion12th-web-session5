import React from 'react';
import styled from 'styled-components';



const Gallery = ({ header, images }) => (
    <MainContainer4>
        <GalleryHeader>{header}</GalleryHeader>
        <GalleryList className="scrollable">
            {images.map((image, index) => (
                <GalleryImg key={index} style={{ backgroundImage: `url(${image})` }} />
            ))}
        </GalleryList>
    </MainContainer4>
);

export default Gallery;

const MainContainer4 = styled.div`
    padding-left: 50px;
`;

const GalleryHeader = styled.header`
    color: rgb(0, 0, 0);
    font-size: 24px;
    margin: 0px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 28px;
    margin-top: 50px;
`;

const GalleryList = styled.div`
    
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 42px;
    margin-bottom: 100px;

`;

const GalleryImg = styled.div`
    width: 400px;
    height: 300px;
    display: inline-block;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: all 300ms ease 0s;
    margin-right: 10px;
`;