import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import './Framework.css';

const steps = [
  {
    icon: <Target className="gold-icon" />,
    title: "Deep Audit",
    desc: "We scan your entire operation to find the most expensive manual bottlenecks.",
    label: "Step 01"
  },
  {
    icon: <Zap className="cyan-icon" />,
    title: "Velocity Build",
    desc: "Custom AI models and private workflows deployed in your stack in < 30 days.",
    label: "Step 02"
  },
  {
    icon: <ShieldCheck className="gold-icon" />,
    title: "Private Governance",
    desc: "Secure deployment where 100% of the data stays within your firewall.",
    label: "Step 03"
  }
];

const Framework: React.FC = () => {
  return (
    <section className="framework-section container">
      <div className="section-header">
        <span className="tag cyan">The Methodology</span>
        <h2>30-Day Velocity Framework</h2>
      </div>

      <div className="framework-grid">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="framework-card glass-panel"
          >
            <div className="step-label">{step.label}</div>
            <div className="icon-box">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Framework;
