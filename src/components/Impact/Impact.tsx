import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, CheckCircle2, Info } from 'lucide-react';
import './Impact.css';

const impactCards = [
  {
    icon: <TrendingUp className="impact-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver top 1% AI expertise and private infrastructure in < 30 days.",
    tooltip: "ROI: Fixed cost, zero overhead, and immediate technical dominance.",
    cost: "Optimized ROI",
    label: "READY",
    type: "solution"
  },
  {
    icon: <CheckCircle2 className="impact-icon cyan" />,
    title: "Operational Stability",
    content: "Post-implementation equilibrium with automated scaling.",
    tooltip: "Result: Zero manual toil and 100% predictable operational margins.",
    cost: "MAX PROFIT",
    label: "SYSTEM STABLE",
    type: "stability"
  }
];

const ImpactCard = ({ card, index }: { card: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`impact-card glass-panel ${card.type}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="impact-notification-header">
        <div className="impact-icon-wrapper">
          {card.icon}
        </div>
        <div className="impact-header-info">
          <span className="impact-title">{card.title}</span>
          <span className="impact-timestamp">{card.label}</span>
        </div>
        <div className="impact-cost-badge">{card.cost}</div>
      </div>
      
      <div className="impact-content">
        <p>{card.content}</p>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="impact-tooltip"
          >
            <Info size={14} className="info-icon" />
            <span>{card.tooltip}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="impact-footer">
        <span className="impact-action-text">
          {card.type === 'solution' ? 'Order Established' : 'Profit Stream Active'}
        </span>
        <div className={`impact-indicator ${card.type}`}></div>
      </div>
    </motion.div>
  );
};

const Impact: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="impact-bg-glow"></div>
      <div className="container">
        <div className="section-header center">
          <span className="tag cyan">The Outcome</span>
          <h2 className="section-title">From Chaos to <br />Operational Excellence</h2>
        </div>

        <div className="impact-grid">
          {impactCards.map((card, index) => (
            <ImpactCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
