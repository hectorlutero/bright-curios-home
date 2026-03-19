import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldAlert, DollarSign, TrendingUp, Info, CheckCircle2, ArrowDown } from 'lucide-react';
import './Trap.css';

const chaosTraps = [
  {
    icon: <DollarSign className="trap-icon red" />,
    title: "The Talent Gap",
    content: "Elite AI engineers cost $300k+/year plus equity.",
    tooltip: "Hidden: Recruiting (20%), Benefits, Equity, and 4-month ramp-up time.",
    cost: "$300k+",
    position: { top: '0%', left: '5%' },
    width: '320px'
  },
  {
    icon: <Clock className="trap-icon red" />,
    title: "The Speed Tax",
    content: "A 12-month development cycle is a death sentence.",
    tooltip: "Market: Competitors shipping in <30 days capture 80% of early adopters.",
    cost: "1 Year Lost",
    position: { top: '8%', left: '62%' },
    width: '320px'
  },
  {
    icon: <ShieldAlert className="trap-icon red" />,
    title: "The Privacy Leak",
    content: "Public AI models leak trade secrets effortlessly.",
    tooltip: "Risk: Proprietary R&D data can be used to train future public models.",
    cost: "Data Risk",
    position: { top: '30%', left: '10%' },
    width: '320px'
  }
];

const successSteps = [
  {
    icon: <TrendingUp className="trap-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver top 1% AI expertise and private infrastructure in < 30 days.",
    tooltip: "ROI: Fixed cost, zero overhead, and immediate technical dominance.",
    cost: "Optimized ROI",
    type: "solution"
  },
  {
    icon: <CheckCircle2 className="trap-icon cyan" />,
    title: "Operational Stability",
    content: "Post-implementation equilibrium with automated scaling.",
    tooltip: "Result: Zero manual toil and 100% predictable operational margins.",
    cost: "MAX PROFIT",
    type: "stability"
  }
];

const TrapCard = ({ item, index, isChaos = true }: { item: any, index: number, isChaos?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      animate={isChaos ? { y: [0, -10, 0] } : {}}
      style={isChaos ? { 
        position: 'absolute', 
        ...item.position,
        width: item.width,
        zIndex: isHovered ? 100 : 10 
      } : { width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`trap-card glass-panel ${item.type || ''}`}
    >
      <div className="trap-notification-header">
        <div className="icon-wrapper">
          {item.icon}
        </div>
        <div className="trap-header-info">
          <span className="trap-title">{item.title}</span>
          <span className="trap-timestamp">
            {isChaos ? 'CRITICAL ALERT' : (item.type === 'solution' ? 'READY' : 'STABLE')}
          </span>
        </div>
        <div className="trap-cost-badge">{item.cost}</div>
      </div>
      
      <div className="trap-content">
        <p>{item.content}</p>
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
            <span>{item.tooltip}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="trap-footer">
        <span className="action-text">
          {isChaos ? 'Risk Analysis' : (item.type === 'solution' ? 'Order Established' : 'Profit Stream Active')}
        </span>
        <div className={`tap-indicator ${item.type === 'stability' ? 'success' : ''}`}></div>
      </div>
    </motion.div>
  );
};

const Trap: React.FC = () => {
  return (
    <section className="roadmap-section">
      <div className="roadmap-bg-glow"></div>
      
      <div className="container">
        {/* GROUP 1: THE CHAOS */}
        <div className="chaos-group">
          <div className="section-header center">
            <span className="tag red">Stage 01: The Risk</span>
            <h2 className="section-title">The $100k <br />In-house Trap</h2>
          </div>
          <div className="chaos-scatter-container">
            {chaosTraps.map((trap, index) => (
              <TrapCard key={index} item={trap} index={index} isChaos={true} />
            ))}
          </div>
        </div>

        {/* TRANSITION CONNECTOR */}
        <div className="roadmap-connector">
          <div className="connector-line"></div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="connector-arrow"
          >
            <ArrowDown size={32} />
          </motion.div>
          <span className="connector-label">Implementing Bright Intelligence</span>
        </div>

        {/* GROUP 2: THE ORDER */}
        <div className="order-group">
          <div className="section-header center">
            <span className="tag cyan">Stage 02: The Impact</span>
            <h2 className="section-title">Operational Excellence</h2>
          </div>
          <div className="order-grid">
            {successSteps.map((step, index) => (
              <TrapCard key={index} item={step} index={index} isChaos={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trap;
