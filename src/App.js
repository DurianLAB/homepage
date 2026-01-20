import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Calculator from './components/Calculator';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Hooks
import { useSavingsCalculator } from './hooks/useSavingsCalculator';

function App() {
  const { cloudCost, savings, workload, updateWorkload, isSimulationActive, toggleSimulation, refreshCosts } = useSavingsCalculator();

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for your message! We will get back to you shortly.');
    event.target.reset();
  };

  return (
    <div className="App">
      <Header />
       <div id="running-banner" className="running-banner">
         <div className="banner-content">
           <span>
             Current Cloud Cost: $<span id="cloud-cost">{cloudCost}</span>
             {isSimulationActive && <span className="sim-status"> • LIVE</span>}
           </span>
           <div className="simulation-controls">
             <button
               onClick={toggleSimulation}
               className={`sim-btn ${isSimulationActive ? 'active' : ''}`}
               title={isSimulationActive ? 'Pause cost simulation' : 'Start cost simulation'}
             >
               {isSimulationActive ? '⏸️' : '▶️'}
             </button>
             <button
               onClick={refreshCosts}
               className="sim-btn"
               title="Refresh costs manually"
             >
               🔄
             </button>
           </div>
         </div>
       </div>
      <main>
        <Hero />
        <Services />
        <Calculator
          cloudCost={cloudCost}
          savings={savings}
          workload={workload}
          updateWorkload={updateWorkload}
        />
        <Pricing />
        <Projects />
        <Contact onSubmit={handleContactSubmit} />
       </main>
       <ScrollToTop />
       <Footer />
     </div>
  );
}

export default App;