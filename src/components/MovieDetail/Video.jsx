import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 10px;
    margin: 20px 0;
    margin-bottom: 200px;
    white-space: nowrap;
    scrollbar-width: thin;
    scrollbar-color: #d9d9d9 #f5f5f5;
`;

const VideoWrapper = styled.div`
    display: inline-block;
    flex: 0 0 auto;
    margin-left: 40px;
    width: 400px;
    border: 1px solid #d9d9d9;
    overflow: hidden;
    
`;

const VideoFrame = styled.iframe`
    width: 100%;
    height: 280px;
    border: none;
`;

const Header = styled.h2`
    font-family: "Pretendard", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    font-size: 24px;
    color: rgb(0, 0, 0);
    text-align: center;
    margin-bottom: 20px;
`;

const VideoGallery = ({ header, videos }) => {
    return (
        <div>
            <Header>{header}</Header>
            <VideoContainer>
                {videos.map((video) => (
                    <VideoWrapper key={video.key}>
                        <VideoFrame
                            src={`https://www.youtube.com/embed/${video.key}`}
                            allowFullScreen
                            title={video.name}
                        />
                    </VideoWrapper>
                ))}
            </VideoContainer>
        </div>
    );
};

export default VideoGallery;
