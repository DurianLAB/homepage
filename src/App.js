import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Hooks
import { useSavingsCalculator } from './hooks/useSavingsCalculator';

function App() {
  const { cloudCost } = useSavingsCalculator();

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