import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Secure Cloud Deployment</h3>
            <p>Designed and deployed a highly secure, scalable cloud environment for a financial institution.</p>
            <p className="tech-stack"><strong>Technologies:</strong> AWS, Kubernetes, Vault</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;