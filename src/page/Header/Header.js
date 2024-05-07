import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { default as watcha } from '../../assets/image/icon_logo.png';
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
          </div>
          <div className='list1'><Link to="/movie">영화</Link></div>
          <div className='list2'><Link to="/series">시리즈</Link></div>
          <div className='list3'><Link to="/book">책</Link></div>
          <div className='list4'><Link to="/webtoon">웹툰</Link></div>

          <input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleSearchChange}
            className="searchInput"
          />
          <Login />
          <SignUp />
        </div>

        <Routes>
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
