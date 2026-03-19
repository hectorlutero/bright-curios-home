import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="status-tag">[ SYSTEM_READY: HIGH_VELOCITY_AI ]</div>
          <h1>
            Stop building AI. <br />
            <span className="gold-gradient">Start shipping ROI.</span>
          </h1>
          <p>
            90% of internal AI projects fail to reach production. 
            We deliver custom, private AI workflows in 30 days.
          </p>
          <div className="hero-actions">
            <a href="#audit" className="btn-pill large">Audit Your Bottlenecks</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
