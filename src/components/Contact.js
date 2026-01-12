import React, { useState } from 'react';

const Contact = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    await onSubmit(event);
    setTimeout(() => setLoading(false), 2000); // Simulate sending time
  };

  return (
    <section id="contact">
      <div className="section-container">
        <h2>Connect With Us</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Sending your message...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;