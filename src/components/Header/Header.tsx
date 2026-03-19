import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import logoWhite from '../../assets/logos/logo-white.png';
import logoBlack from '../../assets/logos/logo-black.png';
import './Header.css';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header-wrapper">
      <div className="header glass-panel">
        <div className="header-container">
          <div className="brand">
            <img 
              src={isDarkMode ? logoWhite : logoBlack} 
              alt="Bright Curios" 
              className="logo-img" 
            />
          </div>
          
          <nav className="nav-menu">
            <a href="#services" className="nav-link">Services</a>
            <a href="#method" className="nav-link">Methodology</a>
            <a href="#cases" className="nav-link">Cases</a>
            <a href="#blog" className="nav-link">Blog</a>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#strategy" className="btn-pill small">Strategy Call</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
