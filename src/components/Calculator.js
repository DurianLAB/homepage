import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = ({ cloudCost, savings, workload, updateWorkload }) => {
  const [inputWorkload, setInputWorkload] = useState(workload);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputWorkload(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleCalculate = () => {
    updateWorkload(inputWorkload);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Cloud Cost Savings Calculator</h2>
          <p className="calculator-subtitle">
            Calculate your potential savings by migrating to Akash Network
          </p>

          <div className="calculator-container">
            <div className="calculator-inputs">
              <h3>Your Current Workload</h3>
              <div className="input-group">
                <label htmlFor="cpu">CPU Cores</label>
                <input
                  type="number"
                  id="cpu"
                  name="cpu"
                  value={inputWorkload.cpu}
                  onChange={handleInputChange}
                  min="1"
                  step="0.5"
                />
              </div>
              <div className="input-group">
                <label htmlFor="memory">Memory (GB)</label>
                <input
                  type="number"
                  id="memory"
                  name="memory"
                  value={inputWorkload.memory}
                  onChange={handleInputChange}
                  min="1"
                  step="0.5"
                />
              </div>
              <div className="input-group">
                <label htmlFor="storage">Storage (GB)</label>
                <input
                  type="number"
                  id="storage"
                  name="storage"
                  value={inputWorkload.storage}
                  onChange={handleInputChange}
                  min="10"
                  step="10"
                />
              </div>
              <button className="btn-primary" onClick={handleCalculate}>
                Calculate Savings
              </button>
            </div>

            <div className="calculator-results">
              <h3>Cost Comparison</h3>
              <div className="result-item">
                <span className="result-label">Current Cloud Cost:</span>
                <span className="result-value">${cloudCost}/month</span>
              </div>
              {savings && (
                <>
                  <div className="result-item">
                    <span className="result-label">AWS Cost:</span>
                    <span className="result-value">${savings.awsCost}/month</span>
                  </div>
                  <div className="result-item akash-cost">
                    <span className="result-label">Akash Cost:</span>
                    <span className="result-value">${savings.akashCost}/month</span>
                  </div>
                  <div className="result-item savings">
                    <span className="result-label">Monthly Savings:</span>
                    <span className="result-value">${savings.savings} ({savings.savingsPercent}%)</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;