import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="#hero">
            <img src="assets/logo.png" alt="DurianLAB Logo" className="main-logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://jenkins.durianlab.tech" target="_blank" rel="noopener noreferrer">Test Lab</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
