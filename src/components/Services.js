import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="section-container">
        <h2>Our Expertise</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-cloud fa-4x"></i>
            <h3>Cloud Solutions</h3>
            <p>Seamless migration and management of your infrastructure on leading cloud platforms.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-shield-alt fa-4x"></i>
            <h3>Cybersecurity</h3>
            <p>Robust protection against modern threats with proactive strategies and incident response.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-bar fa-4x"></i>
            <h3>Data Analytics</h3>
            <p>Unlock insights from your data to drive smarter business decisions and growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;