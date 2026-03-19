import React, { useState } from 'react';
import './ROICalculator.css';

const ROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [manualHours, setManualHours] = useState(10);

  const monthlySavings = employees * manualHours * hourlyRate * 4;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="roi-section container">
      <div className="roi-card glass-panel">
        <div className="roi-header">
          <span className="tag">Financial Terminal</span>
          <h2>Calculate Your AI Leverage</h2>
        </div>

        <div className="roi-grid">
          <div className="roi-inputs">
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
          </div>

          <div className="roi-output glass-panel">
            <div className="output-item">
              <p>Monthly Potential Recovery</p>
              <h3 className="gold-gradient">${monthlySavings.toLocaleString()}</h3>
            </div>
            <div className="output-divider"></div>
            <div className="output-item">
              <p>Yearly Operational Leverage</p>
              <h3 className="gold-gradient">${yearlySavings.toLocaleString()}</h3>
            </div>
            <p className="roi-disclaimer">
              *Based on 80% automation efficiency delivered by Bright Curios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
