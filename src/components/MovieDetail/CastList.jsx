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
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgb(240, 240, 240);
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Picture = styled.div`
    position: relative;
    z-index: 1;
    background: url(https://an2-img.amz.wtchn.net/image/v2/5L6g3KyDX39s88lm0Ltfaw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNCbGNuTnZiaTh4TmpVeE16STRNek13T1RNMk5qTTNOVFE1SW4wLlBWMjlhVmRBNHJEdWd3dzBwWW5JSnhIVWZSbm5WMDVqVTNSVS1rYkZIOFU) center center / cover no-repeat;
    width: 80px;
    height: 80px;
    cursor: pointer;
    border-radius: 5px !important;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
`;

const PictureContent = styled.div`
    padding-left: 10px;
    padding-right: 100px;
    align-items: center;
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
        {cast.map((member, index) => (
            <UlContainer key={index}>
                <Picture />
                <PictureContent>
                    <PictureContent1>{member.name}</PictureContent1>
                    <PictureContent2>{member.role}</PictureContent2>
                </PictureContent>
            </UlContainer>
        ))}
    </MainContainer3>
);

export default CastList;
