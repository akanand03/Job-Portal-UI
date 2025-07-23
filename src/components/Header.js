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
    
    .job-header {
      font-family: 'Inter', sans-serif;
      background: #ffffff;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
      position: relative;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    
    .logo:hover {
      transform: translateY(-1px);
    }
    
    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .logo-text {
      color: #1e293b;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.5px;
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
      padding: 8px 0;
      position: relative;
      transition: all 0.2s ease;
    }
    
    .nav-link:hover {
      color: #3b82f6;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #3b82f6;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
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
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      outline: none;
    }
    
    .btn:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .btn-login {
      color: #64748b;
      background: transparent;
      padding: 10px 16px;
    }
    
    .btn-login:hover {
      color: #3b82f6;
      background: #f8fafc;
    }
    
    .btn-signup {
      color: #3b82f6;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 10px 20px;
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
      position: relative;
      overflow: hidden;
    }
    
    .btn-post::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }
    
    .btn-post:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }
    
    .btn-post:hover::before {
      left: 100%;
    }
    
    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      background: transparent;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s ease;
    }
    
    .mobile-menu-btn:hover {
      background: #f8fafc;
    }
    
    .hamburger-line {
      width: 20px;
      height: 2px;
      background: #64748b;
      margin: 2px 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 1px;
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.5);
      backdrop-filter: blur(4px);
      z-index: 40;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .mobile-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 320px;
      background: #ffffff;
      z-index: 50;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: -10px 0 50px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-menu.open {
      transform: translateX(0);
    }
    
    .mobile-content {
      padding: 80px 24px 24px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .mobile-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 40px;
    }
    
    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
    }
    
    .mobile-nav-link {
      color: #1e293b;
      text-decoration: none;
      font-weight: 500;
      font-size: 18px;
      padding: 12px 0;
      border-bottom: 1px solid #f1f5f9;
      transition: all 0.2s ease;
    }
    
    .mobile-nav-link:hover {
      color: #3b82f6;
    }
    
    .mobile-buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: auto;
    }
    
    .mobile-btn {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      padding: 16px 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
    }
    
    .mobile-btn-login {
      color: #64748b;
      background: #f8fafc;
    }
    
    .mobile-btn-signup {
      color: #3b82f6;
      background: #ffffff;
      border: 1px solid #e2e8f0;
    }
    
    .mobile-btn-post {
      color: #ffffff;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      .desktop-nav,
      .desktop-buttons {
        display: none;
      }
      
      .mobile-menu-btn {
        display: flex;
      }
      
      .header-container {
        padding: 12px 20px;
      }
      
      .logo-text {
        font-size: 20px;
      }
    }
    
    @media (max-width: 480px) {
      .mobile-menu {
        width: 100%;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <header className={`job-header fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">J</div>
            <span className="logo-text">JobHunt</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#" className="nav-link">Find Jobs</a>
            <a href="#" className="nav-link">For Companies</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="desktop-buttons">
            <button className="btn btn-login">Log in</button>
            <button className="btn btn-signup">Sign up</button>
            <button className="btn btn-post">Post a Job</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-content">
          {/* Mobile Logo */}
          <div className="mobile-logo">
            <div className="logo-icon">J</div>
            <span className="logo-text">JobHunt</span>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="mobile-nav">
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              Find Jobs
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              For Companies
            </a>
          </nav>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <button className="mobile-btn mobile-btn-login" onClick={toggleMobileMenu}>
              Log in
            </button>
            <button className="mobile-btn mobile-btn-signup" onClick={toggleMobileMenu}>
              Sign up
            </button>
            <button className="mobile-btn mobile-btn-post" onClick={toggleMobileMenu}>
              Post a Job
            </button>
          </div>
        </div>
      </div>

      {/* Header Spacer */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default Header;