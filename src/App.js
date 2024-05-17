import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import Footer from './page/Footer/Footer.js';
import Header from './page/Header/Header.js';
import Movie from './page/Movie';
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
