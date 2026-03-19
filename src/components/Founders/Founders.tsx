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
            <img src={hectorImg} alt="Hector Siman" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Hector Siman</h3>
            <p className="founder-role">CTO & AI Strategy</p>
            <p className="founder-bio">
              Specialist in high-velocity MVP delivery and enterprise-grade AI infrastructure.
            </p>
          </div>
        </div>

        <div className="founder-card glass-panel">
          <div className="founder-image-wrapper">
            <img src={rafaelImg} alt="Rafael Figueiredo" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Rafael Figueiredo</h3>
            <p className="founder-role">CEO & Operations</p>
            <p className="founder-bio">
              Expert in automating complex operational workflows and ROI-driven implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
