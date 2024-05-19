import React from 'react';
import styled from 'styled-components';

const MainContainer3 = styled.div`
    .headerContainer {
        padding-left: 50px;
        color: rgb(0, 0, 0);
        font-size: 24px;
        margin: 0px;
        font-weight: 700;
        letter-spacing: -0.7px;
        line-height: 28px;
        margin: 8px 0px;
    }
`;

const UlContainer = styled.div`
    padding-left: 50px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid rgb(240, 240, 240);
    
`;

const Picture = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
`;

const PictureContent = styled.div`
    padding-left: 10px;
    padding-right: 100px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PictureContent1 = styled.div`
    color: rgb(30, 30, 30);
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PictureContent2 = styled.div`
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    white-space: normal;
    max-height: 38px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const CastList = ({ cast }) => (
    <MainContainer3>
        <header className='headerContainer'> 출연/제작</header>
        <UlContainer>
            {cast.map((member, index) => (
                <div key={index}>
                    <Picture src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
                    <PictureContent>
                        <PictureContent1>{member.name}</PictureContent1>
                        <PictureContent2>{member.character}</PictureContent2>
                    </PictureContent>
                </div>
            ))}
        </UlContainer>
    </MainContainer3>
);

export default CastList;
