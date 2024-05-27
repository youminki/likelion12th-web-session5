import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { darkModeState, topRatedMoviesState } from '../attoms/movieAtoms.jsx';
import Modal from '../components/Modal2.jsx';
import CastList from '../components/MovieDetail/CastList.jsx';
import Comments from '../components/MovieDetail/Comments.jsx';
import Gallery from '../components/MovieDetail/Gallery.jsx';
import MovieActions from '../components/MovieDetail/MovieActions.jsx';
import MovieInfo from '../components/MovieDetail/MovieInfo.jsx';
import Poster from '../components/MovieDetail/Poster.jsx';
import Rating from '../components/MovieDetail/Rating.jsx';

const MovieDetail = () => {
    const { rank } = useParams();
    const topRatedMovies = useRecoilValue(topRatedMoviesState);
    const darkMode = useRecoilValue(darkModeState);
    const [movie, setMovie] = useState(null);
    const [images, setImages] = useState([]);
    const [introImage, setIntroImage] = useState('');
    const [cast, setCast] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchMovieData = async () => {
            const apiKey = process.env.REACT_APP_TMDB_API_KEY;
            const movieUrl = `https://api.themoviedb.org/3/movie/${rank}?api_key=${apiKey}&language=ko-KR`;
            const imagesUrl = `https://api.themoviedb.org/3/movie/${rank}/images?api_key=${apiKey}`;
            const castUrl = `https://api.themoviedb.org/3/movie/${rank}/credits?api_key=${apiKey}`;
            const commentsUrl = `https://api.themoviedb.org/3/movie/${rank}/reviews?api_key=${apiKey}`;
            const videosUrl = `https://api.themoviedb.org/3/movie/${rank}/videos?api_key=${apiKey}`;

            setIsLoading(true);

            try {
                const [movieRes, imagesRes, castRes, commentsRes] = await Promise.all([
                    axios.get(movieUrl),
                    axios.get(imagesUrl),
                    axios.get(castUrl),
                    axios.get(commentsUrl),
                    axios.get(videosUrl),
                ]);

                const additionalInfo = {
                    year: new Date(movieRes.data.release_date).getFullYear(),
                    country: movieRes.data.production_countries[0]?.name || 'Unknown',
                    percent: '75%',
                    audience: movieRes.data.popularity,
                };

                setMovie({ ...movieRes.data, ...additionalInfo });
                setImages(imagesRes.data.backdrops);
                setIntroImage(movieRes.data.backdrop_path);
                setCast(castRes.data.cast);
                setComments(commentsRes.data.results);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movie data:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchMovieData();
    }, [rank]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading movie data.</p>;
    }

    const handleIconClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <ContentContainer darkMode={darkMode}>
            <MovieInfo movie={movie} introImage={introImage} />
            <MainContainer2>
                <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Box0>
                    <Box1And2>
                        <Rating movie={movie} />
                        <MovieActions handleIconClick={handleIconClick} />
                        <Modal isOpen={isModalOpen} closeModal={closeModal} modalContent={modalContent} />
                        <Section darkMode={darkMode}>
                            <MovieContent darkMode={darkMode}>{movie.overview}</MovieContent>
                        </Section>
                    </Box1And2>
                </Box0>
            </MainContainer2>
            <CastList cast={cast} />
            <Comments comments={comments.map((comment) => ({ author: comment.author, text: comment.content }))} />
            <Gallery header="Gallery" images={images.map((img) => `https://image.tmdb.org/t/p/w500${img.file_path}`)} />
            <Poster header="비슷한 작품" images={topRatedMovies} />
        </ContentContainer>
    );
};

export default MovieDetail;


const MainContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
`;

const MovieImg = styled.img`
    order: 1;
    width: 300px;
    height: 300px;
    margin: 20px;
    border: 2px solid #d9d9d9;
`;

const Box0 = styled.div`
    order: 2;
    width: 100%;
`;

const Box1And2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Section = styled.section`
    line-height: 1.15;
    font-family: "Pretendard", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    color: ${(props) => (props.darkMode ? '#fff' : 'rgb(0, 0, 0)')};
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    display: grid;
    row-gap: 20px;
    align-items: center;
    border-bottom: 1px solid ${(props) => (props.darkMode ? '#555' : 'rgb(217, 217, 217)')};
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 0;
    justify-content: center;
`;

const MovieContent = styled.p`
    font-family: "Pretendard", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    color: ${(props) => (props.darkMode ? '#ddd' : 'rgb(140, 140, 140)')};
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    white-space: pre-line;
    margin: 20px;
    min-height: 150px;
`;

const ContentContainer = styled.div`
    padding-top: 20px;
    background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#fff' : '#000')};
`;
