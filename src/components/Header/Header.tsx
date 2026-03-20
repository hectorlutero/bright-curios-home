import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../../assets/logos/logo-white.png';
import logoBlack from '../../assets/logos/logo-black.png';
import './Header.css';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <a href="#strategy" className="btn-pill small desktop-only">Strategy Call</a>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav-overlay glass-panel"
          >
            <nav className="mobile-nav-links">
              <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
              <a href="#method" className="nav-link" onClick={toggleMenu}>Methodology</a>
              <a href="#cases" className="nav-link" onClick={toggleMenu}>Cases</a>
              <a href="#blog" className="nav-link" onClick={toggleMenu}>Blog</a>
              <a href="#strategy" className="btn-pill small" onClick={toggleMenu}>Strategy Call</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
