import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
  Cpu,
  Activity,
  Layout,
  ArrowRight,
} from "lucide-react";
import "./Carousel.css";

const cases = [
  {
    tag: "Real Estate",
    title: "Property Auditor AI",
    content:
      "Seamlessly integrated Vision AI that analyzes 500+ property photos in seconds, saving Real Estate investors $10k+ per deal by identifying hidden structural risks and renovation costs automatically.",
    accent: "var(--gold)",
    stats: { roi: "+300%", time: "30 Days", security: "Enterprise" },
    tech: ["Vision AI", "Vector DB", "Private LLM"],
    chartPath: "M0 80 Q 50 70, 100 50 T 200 20",
  },
  {
    tag: "Retail",
    title: "Mart Minas",
    content:
      "Predictive supply chain automation reducing inventory waste by 30% through advanced demand forecasting and real-time inventory synchronization across 50+ distribution centers.",
    accent: "var(--cyan)",
    stats: { roi: "+12M/yr", time: "45 Days", security: "Private" },
    tech: ["Forecasting", "Big Data", "Custom Nodes"],
    chartPath: "M0 80 Q 80 80, 120 40 T 240 10",
  },
  {
    tag: "Agencies",
    title: "RedPeak Digital",
    content:
      "Automated ad-strategy workflows replacing 40+ hours of manual labor with precise AI-driven market analysis and automated creative brief generation for high-scale campaigns.",
    accent: "var(--gold)",
    stats: { roi: "+80% Eff.", time: "25 Days", security: "Local" },
    tech: ["Agents", "Automation", "Strategy AI"],
    chartPath: "M0 60 Q 40 50, 80 30 T 160 5",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

  const onDragEnd = (_event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  // Responsive step size: 720px + 48px gap for desktop, (windowWidth - 3rem) + 20px gap for mobile
  const getStepSize = () => {
    if (windowWidth <= 768) {
      return windowWidth - 1.5 * 16 * 2 + 20;
    }
    return 720 + 48;
  };

  const isMobile = windowWidth <= 768;

  return (
    <section className="carousel-section" id="cases">
      {isMobile ? (
        /* MOBILE SPOTLIGHT VIEW */
        <div className="spotlight-viewport">
          <div className="spotlight-header">
            <span className="tag cyan">Success Stories</span>
            <h3 className="section-title">
              Business <br />
              Transformation
            </h3>
            <p className="section-subtitle">
              We deploy operational leverage that scales your margins through
              high-velocity AI implementation.
            </p>
          </div>

          <div className="story-bars">
            {cases.map((_, idx) => (
              <div
                key={idx}
                className={`story-bar ${idx === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <motion.div
            className="spotlight-card glass-panel"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div className="card-top">
                    <div className="client-info">
                      <span
                        className="case-category"
                        style={{ color: cases[currentIndex].accent }}
                      >
                        {cases[currentIndex].tag}
                      </span>
                      <h4 className="case-title">{cases[currentIndex].title}</h4>
                    </div>
                    <div className="industry-icon glass-panel">
                      <Layout
                        size={18}
                        style={{ color: cases[currentIndex].accent }}
                      />
                    </div>
                  </div>

                  <p className="case-context">{cases[currentIndex].content}</p>

                  <div className="tech-stack">
                    {cases[currentIndex].tech.map((t, i) => (
                      <span key={i} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="impact-grid">
                    <div className="impact-item glass-panel">
                      <span className="lbl">ROI Impact</span>
                      <h5 className="val gold-gradient">
                        {cases[currentIndex].stats.roi}
                      </h5>
                    </div>
                    <div className="impact-item glass-panel">
                      <span className="lbl">Delivery</span>
                      <h5 className="val">{cases[currentIndex].stats.time}</h5>
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="status-indicator">
                      <span className="status-dot"></span>
                      <span className="status-text">SYSTEM: LIVE</span>
                    </div>
                    <button className="brief-btn">
                      Brief <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="scroll-hint">
            <ChevronRight
              size={24}
              className="bounce-icon"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </div>
      ) : (
        /* DESKTOP BENTO VIEW */
        <div className="carousel-outer-wrapper">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="carousel-info-panel"
          >
            <div className="info-content">
              <span className="tag cyan">Success Stories</span>
              <h2 className="section-title">
                Business <br />
                Transformation
              </h2>
              <p className="section-subtitle">
                We deploy operational leverage that scales your margins through
                high-velocity AI implementation.
              </p>

              <div className="carousel-controls">
                <button className="control-btn" onClick={prevSlide}>
                  <ChevronLeft size={20} />
                </button>
                <button className="control-btn" onClick={nextSlide}>
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="slider-counter">
                <span className="current">0{currentIndex + 1}</span>
                <span className="divider">/</span>
                <span className="total">0{cases.length}</span>
              </div>
            </div>
          </motion.div>

          <div className="slider-main-container">
            <div className="slider-perspective">
              <div
                className="slider-track"
                style={{
                  transform: `translateX(-${currentIndex * getStepSize()}px)`,
                }}
              >
                {cases.map((item, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <motion.div
                      key={index}
                      className={`slide glass-panel ${
                        isActive ? "active" : "peek"
                      }`}
                      initial={false}
                      animate={{
                        rotateY: isActive ? 0 : index > currentIndex ? 35 : -35,
                        z: isActive ? 0 : -300,
                        x: isActive ? 0 : index > currentIndex ? 50 : -50,
                        scale: isActive ? 1 : 0.8,
                        opacity: isActive ? 1 : 0.2,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1], // Custom Power Out curve
                      }}
                      style={{ transformOrigin: "center center" }}
                    >
                      <div className="slide-bento-layout">
                        <div className="bento-header">
                          <div className="logo-placeholder glass-panel">
                            <Layout size={18} className="logo-icon" />
                            <span>[ CLIENT_LOGO ]</span>
                          </div>
                          <span
                            className="case-tag"
                            style={{ color: item.accent }}
                          >
                            {item.tag}
                          </span>
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
                                <span key={i} className="tech-chip">
                                  <Cpu size={12} /> {t}
                                </span>
                              ))}
                              <span className="tech-chip status">
                                <Activity size={12} /> SYSTEM: LIVE
                              </span>
                            </div>
                          </div>

                          <div className="action-row">
                            <a href="#" className="case-link">
                              View Case Study <ArrowRight size={16} />
                            </a>
                            <svg className="result-chart" viewBox="0 0 200 100">
                              <path
                                d={item.chartPath}
                                fill="none"
                                stroke={item.accent}
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
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
      )}
    </section>
  );
};

export default Carousel;
