import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './page/Footer/Footer.js';
import Header from './page/Header/Header.js';
import Movie from './page/Movie';
import MovieDetail from './page/MovieDetail';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:rank" element={<MovieDetail />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
