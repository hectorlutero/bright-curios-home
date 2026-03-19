import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldAlert, DollarSign, TrendingUp, Info } from 'lucide-react';
import './Trap.css';

const traps = [
  {
    icon: <DollarSign className="trap-icon red" />,
    title: "The Talent Gap",
    content: "Elite AI engineers cost $300k+/year plus equity.",
    tooltip: "Includes: Recruiting fees (20%), Benefits, Equity dilution, and Training time.",
    cost: "$300k+",
    position: { top: '0%', left: '0%' },
    floatDuration: 6
  },
  {
    icon: <Clock className="trap-icon red" />,
    title: "The Speed Tax",
    content: "A 12-month development cycle is a death sentence.",
    tooltip: "Market Advantage: Competitors shipping in <30 days will capture your market share before you launch.",
    cost: "1 Year Lost",
    position: { top: '15%', left: '55%' },
    floatDuration: 7
  },
  {
    icon: <ShieldAlert className="trap-icon red" />,
    title: "The Privacy Leak",
    content: "Public AI models leak trade secrets effortlessly.",
    tooltip: "Risk: Zero-day exploits in public API integrations can expose proprietary R&D data.",
    cost: "Data Risk",
    position: { top: '50%', left: '10%' },
    floatDuration: 5
  },
  {
    icon: <TrendingUp className="trap-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver top 1% AI expertise in < 30 days.",
    tooltip: "ROI: Fixed cost, Zero overhead, Enterprise security, Immediate operational leverage.",
    cost: "Optimized ROI",
    position: { top: '65%', left: '50%' },
    floatDuration: 8,
    isSolution: true
  }
];

const TrapCard = ({ trap, index }: { trap: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      animate={{ 
        y: [0, -15, 0],
      }}
      style={{ 
        position: 'absolute', 
        ...trap.position,
        width: '380px',
        zIndex: isHovered ? 100 : 10 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`trap-card glass-panel ${trap.isSolution ? 'solution' : ''}`}
    >
      <div className="trap-notification-header">
        <div className="icon-wrapper">
          {trap.icon}
        </div>
        <div className="trap-header-info">
          <span className="trap-title">{trap.title}</span>
          <span className="trap-timestamp">CRITICAL ALERT</span>
        </div>
        <div className="trap-cost-badge">{trap.cost}</div>
      </div>
      
      <div className="trap-content">
        <p>{trap.content}</p>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="trap-tooltip"
          >
            <Info size={14} className="info-icon" />
            <p>{trap.tooltip}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="trap-footer">
        <span className="action-text">{trap.isSolution ? 'Efficiency unlocked' : 'High exposure risk'}</span>
        <div className="tap-indicator"></div>
      </div>
    </motion.div>
  );
};

const Trap: React.FC = () => {
  return (
    <section className="trap-section">
      <div className="trap-bg-accent"></div>
      <div className="container">
        <div className="section-header center">
          <span className="tag red">Hidden Costs</span>
          <h2 className="section-title">The $100k <br />In-house Trap</h2>
          <p className="section-subtitle">
            Building internally is often the slowest and most expensive way to fail.
          </p>
        </div>

        <div className="trap-scatter-container">
          {traps.map((trap, index) => (
            <TrapCard key={index} trap={trap} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trap;
