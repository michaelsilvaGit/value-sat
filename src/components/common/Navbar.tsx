import { NAVIGATION_LINKS } from '../../lib/constants';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const customerArea = () =>{
    
  }

  return (
    <header className="bg-opacity-80 backdrop-blur-md border-b border-[var(--border-color)] sticky top-0 z-50" style={{ background: 'var(--background-secondary)' }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold font-heading">
            <img
              src="/assets/logo-site-2.png"
              alt="Logo ValueSat"
              className="h-16 md:h-16 lg:h-24 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="font-medium text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-300 hover:shadow-glow"
              style={{ textShadow: 'none', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.textShadow = '0 0 8px var(--neon-glow-text)'}
              onMouseOut={(e) => e.currentTarget.style.textShadow = 'none'}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[var(--primary)] text-[var(--text-dark)] px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px]"
                  onClick={customerArea}
          >
            Área do cliente
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-light)] focus:outline-none"
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
        <div className="md:hidden bg-[var(--background-secondary)] border-t border-[var(--border-color)] shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="font-medium text-[var(--text-light)] hover:text-[var(--primary)] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[var(--primary)] text-[var(--text-dark)] px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px]"
                  onClick={customerArea}
          >
            Área do cliente
          </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
