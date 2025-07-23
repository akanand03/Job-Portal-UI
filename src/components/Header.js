import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
    }

    .job-header {
      background: #ffffff;
      transition: all 0.3s ease;
      border-bottom: 1px solid #f1f5f9;
    }

    .job-header.scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border-bottom: 1px solid #e2e8f0;
    }

    .header-container {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
    }

    .left-section {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      border-radius: 12px;
      color: white;
      font-weight: 700;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .logo-text {
      color: #1e293b;
      font-size: 24px;
      font-weight: 700;
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .nav-link {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      position: relative;
    }

    .nav-link:hover {
      color: #3b82f6;
    }

    .desktop-buttons {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .btn {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 14px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 10px 16px;
      transition: all 0.2s ease;
    }

    .btn-login {
      color: #64748b;
      background: transparent;
    }

    .btn-login:hover {
      color: #3b82f6;
      background: #f8fafc;
    }

    .btn-signup {
      color: #3b82f6;
      background: #ffffff;
      border: 1px solid #e2e8f0;
    }

    .btn-signup:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      transform: translateY(-1px);
    }

    .btn-post {
      color: #ffffff;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      padding: 12px 24px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .btn-post:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }

    @media (max-width: 768px) {
      .desktop-nav,
      .desktop-buttons {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <header className={`job-header fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="left-section">
            {/* Logo */}
            <a href="#" className="logo">
              <div className="logo-icon">J</div>
              <span className="logo-text">JobHunt</span>
            </a>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <a href="#" className="nav-link">Find Jobs</a>
              <a href="#" className="nav-link">For Companies</a>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="desktop-buttons">
            <button className="btn btn-login">Log in</button>
            <button className="btn btn-signup">Sign up</button>
            <button className="btn btn-post">Post a Job</button>
          </div>
        </div>
      </header>

      {/* Spacer below fixed header */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default Header;
