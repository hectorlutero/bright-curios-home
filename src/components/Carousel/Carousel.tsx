import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Shield, Cpu, Activity, Layout, ArrowRight } from 'lucide-react';
import './Carousel.css';

const cases = [
  {
    tag: "Real Estate",
    title: "Property Auditor AI",
    content: "Seamlessly integrated Vision AI that analyzes 500+ property photos in seconds, saving Real Estate investors $10k+ per deal by identifying hidden structural risks and renovation costs automatically.",
    accent: "var(--gold)",
    stats: { roi: "+300%", time: "30 Days", security: "Enterprise" },
    tech: ["Vision AI", "Vector DB", "Private LLM"],
    chartPath: "M0 80 Q 50 70, 100 50 T 200 20"
  },
  {
    tag: "Retail",
    title: "Mart Minas",
    content: "Predictive supply chain automation reducing inventory waste by 30% through advanced demand forecasting and real-time inventory synchronization across 50+ distribution centers.",
    accent: "var(--cyan)",
    stats: { roi: "+12M/yr", time: "45 Days", security: "Private" },
    tech: ["Forecasting", "Big Data", "Custom Nodes"],
    chartPath: "M0 80 Q 80 80, 120 40 T 240 10"
  },
  {
    tag: "Agencies",
    title: "RedPeak Digital",
    content: "Automated ad-strategy workflows replacing 40+ hours of manual labor with precise AI-driven market analysis and automated creative brief generation for high-scale campaigns.",
    accent: "var(--gold)",
    stats: { roi: "+80% Eff.", time: "25 Days", security: "Local" },
    tech: ["Agents", "Automation", "Strategy AI"],
    chartPath: "M0 60 Q 40 50, 80 30 T 160 5"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="carousel-section">
      <div className="carousel-outer-wrapper">
        <div className="carousel-info-panel">
          <div className="info-content">
            <span className="tag cyan">Success Stories</span>
            <h2 className="section-title">Business <br />Transformation</h2>
            <p className="section-subtitle">
              We deploy operational leverage that scales your margins through high-velocity AI implementation.
            </p>
            
            <div className="carousel-controls">
              <button className="control-btn" onClick={prevSlide}><ChevronLeft size={20} /></button>
              <button className="control-btn" onClick={nextSlide}><ChevronRight size={20} /></button>
            </div>

            <div className="slider-counter">
              <span className="current">0{currentIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total">0{cases.length}</span>
            </div>
          </div>
        </div>

        <div className="slider-main-container">
          <div className="slider-perspective">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * (720 + 48)}px)` }}>
              {cases.map((item, index) => {
                const isActive = index === currentIndex;
                const isNext = index > currentIndex;
                const isPrev = index < currentIndex;

                return (
                  <motion.div 
                    key={index}
                    className={`slide glass-panel ${isActive ? 'active' : 'peek'}`}
                    initial={false}
                    animate={{ 
                      rotateY: isActive ? 0 : (isNext ? 35 : -35),
                      z: isActive ? 0 : -300,
                      x: isActive ? 0 : (isNext ? 50 : -50),
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.2,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], // Custom Power Out curve
                    }}
                    style={{ transformOrigin: 'center center' }}
                  >
                    <div className="slide-bento-layout">
                      <div className="bento-header">
                        <div className="logo-placeholder glass-panel">
                          <Layout size={18} className="logo-icon" />
                          <span>[ CLIENT_LOGO ]</span>
                        </div>
                        <span className="case-tag" style={{ color: item.accent }}>{item.tag}</span>
                      </div>

                      <div className="bento-main">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        
                        <div className="bento-stats-grid">
                          <div className="stat-pill glass-panel">
                            <TrendingUp size={16} color={item.accent} />
                            <div className="stat-text">
                              <span className="val">{item.stats.roi}</span>
                              <span className="lbl">ROI Impact</span>
                            </div>
                          </div>
                          <div className="stat-pill glass-panel">
                            <Clock size={16} color={item.accent} />
                            <div className="stat-text">
                              <span className="val">{item.stats.time}</span>
                              <span className="lbl">Delivery</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bento-footer">
                        <div className="tech-row">
                          <div className="chips-wrapper">
                            {item.tech.map((t, i) => (
                              <span key={i} className="tech-chip"><Cpu size={12} /> {t}</span>
                            ))}
                            <span className="tech-chip status"><Activity size={12} /> SYSTEM: LIVE</span>
                          </div>
                        </div>
                        
                        <div className="action-row">
                          <a href="#" className="case-link">View Case Study <ArrowRight size={16} /></a>
                          <svg className="result-chart" viewBox="0 0 200 100">
                            <path d={item.chartPath} fill="none" stroke={item.accent} strokeWidth="3" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
