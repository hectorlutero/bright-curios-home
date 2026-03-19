import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, DollarSign, TrendingUp } from 'lucide-react';
import './Trap.css';

const traps = [
  {
    icon: <DollarSign className="trap-icon red" />,
    title: "The Talent Gap",
    content: "Elite AI engineers cost $300k+/year plus equity. Most companies spend 6 months just to find one.",
    cost: "$300k+",
    delay: 0
  },
  {
    icon: <Clock className="trap-icon red" />,
    title: "The Speed Tax",
    content: "A 12-month development cycle is a death sentence in the AI era. Competitors move in 30 days.",
    cost: "1 Year Lost",
    delay: 0.1
  },
  {
    icon: <ShieldAlert className="trap-icon red" />,
    title: "The Privacy Leak",
    content: "Public AI models leak trade secrets. In-house hacks often bypass enterprise security protocols.",
    cost: "Data Risk",
    delay: 0.2
  },
  {
    icon: <TrendingUp className="trap-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver the top 1% AI expertise and private infrastructure in < 30 days. No overhead.",
    cost: "Optimized ROI",
    delay: 0.3,
    isSolution: true
  }
];

const Trap: React.FC = () => {
  return (
    <section className="trap-section">
      <div className="trap-bg-accent"></div>
      <div className="container">
        <div className="section-header">
          <span className="tag red">The Risk</span>
          <h2 className="section-title">The $100k <br />In-house Trap</h2>
          <p className="section-subtitle">
            Building internally is often the slowest and most expensive way to fail.
          </p>
        </div>

        <div className="trap-container">
          {traps.map((trap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: trap.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`trap-card glass-panel ${trap.isSolution ? 'solution' : ''}`}
            >
              <div className="trap-notification-header">
                <div className="icon-wrapper">
                  {trap.icon}
                </div>
                <div className="trap-header-info">
                  <span className="trap-title">{trap.title}</span>
                  <span className="trap-timestamp">JUST NOW</span>
                </div>
                <div className="trap-cost-badge">{trap.cost}</div>
              </div>
              <div className="trap-content">
                <p>{trap.content}</p>
              </div>
              <div className="trap-footer">
                <span className="action-text">Tap to analyze risk</span>
                <div className="tap-indicator"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trap;
