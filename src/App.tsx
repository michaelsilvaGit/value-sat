import './tech-theme.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
