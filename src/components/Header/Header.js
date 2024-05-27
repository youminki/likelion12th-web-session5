import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import watcha from '../../assets/image/icon_logo.png';
import searchImg from '../../assets/image/icon_search.png';
import { darkModeState, topRatedMoviesState } from '../../attoms/movieAtoms.jsx';
import Book from '../../page/Book';
import Movie from '../../page/Movie';
import Series from '../../page/Series';
import Webtoon from '../../page/Webtoon';
import Login from '../Login';
import SignUp from '../SignUp';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isLoadingSeries, setIsLoadingSeries] = useState(true);

  const setTopRatedMovies = useSetRecoilState(topRatedMoviesState);
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR`;
    axios.get(url)
      .then(response => {
        setTopRatedMovies(response.data.results);
      })
      .catch(error => console.error('Error fetching top rated movies:', error));
  }, [setTopRatedMovies]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setIsLoadingMovies(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setIsLoadingMovies(false);
      }
    };

    const fetchSeries = async () => {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=ko-KR&page=1`;
      try {
        const response = await axios.get(url);
        setSeries(response.data.results);
        setFilteredSeries(response.data.results);
        setIsLoadingSeries(false);
      } catch (error) {
        console.error("Error fetching series data:", error);
        setIsLoadingSeries(false);
      }
    };

    fetchMovies();
    fetchSeries();
  }, []);

  useEffect(() => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filteredMovies);

    const filteredSeries = series.filter(serie =>
      serie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeries(filteredSeries);
  }, [searchTerm, movies, series]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  if (isLoadingMovies || isLoadingSeries) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <>
        <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
          <div className='watchaLogo'>
            <img src={watcha} alt='watcha' />
            <div className='menu'>
              <Link to='/movie'>영화</Link>
              <Link to='/series'>시리즈</Link>
              <Link to='/book'>책</Link>
              <Link to='/webtoon'>웹툰</Link>
            </div>
          </div>

          <div className='userControls'>
            <div className='searchContainer'>
              <img src={searchImg} alt='searchImg' />
              <input
                type='text'
                placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요.'
                value={searchTerm}
                onChange={handleSearchChange}
                className='searchInput'
              />
            </div>
            <button onClick={toggleDarkMode} className='darkModeToggle'>
              {darkMode ? '라이트 모드' : '다크 모드'}
            </button>
            <Login />
            <SignUp />
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Movie movies={filteredMovies} />} />
          <Route path='/movie' element={<Movie movies={filteredMovies} />} />
          <Route path='/series' element={<Series series={filteredSeries} />} />
          <Route path='/book' element={<Book />} />
          <Route path='/webtoon' element={<Webtoon />} />
        </Routes>
      </>
    </Router>
  );
};

export default Header;
