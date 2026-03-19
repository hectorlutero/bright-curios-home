import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldAlert, DollarSign, TrendingUp, Info, CheckCircle2 } from 'lucide-react';
import './Trap.css';

const traps = [
  // PART 1: THE CHAOS (TOP DISPERSED)
  {
    icon: <DollarSign className="trap-icon red" />,
    title: "The Talent Gap",
    content: "Elite AI engineers cost $300k+/year plus equity. Hiring takes 6 months.",
    tooltip: "Includes: Recruiting fees (20%), Benefits, Equity dilution, and Training time.",
    cost: "$300k+",
    position: { top: '0%', left: '8%' },
    width: '400px',
    rotate: -2
  },
  {
    icon: <Clock className="trap-icon red" />,
    title: "The Speed Tax",
    content: "A 12-month development cycle is a death sentence in the AI era.",
    tooltip: "Market Advantage: Competitors shipping in <30 days will capture your market share.",
    cost: "1 Year Lost",
    position: { top: '18%', left: '58%' },
    width: '420px',
    rotate: 3
  },
  {
    icon: <ShieldAlert className="trap-icon red" />,
    title: "The Privacy Leak",
    content: "Public AI models leak trade secrets. In-house hacks bypass security.",
    tooltip: "Risk: Zero-day exploits in public API integrations can expose proprietary R&D data.",
    cost: "Data Risk",
    position: { top: '42%', left: '12%' },
    width: '400px',
    rotate: -1
  },
  // PART 2: THE ORDER (CENTRALIZED ROADMAP FLOW)
  {
    icon: <TrendingUp className="trap-icon gold" />,
    title: "The Bright Alternative",
    content: "We deliver top 1% AI expertise and private infrastructure in < 30 days.",
    tooltip: "ROI: Fixed cost, Zero overhead, Enterprise security, Immediate operational leverage.",
    cost: "Optimized ROI",
    position: { top: '70%', left: '50%', transform: 'translateX(-50%)' },
    width: '480px',
    isSolution: true
  },
  {
    icon: <CheckCircle2 className="trap-icon cyan" />,
    title: "Operational Stability",
    content: "Post-implementation equilibrium with automated scaling and predictable margins.",
    tooltip: "Outcome: Predictable margins, consistent high-quality output, and zero manual toil.",
    cost: <span>MAX <span style={{ color: '#22c55e' }}>PROFIT</span></span>,
    position: { top: '95%', left: '50%', transform: 'translateX(-50%)' },
    width: '420px',
    isStability: true
  }
];

const TrapCard = ({ trap, index }: { trap: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      animate={{ 
        y: [0, -10, 0],
        rotate: trap.rotate || 0
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
            {trap.isStability ? 'SYSTEM STABLE' : (trap.isSolution ? 'SOLUTION READY' : 'CRITICAL ALERT')}
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
        <span className="action-text">
          {trap.isStability ? 'Profit stream active' : (trap.isSolution ? 'Order established' : 'High exposure risk')}
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
          <span className="tag red">Enterprise Journey</span>
          <h2 className="section-title">The $100k <br />In-house Trap</h2>
          <p className="section-subtitle">
            Most internal projects fail before they even start. We provide the exit ramp.
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
