import React, { useState, useEffect, useRef } from "react";

const companies = [
  { 
    name: "Google", 
    logo: "https://logo.clearbit.com/google.com",
    jobs: "2,547",
    industry: "Technology"
  },
  { 
    name: "Amazon", 
    logo: "https://logo.clearbit.com/amazon.com",
    jobs: "1,832",
    industry: "E-commerce"
  },
  { 
    name: "Meta", 
    logo: "https://logo.clearbit.com/meta.com",
    jobs: "945",
    industry: "Social Media"
  },
  { 
    name: "Netflix", 
    logo: "https://logo.clearbit.com/netflix.com",
    jobs: "421",
    industry: "Entertainment"
  },
  { 
    name: "Spotify", 
    logo: "https://logo.clearbit.com/spotify.com",
    jobs: "318",
    industry: "Music Streaming"
  },
  { 
    name: "Microsoft", 
    logo: "https://logo.clearbit.com/microsoft.com",
    jobs: "1,654",
    industry: "Technology"
  },
  { 
    name: "Apple", 
    logo: "https://logo.clearbit.com/apple.com",
    jobs: "1,234",
    industry: "Technology"
  },
  { 
    name: "Tesla", 
    logo: "https://logo.clearbit.com/tesla.com",
    jobs: "892",
    industry: "Automotive"
  }
];

const TopCompanies = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    .top-companies-section {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 100px 0;
      position: relative;
      overflow: hidden;
    }
    
    .top-companies-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }
    
    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 24px;
      line-height: 1.1;
    }
    
    .section-subtitle {
      font-size: 1.25rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto 40px;
      line-height: 1.6;
    }
    
    .section-stats {
      display: flex;
      justify-content: center;
      gap: 50px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: #3b82f6;
      display: block;
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .companies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
      margin-bottom: 60px;
    }
    
    .company-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 32px 24px;
      text-align: center;
      border: 2px solid #f1f5f9;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .company-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .company-card:hover::before {
      opacity: 1;
    }
    
    .company-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      border-color: #3b82f6;
    }
    
    .company-logo-container {
      width: 80px;
      height: 80px;
      margin: 0 auto 24px;
      background: #f8fafc;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      padding: 16px;
      position: relative;
      z-index: 1;
    }
    
    .company-card:hover .company-logo-container {
      background: #ffffff;
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
    }
    
    .company-logo {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: all 0.3s ease;
    }
    
    .company-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
      transition: color 0.3s ease;
      position: relative;
      z-index: 1;
    }
    
    .company-card:hover .company-name {
      color: #3b82f6;
    }
    
    .company-industry {
      font-size: 0.875rem;
      color: #64748b;
      margin-bottom: 16px;
      font-weight: 500;
      position: relative;
      z-index: 1;
    }
    
    .company-jobs {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #f1f5f9;
      color: #475569;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
    }
    
    .company-card:hover .company-jobs {
      background: #dbeafe;
      color: #1d4ed8;
    }
    
    .view-all-section {
      text-align: center;
    }
    
    .view-all-button {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      border: none;
      padding: 16px 32px;
      border-radius: 50px;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    }
    
    .view-all-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
    }
    
    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      overflow: hidden;
    }
    
    .floating-icon {
      position: absolute;
      color: rgba(59, 130, 246, 0.1);
      animation: float 6s ease-in-out infinite;
    }
    
    .floating-icon:nth-child(1) {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    
    .floating-icon:nth-child(2) {
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }
    
    .floating-icon:nth-child(3) {
      bottom: 30%;
      left: 20%;
      animation-delay: 4s;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      33% {
        transform: translateY(-20px) rotate(5deg);
      }
      66% {
        transform: translateY(10px) rotate(-5deg);
      }
    }
    
    .animate-in {
      animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }
    .delay-6 { animation-delay: 0.6s; }
    .delay-7 { animation-delay: 0.7s; }
    .delay-8 { animation-delay: 0.8s; }
    
    @media (max-width: 768px) {
      .top-companies-section {
        padding: 80px 0;
      }
      
      .companies-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
      }
      
      .section-stats {
        gap: 30px;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
      
      .company-card {
        padding: 24px 20px;
      }
      
      .company-logo-container {
        width: 60px;
        height: 60px;
      }
      
      .container {
        padding: 0 16px;
      }
    }
    
    @media (max-width: 480px) {
      .companies-grid {
        grid-template-columns: 1fr;
      }
      
      .section-stats {
        flex-direction: column;
        gap: 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <section ref={sectionRef} className="top-companies-section">
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <svg className="floating-icon" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <svg className="floating-icon" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <svg className="floating-icon" width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Top Companies Hiring</h2>
            <p className="section-subtitle">
              Leading brands are looking for talents like you. Join thousands of professionals who found their dream job.
            </p>
            
            {/* Statistics */}
            <div className="section-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Partner Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Active Jobs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Placement Rate</span>
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div 
                key={index}
                className={`company-card ${isVisible ? 'animate-in' : ''} delay-${index + 1}`}
                onMouseEnter={() => setHoveredCompany(index)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <div className="company-logo-container">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="company-logo"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=3b82f6&color=ffffff&size=80`;
                    }}
                  />
                </div>
                
                <h3 className="company-name">{company.name}</h3>
                <p className="company-industry">{company.industry}</p>
                
                <div className="company-jobs">
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-10v10a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                  </svg>
                  <span>{company.jobs} open jobs</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="view-all-section">
            <button className="view-all-button">
              <span>Explore All Companies</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCompanies;