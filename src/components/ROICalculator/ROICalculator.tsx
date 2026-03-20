import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RefreshCcw, Calendar } from 'lucide-react';
import './ROICalculator.css';

const STEPS = [
  {
    id: 'scale',
    tag: 'Step 1: Scale',
    question: 'How many people are on your team?',
    context: 'Most teams lose 40% of their potential to tasks that AI could handle in seconds.',
  },
  {
    id: 'resource',
    tag: 'Step 2: Resource',
    question: 'What is the average hourly cost?',
    context: 'Include benefits and overhead to find the true price of manual bottlenecks.',
  },
  {
    id: 'waste',
    tag: 'Step 3: Waste',
    question: 'How many hours are lost to manual work?',
    context: 'Every hour lost to manual data entry is an hour stolen from strategic growth and high-value work.',
  },
  {
    id: 'reveal',
    tag: 'Results',
    question: 'Your Annual Recovery Potential',
    context: 'This represents the capital currently lost to operational inefficiency that can be recovered through custom AI workflows.',
  }
];

const ROICalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [manualHours, setManualHours] = useState(10);

  const monthlySavings = employees * manualHours * hourlyRate * 4;
  const yearlySavings = monthlySavings * 12;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));
  const resetAudit = () => setCurrentStep(0);

  return (
    <section className="roi-section container">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="roi-card glass-panel"
      >
        <div className="roi-progress-steps">
          {[0, 1, 2, 3].map((step) => (
            <div 
              key={step} 
              className={`progress-dot ${step <= currentStep ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="roi-step-content"
          >
            <div className="roi-header">
              <span className="tag">{STEPS[currentStep].tag}</span>
              <h2>{STEPS[currentStep].question}</h2>
              <p className="step-context">{STEPS[currentStep].context}</p>
            </div>

            <div className="roi-main">
              {currentStep === 0 && (
                <div className="input-group">
                  <label>Number of Employees: <span>{employees}</span></label>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))} 
                    style={{ backgroundSize: `${(employees - 1) * 100 / 99}% 100%` }}
                  />
                </div>
              )}

              {currentStep === 1 && (
                <div className="input-group">
                  <label>Average Hourly Rate ($): <span>{hourlyRate}</span></label>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    value={hourlyRate} 
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))} 
                    style={{ backgroundSize: `${(hourlyRate - 20) * 100 / 180}% 100%` }}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="input-group">
                  <label>Manual Hours/Week/Emp: <span>{manualHours}</span></label>
                  <input 
                    type="range" 
                    min="1" 
                    max="40" 
                    value={manualHours} 
                    onChange={(e) => setManualHours(parseInt(e.target.value))} 
                    style={{ backgroundSize: `${(manualHours - 1) * 100 / 39}% 100%` }}
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="roi-output-minimal">
                  <motion.h3 
                    className="gold-gradient"
                    animate={{ 
                      scale: [1, 1.02, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    ${yearlySavings.toLocaleString()}
                  </motion.h3>
                  <p className="roi-disclaimer">
                    *Based on 80% automation efficiency delivered by Bright Curios.
                  </p>
                </div>
              )}
            </div>

            <div className="roi-actions">
              {currentStep > 0 && currentStep < 3 && (
                <button className="roi-btn-secondary" onClick={prevStep}>
                  <ChevronLeft size={18} /> Back
                </button>
              )}
              {currentStep < 3 ? (
                <button 
                  className={`roi-btn-primary ${currentStep < 3 ? 'cyan' : ''}`} 
                  onClick={nextStep}
                >
                  {currentStep === 2 ? 'See Results' : 'Next'} <ChevronRight size={18} />
                </button>
              ) : (
                <div className="roi-final-actions">
                  <a href="#strategy" className="roi-btn-primary" style={{ textDecoration: 'none' }}>
                    <Calendar size={18} /> Book Strategy Call
                  </a>
                  <button className="roi-btn-secondary" onClick={resetAudit}>
                    <RefreshCcw size={18} /> Adjust Parameters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ROICalculator;
