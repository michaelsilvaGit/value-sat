import { NAVIGATION_LINKS, COLORS } from '../../lib/constants';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-opacity-80 backdrop-blur-md border-b border-[#00FFCC30] sticky top-0 z-50" style={{ background: COLORS.backgroundSecondary }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold font-heading">
            <span className="text-[#00FFCC] mr-1" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Rastre</span>
            <span className="text-white">Auto</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="font-medium text-white hover:text-[#00FFCC] transition-colors duration-300 hover:shadow-glow"
              style={{ textShadow: 'none', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.textShadow = '0 0 8px rgba(0, 255, 204, 0.7)'}
              onMouseOut={(e) => e.currentTarget.style.textShadow = 'none'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contato"
            className="bg-[#00FFCC] text-[#121212] px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px]"
            style={{ boxShadow: '0 0 15px rgba(0, 255, 204, 0.7)' }}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E1E2F] border-t border-[#00FFCC30] shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="font-medium text-white hover:text-[#00FFCC] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contato"
                className="bg-[#00FFCC] text-[#121212] px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all inline-block text-center"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 204, 0.7)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
