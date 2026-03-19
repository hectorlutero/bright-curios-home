import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section container">
      <div className="cta-card glass-panel">
        <h2>Stop guessing. <br /><span className="gold-gradient">Start shipping.</span></h2>
        <p>Your competitors are already automating. Don't let tech debt become a terminal illness for your business.</p>
        <div className="cta-actions">
          <a href="#audit" className="btn-pill large">Execute Deep Audit</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
