import React, { useState, useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up and get started in seconds with our streamlined registration process.",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    details: "Quick setup, email verification, profile creation"
  },
  {
    id: 2,
    title: "Upload CV/Resume",
    description: "Add your professional details to stand out from the competition.",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    details: "PDF upload, skills parsing, automatic formatting"
  },
  {
    id: 3,
    title: "Find Suitable Job",
    description: "Browse and search jobs that perfectly match your skills and preferences.",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    details: "AI matching, filters, personalized recommendations"
  },
  {
    id: 4,
    title: "Apply for Job",
    description: "One-click apply and track your application status in real-time.",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    details: "Instant apply, status tracking, interview scheduling"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    .how-it-works-section {
      font-family: 'Inter', sans-serif;
      background: #ffffff;
      padding: 100px 0;
      position: relative;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }
    
    .section-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 24px;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    
    .section-subtitle {
      font-size: 1.25rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto 50px;
      line-height: 1.6;
      font-weight: 400;
    }
    
    .stats-row {
      display: flex;
      justify-content: center;
      gap: 60px;
      margin-bottom: 20px;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: #3b82f6;
      display: block;
      line-height: 1;
      margin-bottom: 8px;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .steps-container {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
    }
    
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      position: relative;
    }
    
    .step-card {
      background: #ffffff;
      border-radius: 24px;
      padding: 40px 32px;
      text-align: center;
      position: relative;
      border: 2px solid #f1f5f9;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      margin-top: 20px;
    }
    
    .step-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.02), rgba(139, 92, 246, 0.02));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .step-card:hover::before,
    .step-card.active::before {
      opacity: 1;
    }
    
    .step-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
    }
    
    .step-card.active {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
      border-color: #3b82f6;
    }
    
    .step-number {
      position: absolute;
      top: -16px;
      left: 32px;
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.875rem;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      z-index: 10;
    }
    
    .step-icon-container {
      width: 80px;
      height: 80px;
      margin: 0 auto 32px;
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      position: relative;
      color: #64748b;
    }
    
    .step-card:hover .step-icon-container,
    .step-card.active .step-icon-container {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      transform: scale(1.05);
    }
    
    .step-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 16px;
      transition: color 0.3s ease;
    }
    
    .step-card:hover .step-title,
    .step-card.active .step-title {
      color: #3b82f6;
    }
    
    .step-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 1rem;
    }
    
    .step-details {
      font-size: 0.875rem;
      color: #94a3b8;
      font-style: italic;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
    }
    
    .step-card:hover .step-details,
    .step-card.active .step-details {
      opacity: 1;
      transform: translateY(0);
    }
    
    .cta-section {
      text-align: center;
      margin-top: 80px;
    }
    
    .cta-button {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      border: none;
      padding: 18px 40px;
      border-radius: 50px;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
      text-decoration: none;
    }
    
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
    }
    
    .progress-indicators {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 60px;
    }
    
    .progress-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #e2e8f0;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .progress-dot.active {
      background: #3b82f6;
      transform: scale(1.2);
    }
    
    .progress-dot:hover {
      background: #94a3b8;
    }
    
    @media (max-width: 768px) {
      .how-it-works-section {
        padding: 80px 0;
      }
      
      .section-title {
        font-size: 2.5rem;
      }
      
      .steps-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .stats-row {
        gap: 30px;
        flex-wrap: wrap;
      }
      
      .stat-number {
        font-size: 2rem;
      }
      
      .step-card {
        padding: 32px 24px;
      }
      
      .step-title {
        font-size: 1.25rem;
      }
      
      .container {
        padding: 0 16px;
      }
    }
    
    @media (max-width: 480px) {
      .section-title {
        font-size: 2rem;
      }
      
      .stats-row {
        gap: 20px;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
      
      .step-icon-container {
        width: 60px;
        height: 60px;
      }
      
      .step-card {
        padding: 24px 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <section className="how-it-works-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Follow these 4 simple steps to land your dream job and transform your career journey.
            </p>
            
            {/* Statistics */}
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">2min</span>
                <span className="stat-label">Average signup time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24hr</span>
                <span className="stat-label">Average response time</span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="steps-container">
            <div className="steps-grid">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`step-card ${activeStep === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="step-number">{step.id}</div>
                  
                  <div className="step-icon-container">
                    {step.icon}
                  </div>
                  
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-details">{step.details}</p>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="progress-indicators">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`progress-dot ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                ></div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <button className="cta-button">
              <span>Get Started Now</span>
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

export default HowItWorks;