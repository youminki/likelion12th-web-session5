import { useState } from 'react';
import Footer from './page/Footer/Footer.js';
import Header from './page/Header/Header.js';
import Movie from './page/Movie.js';

function App() {
  const [showMovie, setShowMovie] = useState(true);

  const handleHeaderClick = () => {
    setShowMovie(false);
  };

  return (
    <>
      <div onClick={handleHeaderClick}>
        <Header />
      </div>
      {showMovie && <Movie />}
      <Footer />
    </>
  );
}

export default App;
