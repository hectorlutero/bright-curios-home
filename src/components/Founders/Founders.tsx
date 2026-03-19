import React from 'react';
import { motion } from 'framer-motion';
import './Founders.css';
import hectorImg from '../../assets/founders/hector.png';
import rafaelImg from '../../assets/founders/rafael.png';

const Founders: React.FC = () => {
  return (
    <section className="founders-section container">
      <h2 className="section-title">The Founders</h2>
      <div className="founders-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="founder-card glass-panel"
        >
          <div className="founder-image-wrapper">
            <img src={rafaelImg} alt="Rafael Figueiredo" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Rafael Figueiredo</h3>
            <p className="founder-role">Strategic Lead & Operations</p>
            <p className="founder-bio">
              Visionary strategist focused on identifying high-ROI opportunities and steering large-scale business operations.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="founder-card glass-panel"
        >
          <div className="founder-image-wrapper">
            <img src={hectorImg} alt="Hector Siman" className="founder-image" />
          </div>
          <div className="founder-info">
            <h3>Hector Siman</h3>
            <p className="founder-role">Lead AI Architect & Product Systems</p>
            <p className="founder-bio">
              Multi-Agent systems specialist and operational AI expert leading the technical architecture and engineering of high-velocity products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
