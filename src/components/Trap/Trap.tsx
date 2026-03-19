import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldAlert, DollarSign, TrendingUp, Info, CheckCircle2 } from 'lucide-react';
import './Trap.css';

const traps = [
  {
    icon: <DollarSign className="trap-icon red" />,
    title: "The Talent Gap",
    content: "Elite AI engineers cost $300k+/year plus equity.",
    tooltip: "Hidden: Recruiting (20%), Benefits, Equity, and 4-month ramp-up time.",
    cost: "$300k+",
    position: { top: '0%', left: '5%' },
    width: '340px'
  },
  {
    icon: <Clock className="trap-icon red" />,
    title: "The Speed Tax",
    content: "A 12-month development cycle is a death sentence.",
    tooltip: "Market: Competitors shipping in <30 days capture 80% of early adopters.",
    cost: "1 Year Lost",
    position: { top: '15%', left: '62%' },
    width: '340px'
  },
  {
    icon: <ShieldAlert className="trap-icon red" />,
    title: "The Privacy Leak",
    content: "Public AI models leak trade secrets effortlessly.",
    tooltip: "Risk: Proprietary R&D data can be used to train future public models.",
    cost: "Data Risk",
    position: { top: '35%', left: '8%' },
    width: '340px'
  },
  {
    icon: <TrendingUp className="trap-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver top 1% AI expertise and private infrastructure in < 30 days.",
    tooltip: "ROI: Fixed cost, zero overhead, and immediate technical dominance.",
    cost: "Optimized ROI",
    position: { top: '58%', left: '50%', transform: 'translateX(-50%)' },
    width: '480px',
    isSolution: true
  },
  {
    icon: <CheckCircle2 className="trap-icon cyan" />,
    title: "Operational Stability",
    content: "Post-implementation equilibrium with automated scaling.",
    tooltip: "Result: Zero manual toil and 100% predictable operational margins.",
    cost: "MAX PROFIT",
    position: { top: '82%', left: '50%', transform: 'translateX(-50%)' },
    width: '420px',
    isStability: true
  }
];

const TrapCard = ({ trap, index }: { trap: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      animate={{ 
        y: [0, -10, 0],
      }}
      style={{ 
        position: 'absolute', 
        ...trap.position,
        width: trap.width,
        zIndex: isHovered ? 100 : (trap.isSolution || trap.isStability ? 50 : 10) 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`trap-card glass-panel ${trap.isSolution ? 'solution' : ''} ${trap.isStability ? 'stability' : ''}`}
    >
      <div className="trap-notification-header">
        <div className="icon-wrapper">
          {trap.icon}
        </div>
        <div className="trap-header-info">
          <span className="trap-title">{trap.title}</span>
          <span className="trap-timestamp">
            {trap.isStability ? 'SYSTEM STABLE' : (trap.isSolution ? 'READY' : 'CRITICAL')}
          </span>
        </div>
        <div className="trap-cost-badge">{trap.cost}</div>
      </div>
      
      <div className="trap-content">
        <p>{trap.content}</p>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="trap-tooltip-refined"
          >
            <Info size={14} className="info-icon" />
            <span>{trap.tooltip}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="trap-footer">
        <span className="action-text">
          {trap.isStability ? 'Profit Stream Active' : (trap.isSolution ? 'Order Established' : 'Risk Analysis')}
        </span>
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
