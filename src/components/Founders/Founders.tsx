import React from 'react';
import './Founders.css';
import hectorImg from '../../assets/founders/hector.png';
import rafaelImg from '../../assets/founders/rafael.png';

const Founders: React.FC = () => {
  return (
    <section className="founders-section container">
      <h2 className="section-title">The Founders</h2>
      <div className="founders-grid">
        <div className="founder-card glass-panel">
          <div className="founder-image-wrapper">
            <img src={rafaelImg} alt="Rafael Figueiredo" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Rafael Figueiredo</h3>
            <p className="founder-role">CEO | Strategist & Investor</p>
            <p className="founder-bio">
              Visionary manager and strategic lead focused on identifying high-ROI opportunities and steering large-scale business operations.
            </p>
          </div>
        </div>

        <div className="founder-card glass-panel">
          <div className="founder-image-wrapper">
            <img src={hectorImg} alt="Hector Siman" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Hector Siman</h3>
            <p className="founder-role">CTO | AI Architect & Product Engineer</p>
            <p className="founder-bio">
              Multi-Agent systems specialist and operational AI expert leading the technical architecture and engineering of high-velocity products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
