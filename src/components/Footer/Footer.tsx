import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logoWhite from '../../assets/logos/logo-white.png';
import logoBlack from '../../assets/logos/logo-black.png';
import './Footer.css';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src={isDarkMode ? logoWhite : logoBlack} 
              alt="Bright Curios" 
              className="footer-logo" 
            />
            <p className="brand-desc">Elite AI Implementation Agency. Transforming operational bottlenecks into high-velocity ROI.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/bright-curios/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="link-group">
              <h4>Agency</h4>
              <a href="#services">Services</a>
              <a href="#method">Methodology</a>
              <a href="#cases">Cases</a>
              <a href="https://blog.brightcurios.com">Blog</a>
            </div>
            <div className="link-group">
              <h4>Products</h4>
              <a href="https://auditor.brightcurios.com" target="_blank">Property Auditor</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 BRIGHT CURIOS. All rights reserved.</p>
          <div className="status-indicator">
            <span className="dot"></span>
            SYSTEM_STATUS: OPTIMIZED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
