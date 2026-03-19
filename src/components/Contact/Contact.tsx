import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section container" id="strategy">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="contact-card glass-panel"
      >
        <div className="contact-grid">
          <div className="contact-info">
            <span className="tag cyan">Direct Access</span>
            <h2>Start Your <br /><span className="gold-gradient">AI Strategy Call</span></h2>
            <p>
              Skip the sales pitch. Talk directly to our technical founders about your operational bottlenecks.
            </p>
            
            <div className="contact-methods">
              <div className="method-item">
                <Mail size={20} className="gold-text" />
                <span>hello@brightcurios.com</span>
              </div>
              <div className="method-item">
                <MessageSquare size={20} className="cyan-text" />
                <span>LinkedIn / BrightCurios</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="contact-form-area"
          >
            <form className="diagnosis-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Company Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label>Operational Bottleneck</label>
                <textarea placeholder="Tell us about a repetitive manual task costing you time..."></textarea>
              </div>
              <button type="submit" className="btn-pill large full-width">
                Request Diagnosis <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
