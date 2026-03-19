import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ROICalculator.css';

const STEPS = [
  {
    id: 'scale',
    tag: 'Step 1: Capacity',
    question: 'How many people are on your team?',
    context: 'Most teams lose 40% of their potential to tasks that AI could handle in seconds.',
  },
  {
    id: 'resource',
    tag: 'Step 2: Valuation',
    question: 'What is the average hourly cost?',
    context: 'Include benefits and overhead to find the true price of manual bottlenecks.',
  },
  {
    id: 'waste',
    tag: 'Step 3: Inefficiency',
    question: 'How many hours are lost to manual work?',
    context: 'Enter the average weekly hours per employee spent on repetitive, data-heavy tasks.',
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
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="roi-output-minimal">
                  <h3 className="gold-gradient">${yearlySavings.toLocaleString()}</h3>
                  <p className="roi-disclaimer">
                    *Based on 80% automation efficiency delivered by Bright Curios.
                  </p>
                </div>
              )}
            </div>

            <div className="roi-actions">
              {currentStep > 0 && (
                <button className="roi-btn-secondary" onClick={prevStep}>
                  ← Back
                </button>
              )}
              {currentStep < 3 ? (
                <button className="roi-btn-primary" onClick={nextStep}>
                  {currentStep === 2 ? 'See Results →' : 'Continue Audit →'}
                </button>
              ) : (
                <button className="roi-btn-primary" onClick={resetAudit}>
                  Adjust Parameters
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ROICalculator;
