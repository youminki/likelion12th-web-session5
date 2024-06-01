import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Movie from './page/Movie';
import MovieDetail from './page/MovieDetail.jsx';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:rank" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
