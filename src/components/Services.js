import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="section-container">
        <h2>DevOps & Infrastructure Services</h2>
        <div className="services-grid">
<div className="service-card">
            <i className="fas fa-dharmachakra fa-4x"></i>
            <h3>Kubernetes Management</h3>
            <p>Kubernetes cluster deployment and management (EKS, GKE, AKS, K3s). Automated scaling, monitoring, and disaster recovery. Optimized for cost-efficiency with performance tuning and security hardening.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-lock fa-4x"></i>
            <h3>Secrets & Security Management</h3>
            <p>HashiCorp Vault integration for secure secret management, automated credential rotation, and access controls. End-to-end encryption with security audit trails and compliance automation.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-code fa-4x"></i>
            <h3>Infrastructure as Code</h3>
            <p>Jenkins for CI/CD pipelines, Terraform and Ansible for multi-cloud deployment (AWS, GCP, Azure, Hetzner). Automated infrastructure provisioning, configuration management, and immutable infrastructure with version-controlled state management and drift detection.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-ship fa-4x"></i>
            <h3>GitOps & Deployment</h3>
            <p>ArgoCD for continuous delivery, Git-based deployment workflows, and automated sync between Git and production clusters. Blue-green deployments with progressive canary releases.</p>
          </div>
        </div>

        <div className="audit-services" style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--background-mid)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
            Infrastructure Audit Levels
          </h3>
           <div className="audit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
             <div className="audit-card" style={{ backgroundColor: 'var(--background-dark)', padding: '2rem', borderRadius: '10px', border: '2px solid var(--dark-green)', textAlign: 'center', maxWidth: '300px', margin: '0 auto', minHeight: '350px' }}>
              <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.1rem' }}>Basic</h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Security Scan</p>
              <ul style={{ color: 'var(--text-light)', fontSize: '0.9rem', textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li>✓ Jenkins pipeline analysis</li>
                <li>✓ Trivy security scanning</li>
                <li>✓ Vault secrets audit</li>
                <li>✓ Basic Terraform & Ansible review</li>
                <li>✓ PDF audit report</li>
              </ul>
              <div style={{ color: '#28ca42', fontWeight: 'bold', marginBottom: '1rem' }}>Starting $500</div>
            </div>
             <div className="audit-card" style={{ backgroundColor: 'var(--background-dark)', padding: '2rem', borderRadius: '10px', border: '2px solid var(--primary-green)', textAlign: 'center', maxWidth: '300px', margin: '0 auto', minHeight: '350px' }}>
              <h4 style={{ color: 'var(--primary-green)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.1rem' }}>Comprehensive</h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Full Infrastructure Review</p>
              <ul style={{ color: 'var(--text-light)', fontSize: '0.9rem', textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li>✓ Full Jenkins CI/CD assessment</li>
                <li>✓ Comprehensive Vault security audit</li>
                <li>✓ ArgoCD GitOps workflow review</li>
                <li>✓ Terraform IaC validation</li>
                <li>✓ Locust performance testing</li>
                <li>✓ SonarQube code analysis</li>
                <li>✓ Deployment strategy analysis</li>
              </ul>
              <div style={{ color: '#ffbd2e', fontWeight: 'bold', marginBottom: '1rem' }}>Starting $2,000</div>
            </div>
             <div className="audit-card" style={{ backgroundColor: 'var(--background-dark)', padding: '2rem', borderRadius: '10px', border: '2px solid var(--accent-blue)', textAlign: 'center', maxWidth: '300px', margin: '0 auto', minHeight: '350px' }}>
              <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '1.1rem' }}>Enterprise</h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Complete DevOps Assessment</p>
              <ul style={{ color: 'var(--text-light)', fontSize: '0.9rem', textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li>✓ All Comprehensive features</li>
                <li>✓ Multi-cluster ArgoCD setup</li>
                <li>✓ High-availability Vault architecture</li>
                <li>✓ Multi-cloud Terraform & Ansible modules</li>
                <li>✓ Disaster recovery testing</li>
                <li>✓ 30-day monitoring & alerting</li>
                <li>✓ Custom Grafana dashboards</li>
                <li>✓ Executive reporting portal</li>
              </ul>
              <div style={{ color: '#ff5f57', fontWeight: 'bold', marginBottom: '1rem' }}>Starting $5,000</div>
            </div>
          </div>
          
          <div className="tools-showcase" style={{ backgroundColor: 'var(--background-dark)', padding: '2rem', borderRadius: '10px', border: '2px solid var(--primary-green)', marginTop: '2rem' }}>
            <h4 style={{ color: 'var(--primary-green)', marginBottom: '1.5rem', textAlign: 'center' }}>Our Tech Stack</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fab fa-jenkins fa-3x" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Jenkins</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>CI/CD Pipeline</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-dharmachakra fa-3x" style={{ color: '#326CE5', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Kubernetes</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Container Orchestration</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-ship fa-3x" style={{ color: '#FF6B35', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>ArgoCD</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>GitOps Delivery</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-key fa-3x" style={{ color: '#5C8A3B', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Vault</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Secrets Management</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-cube" style={{ color: '#623CE4', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Terraform</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Multi-Cloud IaC</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-cogs" style={{ color: '#EE0000', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Ansible</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Configuration Management</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-shield-alt fa-3x" style={{ color: '#1E90FF', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Trivy</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Security Scanning</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-project-diagram fa-3x" style={{ color: '#F46A00', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>SonarQube</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Code Quality</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fab fa-aws fa-3x" style={{ color: '#FF9900', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>AWS</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>EKS & Services</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fas fa-cloud fa-3x" style={{ color: '#4285F4', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>GCP</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>GKE & Services</p>
              </div>
              <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                <i className="fab fa-microsoft fa-3x" style={{ color: '#0078D4', marginBottom: '1rem' }}></i>
                <h5 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Azure</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>AKS & Services</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h4 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Need Deployment Assistance?</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>We don't just audit - we help deploy and manage your entire DevOps stack for production-ready infrastructure.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
              <div style={{ backgroundColor: 'var(--background-mid)', padding: '1.5rem', borderRadius: '10px', border: '2px solid var(--dark-green)' }}>
                <h5 style={{ color: 'var(--primary-green)', marginBottom: '1rem', fontSize: '1.2rem' }}>🏗️ Multi-Cloud Setup</h5>
                <ul style={{ color: 'var(--text-light)', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
                  <li>✓ K3s clusters (AWS, GCP, Azure, Hetzner)</li>
                  <li>✓ Cross-cloud networking and security</li>
                  <li>✓ Multi-region backup strategies</li>
                  <li>✓ Cloud-agnostic monitoring setup</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'var(--background-mid)', padding: '1.5rem', borderRadius: '10px', border: '2px solid var(--primary-green)' }}>
                <h5 style={{ color: 'var(--primary-green)', marginBottom: '1rem', fontSize: '1.2rem' }}>🚀 CI/CD Implementation</h5>
                <ul style={{ color: 'var(--text-light)', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
                  <li>✓ Jenkins pipeline setup and configuration</li>
                  <li>✓ ArgoCD GitOps workflow implementation</li>
                  <li>✓ Automated testing integration</li>
                  <li>✓ Blue-green deployment strategies</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'var(--background-mid)', padding: '1.5rem', borderRadius: '10px', border: '2px solid var(--accent-blue)' }}>
                <h5 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>🔒 Security Hardening</h5>
                <ul style={{ color: 'var(--text-light)', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
                  <li>✓ Vault secrets management deployment</li>
                  <li>✓ Automated security scanning setup</li>
                  <li>✓ Access control and RBAC configuration</li>
                  <li>✓ Compliance framework implementation</li>
                </ul>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary">Schedule Deployment</button>
              <button style={{ backgroundColor: 'transparent', color: 'var(--accent-blue)', padding: '0.8rem 2rem', border: '2px solid var(--accent-blue)', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>Request Audit First</button>
              <button style={{ backgroundColor: 'var(--dark-green)', color: 'var(--white)', padding: '0.8rem 2rem', border: '2px solid var(--dark-green)', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>Get Consulting</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;