import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import Movie from './page/Main';
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
