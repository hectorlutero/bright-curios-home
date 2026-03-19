import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqItems = [
  {
    q: "How private is the AI infrastructure?",
    a: "100% private. We don't use public APIs for sensitive data processing. We deploy custom LLMs inside your Virtual Private Cloud (VPC) or On-Premise servers. Your data never trains public models."
  },
  {
    q: "Can you integrate with our legacy software?",
    a: "Yes. Our specialty is building 'AI Bridges'. We create custom API layers that connect modern LLMs to your existing ERPs, CRMs, or SQL databases without requiring a full system migration."
  },
  {
    q: "What is the typical ROI timeline?",
    a: "Most clients see a positive ROI within the first 60 days post-deployment. By automating 80% of repetitive cognitive tasks, the labor recovery usually pays for the implementation in less than 4 months."
  },
  {
    q: "Do you provide ongoing support?",
    a: "We offer 'Velocity Retainers' where we monitor your AI nodes 24/7, update models as new research emerges, and continuously optimize workflows for peak performance."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="tag gold">Intelligence Base</span>
        <h2>Frequently Asked Questions</h2>
      </motion.div>

      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`faq-item glass-panel ${openIndex === index ? 'active' : ''}`}
          >
            <button className="faq-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <span>{item.q}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="faq-content"
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
