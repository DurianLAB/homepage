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

        <div className="upcoming-services" style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--background-mid)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
          <div className="upcoming-grid">
            <div>
              <span style={{ color: 'var(--accent-blue)', fontFamily: 'monospace', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Coming Soon</span>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '1rem', fontWeight: 'bold' }}>
                Advanced Business Packages
              </h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                We're launching comprehensive service packages tailored for modern businesses. Stay tuned for AI-powered analytics, automated DevOps, and enterprise-grade security solutions.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{ backgroundColor: 'var(--primary-green)', color: 'var(--white)', padding: '0.8rem 2rem', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}>Notify Me</button>
                <button style={{ backgroundColor: 'transparent', color: 'var(--accent-blue)', padding: '0.8rem 2rem', border: '2px solid var(--accent-blue)', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>Learn More</button>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--background-dark)', padding: '1.5rem', borderRadius: '10px', border: '2px solid var(--dark-green)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#ff5f57', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#28ca42', borderRadius: '50%' }}></div>
              </div>
               <pre className="terminal-output" style={{ color: 'var(--accent-blue)', fontFamily: 'monospace', fontSize: '0.9rem', margin: 0 }}>
{`$ npm install business-package@latest
Installing business-package...
[INFO] AI Analytics Module: Installed
[INFO] DevOps Automation: Configured
[INFO] Security Suite: Activated
[INFO] Package ready for deployment!
`}
               </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;