import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-icons">
          <div className="icon-item">
            <i className="fas fa-clock fa-3x"></i>
            <p><strong>30-MINUTE QUOTE</strong><br />Fast, accurate quote turnaround</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-handshake fa-3x"></i>
            <p><strong>PARTNER WITH US</strong><br />Join us as vendor</p>
          </div>

          <div className="icon-item">
            <i className="fas fa-calendar fa-3x"></i>
             <p><strong>BOOK APPOINTMENT</strong><br /> For project discussion </p>
          </div>
        </div>

        <div className="version-badge">
          <p className="docker-version-badge">Docker Version: {process.env.REACT_APP_VERSION}</p>
        </div>
        <div className="footer-details">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">SOLUTIONS</a></li>
              <li><a href="#projects">RESOURCES</a></li>
              <li><a href="#pricing">CONTRACTS</a></li>
              <li><a href="#contact">ABOUT</a></li>
               <li><a href="/assets/Licenses.pdf" target="_blank" rel="noopener noreferrer">LICENSES</a></li>
               <li><a href="https://status.durianlab.tech/status/services" target="_blank" rel="noopener noreferrer">STATUS</a></li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <address>
              SUITE 100<br />
              POMONA, CALIFORNIA 20190
            </address>
            <p>admin@durianlab.tech</p>
            <p>PHONE: 909 632 5296</p>
          </div>
        </div>
        <div className="social-links">
          <h3>Social Links</h3>
          <a href="https://github.com/DurianLAB" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i> GitHub</a>
        </div>
        <div className="powered-by">
          <p>Powered by DurianLAB</p>
        </div>
        <div className="copyright">
          <p>&copy; 2026 durianlab.tech All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
