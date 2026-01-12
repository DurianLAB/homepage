import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="section-container">
        <h2>Our Pricing</h2>
        <p className="pricing-subtitle">Transparent, value-based solutions tailored to your business needs</p>

        <div className="pricing-grid">
           <div className="pricing-category vdi">
             <h3>Virtual Desktop Infrastructure (VDI)</h3>
            <p className="category-description">Secure, scalable virtual desktops for your remote workforce</p>

             <div className="pricing-tiers">
               <motion.div
                 className="pricing-tier"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
               >
                 <h4>Standard</h4>
                 <div className="price">$25-$45<span>/user/month</span></div>
               </motion.div>

               <motion.div
                 className="pricing-tier featured"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
               >
                 <h4>Advanced</h4>
                 <div className="price">$45-$85<span>/user/month</span></div>
               </motion.div>

               <motion.div
                 className="pricing-tier"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
               >
                 <h4>Enterprise</h4>
                 <div className="price">$120+<span>/user/month</span></div>
               </motion.div>
             </div>
          </div>

          <div className="pricing-category">
            <h3>Managed Service Provider (MSP)</h3>
            <p className="category-description">Complete IT management and support for your business</p>

             <div className="pricing-tiers">
               <motion.div
                 className="pricing-tier"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
               >
                 <h4>Bronze</h4>
                 <div className="price">$100-150<span>/user/month</span></div>
               </motion.div>

               <motion.div
                 className="pricing-tier featured"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
               >
                 <h4>Silver</h4>
                 <div className="price">$150-200<span>/user/month</span></div>
               </motion.div>

               <motion.div
                 className="pricing-tier"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
               >
                 <h4>Gold</h4>
                 <div className="price">$200-250<span>/user/month</span></div>
               </motion.div>
             </div>
          </div>

          <div className="pricing-category">
            <h3>CI/CD Services</h3>
            <p className="category-description">DevOps automation and continuous delivery solutions</p>

             <div className="pricing-options">
               <motion.div
                 className="pricing-option"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.7 }}
               >
                 <h4>Project-Based</h4>
                 <div className="price">$5,000-50,000+<span>/project</span></div>
               </motion.div>

               <motion.div
                 className="pricing-option"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
               >
                 <h4>Hourly Consulting</h4>
                 <div className="price">$85-250<span>/hour</span></div>
               </motion.div>

               <motion.div
                 className="pricing-option featured"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
               >
                 <h4>Managed Services</h4>
                 <div className="price">$2,000-10,000+<span>/month</span></div>
               </motion.div>
             </div>
          </div>
        </div>

        <div className="pricing-cta">
          <h3>Ready to Get Started?</h3>
          <p>Contact us for a customized quote tailored to your specific needs</p>
          <a href="#contact" className="btn-primary">Get Your Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;