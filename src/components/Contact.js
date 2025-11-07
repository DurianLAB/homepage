import React from 'react';

const Contact = ({ onSubmit }) => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>Connect With Us</h2>
        <form id="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;