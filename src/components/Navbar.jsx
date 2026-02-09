import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-teal-400 tracking-tight border border-teal-400 p-2 rounded-md hover:bg-teal-400/10 transition-colors"
            >
              MA
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Projects', 'Skills'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-sm font-mono text-slate-300 hover:text-teal-400 transition-colors"
              >
                <span className="text-teal-400 mr-1">0{index + 1}.</span>{item}
              </button>
            ))}
            <a 
              href="Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-mono text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
