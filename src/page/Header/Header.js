import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { default as watcha } from '../../assets/image/icon_logo.png';
import searchImg from '../../assets/image/icon_search.png';
import Book from '../Book';
import '../Header/Header.css';
import Login from '../Login';
import Movie from '../Movie';
import Series from '../Series';
import SignUp from '../SignUp';
import Webtoon from '../Webtoon';

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <Router>
      <>
        <div className='header'>
          <div className='watchaLogo'>
            <img src={watcha} alt="watcha"></img>
            <div className='menu'>
            <Link to="/movie">영화</Link>
            <Link to="/series">시리즈</Link>
            <Link to="/book">책</Link>
            <Link to="/webtoon">웹툰</Link>
          </div>
          </div>


          <div className="userControls">
            <div className="searchContainer">
              <img src={searchImg} alt="searchImg"></img>
              <input
                type="text"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                value={searchTerm}
                onChange={handleSearchChange}
                className="searchInput"
              />
            </div>
            <Login />
            <SignUp />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Movie />} /> {/* 기본 경로에 Movie 컴포넌트를 렌더링합니다. */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/series" element={<Series />} />
          <Route path="/book" element={<Book />} />
          <Route path="/webtoon" element={<Webtoon />} />
        </Routes>
      </>
    </Router>
  );
};

export default Footer;
