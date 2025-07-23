import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    .footer-section {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      position: relative;
      overflow: hidden;
    }
    
    .footer-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 24px 0;
      position: relative;
      z-index: 1;
    }
    
    .footer-main {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
      gap: 60px;
      margin-bottom: 60px;
    }
    
    .footer-brand {
      max-width: 300px;
    }
    
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .brand-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 18px;
    }
    
    .brand-name {
      font-size: 1.75rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
    }
    
    .brand-description {
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 24px;
      font-size: 0.875rem;
    }
    
    .brand-stats {
      display: flex;
      gap: 24px;
      margin-bottom: 24px;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      font-size: 1.25rem;
      font-weight: 700;
      color: #3b82f6;
      display: block;
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 4px;
    }
    
    .footer-column {
    }
    
    .column-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 24px;
      position: relative;
    }
    
    .column-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 1px;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: 12px;
    }
    
    .footer-link {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    
    .footer-link:hover {
      color: #3b82f6;
      transform: translateX(4px);
    }
    
    .newsletter-section {
    }
    
    .newsletter-form {
      margin-bottom: 24px;
    }
    
    .email-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #334155;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
      font-size: 0.875rem;
      margin-bottom: 12px;
      transition: all 0.3s ease;
    }
    
    .email-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .email-input::placeholder {
      color: #64748b;
    }
    
    .subscribe-button {
      width: 100%;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .subscribe-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    
    .subscribe-button.subscribed {
      background: linear-gradient(135deg, #10b981, #059669);
    }
    
    .social-links {
      display: flex;
      gap: 16px;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #334155;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #94a3b8;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
      color: #3b82f6;
      transform: translateY(-2px);
    }
    
    .footer-bottom {
      border-top: 1px solid #334155;
      padding: 32px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .copyright {
      color: #64748b;
      font-size: 0.875rem;
    }
    
    .footer-legal {
      display: flex;
      gap: 24px;
    }
    
    .legal-link {
      color: #64748b;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }
    
    .legal-link:hover {
      color: #94a3b8;
    }
    
    .contact-info {
      margin-bottom: 24px;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      color: #94a3b8;
      font-size: 0.875rem;
    }
    
    .contact-icon {
      width: 16px;
      height: 16px;
      color: #3b82f6;
    }
    
    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
      }
      
      .footer-brand {
        grid-column: 1 / -1;
        max-width: none;
      }
      
      .newsletter-section {
        grid-column: 1 / -1;
      }
    }
    
    @media (max-width: 768px) {
      .footer-container {
        padding: 60px 16px 0;
      }
      
      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
      
      .brand-stats {
        justify-content: space-between;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
      
      .footer-legal {
        order: -1;
      }
    }
    
    @media (max-width: 480px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      
      .brand-stats {
        flex-direction: column;
        gap: 16px;
      }
      
      .social-links {
        justify-content: center;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">J</div>
                <h3 className="brand-name">JobHunt</h3>
              </div>
              <p className="brand-description">
                Your trusted job search partner. Connecting talented professionals with their dream opportunities through innovative technology and personalized matching.
              </p>
              <div className="brand-stats">
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Jobs Posted</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25K+</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">Job Seekers</span>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@jobhunt.com</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Job Seekers */}
            <div className="footer-column">
              <h4 className="column-title">For Job Seekers</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Find Jobs</a></li>
                <li><a href="#" className="footer-link">Browse Companies</a></li>
                <li><a href="#" className="footer-link">Salary Guide</a></li>
                <li><a href="#" className="footer-link">Career Advice</a></li>
                <li><a href="#" className="footer-link">Resume Builder</a></li>
                <li><a href="#" className="footer-link">Interview Tips</a></li>
              </ul>
            </div>

            {/* Employers */}
            <div className="footer-column">
              <h4 className="column-title">For Employers</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Post a Job</a></li>
                <li><a href="#" className="footer-link">Browse Resumes</a></li>
                <li><a href="#" className="footer-link">Recruiting Solutions</a></li>
                <li><a href="#" className="footer-link">Pricing Plans</a></li>
                <li><a href="#" className="footer-link">Employer Branding</a></li>
                <li><a href="#" className="footer-link">Hiring Resources</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h4 className="column-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Press</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Help Center</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="newsletter-section">
              <h4 className="column-title">Stay Updated</h4>
              <p className="brand-description">
                Get the latest jobs and career insights delivered to your inbox.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={`subscribe-button ${subscribed ? 'subscribed' : ''}`}>
                  {subscribed ? (
                    <>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
              
              {/* Social Links */}
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.563-3.239-1.459-.791-.895-1.239-2.086-1.239-3.302 0-1.297.563-2.448 1.459-3.239.895-.791 2.086-1.239 3.302-1.239 1.297 0 2.448.563 3.239 1.459.791.895 1.239 2.086 1.239 3.302 0 1.297-.563 2.448-1.459 3.239-.895.791-2.086 1.239-3.302 1.239z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              © {new Date().getFullYear()} JobHunt. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
              <a href="#" className="legal-link">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;