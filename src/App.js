import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cloudCost, setCloudCost] = useState(0.00);

  useEffect(() => {
    // Cloud cost simulation logic
    const cloudServices = [
      { name: 'Compute', cost: 1200.50, min: 1000, max: 1500 },
      { name: 'Storage', cost: 300.25, min: 250, max: 400 },
      { name: 'Network', cost: 150.70, min: 100, max: 200 },
      { name: 'Database', cost: 750.00, min: 600, max: 900 },
      { name: 'Monitoring', cost: 80.10, min: 70, max: 120 }
    ];

    const updateSimulatedCloudCosts = () => {
      let totalCost = 0;
      cloudServices.forEach(service => {
        const fluctuation = (Math.random() - 0.5) * 20;
        service.cost = Math.max(service.min, Math.min(service.max, service.cost + fluctuation));
        service.cost = parseFloat(service.cost.toFixed(2));
        totalCost += service.cost;
      });
      setCloudCost(totalCost.toFixed(2));
    };

    updateSimulatedCloudCosts();
    const interval = setInterval(updateSimulatedCloudCosts, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    event.target.reset();
  };

  return (
    <div className="App">
      <Header />
      <div id="running-banner" className="running-banner">
        <div className="banner-content">
          <span>Current Cloud Cost: $<span id="cloud-cost">{cloudCost}</span></span>
        </div>
      </div>
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Projects />
        <Contact onSubmit={handleContactSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;