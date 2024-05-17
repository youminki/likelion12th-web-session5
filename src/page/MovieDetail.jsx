import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieDATA } from '../assets/Data.js';
import Modal from '../components/Modal2.jsx';
import CastList from '../components/MovieDetail/CastList.jsx';
import Comments from '../components/MovieDetail/Comments.jsx';
import Gallery from '../components/MovieDetail/Gallery.jsx';
import MovieActions from '../components/MovieDetail/MovieActions.jsx';
import MovieInfo from '../components/MovieDetail/MovieInfo.jsx';
import Rating from '../components/MovieDetail/Rating.jsx';


const MainContainer2 = styled.div`
    flex-direction: row;
    display: flex;
`;

const MovieImg = styled.img`
    order: 1;
    vertical-align: top;
    width: 300px;
    height: 300px;
    min-height: 1px;
    opacity: 1;
    margin: 50px;
    display: block;
    border: 2px solid #d9d9d9;
`;

const Box0 = styled.div`
    order: 2;
    width: 100%;
`;

const Box1And2 = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    line-height: 1.15;
    font-family: "Pretendard", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    color: rgb(0, 0, 0);
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    display: grid;
    row-gap: 20px;
    align-items: center;
    border-bottom: 1px solid rgb(217, 217, 217);
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 0px 20px;
    justify-content: center;
`;

const MovieContent = styled.p`
    -webkit-text-size-adjust: 100%;
    font-family: "Pretendard", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    white-space: pre-line;
    margin: 50px 50px 50px;
    min-height: 150px;
`;

const MovieDetail = () => {
    const { rank } = useParams();
    const movie = MovieDATA.find(m => m.rank === Number(rank));

    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIconClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    const cast = [
        { name: '이엘', role: '주연' },
        { name: '이엘', role: '주연' },
        { name: '이엘', role: '주연' },
        { name: '이엘', role: '주연' },
        
    ];

    const comments = [
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' },
        { author: '이동진 평론가', text: '익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.' }
    ];

    const images = [
        'https://an2-img.amz.wtchn.net/image/v2/qyntwpwHk3NDXphv1ugk0w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpnNE5qWXdPRGN4TWpJeE5qSWlmUS5ZSmx4dzBsbm1xYkZGaVFfNkdCVWFTdUtMdUdDTVFPM3NRR2s1c0RsUGlj',
        'https://an2-img.amz.wtchn.net/image/v2/CqLzfA0nCoA5rQtY5CrUSw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFeE56UTVNRFExT1RJNU1qY3dJbjAuNV9Hb2wwYUpFaUhvY1c1VHRRZXhQYkJYbGhwVDd4OG51RGdRZ2ZIcjM3Zw',
        'https://an2-img.amz.wtchn.net/image/v2/K46FMdn1bdRiFJRYjCDY6Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFME5UTXhOVEl5TURBMk9ETTROQ0o5LjMzZVJKcFZ2TVlOU0F3N0RGMXIzN0gzRkNGRktyNWVsS1o4RkpteEZkSEU',
        'https://an2-img.amz.wtchn.net/image/v2/SsWRk5HA0XUPpBdK1-BsFA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpjNE16azBNRGM0T0RrNU1qSTFJbjAuUHlfb1ZTTjlWWFlhWDl1Vm95MFptdVhJbl9FZ2gzVnZDTVZNVkZWQTN1OA',
        'https://an2-img.amz.wtchn.net/image/v2/duKYfWyvg_QtdxJg2fhPFg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpNMU1EQXhOamsxTVRnME1qQWlmUS5vUkFwTi1OLTFpb2dXbXdiU3lBbnprVEhJdVdOOTdfaUwxcUlKdkpfaFcw',
        'https://an2-img.amz.wtchn.net/image/v2/rLhMi9T_vS6oQusL_dWRiw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpNMU1EQXdOek0yTVRjMU1UZ2lmUS5SR3JlWFhvaVJ3ejhSTFZDdzFibXVLc1RNNkZkeXk0anRCYm1xTUZ4ZHhN',
        'https://an2-img.amz.wtchn.net/image/v2/ZroSGpJkgNrDKrGlPQrHIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFeE56UTVNRFV6TlRJM01EUXlJbjAuaUc0Y3pHbllNTFRlTHlGTVZpN3BidmRTR3hqcnA2NGVRQno1NUpmMFhvTQ',
        'https://an2-img.amz.wtchn.net/image/v2/MC-36S-LapC0EcQmxVJ2Vg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpNNE1qUXdOakEwT1RnM09URWlmUS41YlR1SGN0dzQwVWtDM1BaV1IxSmtDTkJPUndPd2xjdUhucFRGamJfWTNz'
    ];

    return (
        <div className="movieDetail">
            <MovieInfo movie={movie} />
            <MainContainer2>
                <MovieImg src={movie.img} alt={movie.title} />
                <Box0>
                    <Box1And2>
                        <Rating movie={movie} />
                        <MovieActions handleIconClick={handleIconClick} />
                        <Modal isOpen={isModalOpen} closeModal={closeModal} modalContent={modalContent} />
                        <Section>
                            <MovieContent>{movie.content}</MovieContent>
                        </Section>
                    </Box1And2>
                </Box0>
            </MainContainer2>
            <CastList cast={cast} />
            <Comments comments={comments} />
            <Gallery header="갤러리" images={images} />
            <Gallery header="동영상" images={images} />
        </div>
    );
};

export default MovieDetail;
