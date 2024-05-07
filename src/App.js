import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Footer from './page/Footer/Footer.js';
import Header from './page/Header/Header.js';
import Main from './page/Main';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/footer">Footer</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
