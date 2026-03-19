import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import './Transformation.css';

const AIScanner: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const allLogs = [
    '> ANALYZING PROPERTY_IMG_402...',
    '> CRACK DETECTED IN FOUNDATION [98% CONFIDENCE]',
    '> REPAIR ESTIMATE: $4,500 - $6,200',
    '> GENERATING NEGOTIATION SCRIPT...',
    '> READY FOR DEPLOYMENT'
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, allLogs[i % allLogs.length]].slice(-4));
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-scanner">
      <div className="scanner-line"></div>
      <div className="scanner-content">
        {logs.map((log, idx) => (
          <div key={idx} className="log-line">{log}</div>
        ))}
      </div>
    </div>
  );
};

const Transformation: React.FC = () => {
  const cases = [
    {
      title: 'Real Estate Implementation',
      tag: 'PROPERTY AUDITOR AI',
      before: ['Investors spend 40+ hours/week guessing repair costs from photos.', 'Human error leads to over-estimating deals or losing margins.'],
      after: ['Instant Vision AI analysis of 500+ photos in seconds.', 'Saving an average of $10,000 in repair cost miscalculations per deal.'],
      hasScanner: true
    },
    {
      title: 'Mart Minas',
      tag: 'RETAIL INVENTORY INTELLIGENCE',
      before: ['Outdated inventory tracking resulting in millions in lost supply chain efficiency.'],
      after: ['Predictive AI workflows that anticipate demand weeks in advance.', 'Transformed supply chain from reactive to revenue-proactive.'],
      hasScanner: false
    },
    {
      title: 'RedPeak Digital',
      tag: 'AGENCY AD-STRATEGY AUTOMATION',
      before: ['Creative teams stuck in 20+ hours of repetitive research and strategy drafting.'],
      after: ['Custom Private LLM trained on high-converting ad performance data.', 'Replaced 80% of manual research with data-backed strategy MVPs.'],
      hasScanner: false
    }
  ];

  return (
    <section className="transformation section-padding">
      <div className="container">
        <div className="section-title">
          <h2>The Transformation</h2>
          <p>Moving from manual chaos to AI-driven efficiency.</p>
        </div>

        {cases.map((item, idx) => (
          <div key={idx} className="case-study">
            <div className="case-header">
              <h3>{item.title}</h3>
              <span className="case-tag">{item.tag}</span>
            </div>
            <div className="transformation-grid">
              <div className="column chaos">
                <h4>The Manual Chaos</h4>
                {item.before.map((text, i) => (
                  <div key={i} className="item">
                    <X size={18} className="icon-x" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="column edge">
                <h4>The Bright Curios Edge</h4>
                {item.after.map((text, i) => (
                  <div key={i} className="item">
                    <Check size={18} className="icon-check" />
                    <p className={i === item.after.length - 1 ? 'gold-text-bold' : ''}>{text}</p>
                  </div>
                ))}
                {item.hasScanner && <AIScanner />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transformation;
