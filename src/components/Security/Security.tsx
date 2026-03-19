import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Share2, Server, Lock } from 'lucide-react';
import './Security.css';

const Security: React.FC = () => {
  return (
    <section className="security-section container" id="services">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="tag cyan">The Trust Layer</span>
        <h2>Enterprise-Grade Foundation</h2>
      </motion.div>

      <div className="security-bento">
        {/* CARD 1: PRIVATE INFRA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="security-card glass-panel main"
        >
          <div className="card-content">
            <div className="icon-pills">
              <span className="pill"><Lock size={14} /> Private LLM</span>
              <span className="pill"><Server size={14} /> On-Premise / VPC</span>
            </div>
            <h3>Sovereign AI Infrastructure</h3>
            <p>
              Your data never trains public models. We deploy isolated environments where intelligence is yours alone, secured by enterprise-grade encryption.
            </p>
            <div className="security-footer">
              <div className="shield-badge">
                <Shield size={24} className="gold-text" />
                <span>Zero Data Leakage Policy</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: INTEGRATION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="security-card glass-panel side"
        >
          <div className="card-content">
            <Share2 size={32} className="cyan-text" />
            <h3>Seamless <br />Integration</h3>
            <p>
              AI that talks to your stack. Native connectors for Slack, CRMs, and Cloud APIs.
            </p>
            <ul className="integration-list">
              <li>• Legacy System Support</li>
              <li>• API-First Architecture</li>
              <li>• 24/7 Node Monitoring</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
