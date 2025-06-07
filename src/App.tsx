import './tech-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      once: true,
    });
  }, []);
  
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
