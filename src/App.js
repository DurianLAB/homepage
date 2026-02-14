import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import CloudPricingBanner from './components/CloudPricingBanner';
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
  const { cloudCost, savings, workload, updateWorkload } = useSavingsCalculator();

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
       <CloudPricingBanner />
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