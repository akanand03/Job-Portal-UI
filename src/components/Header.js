import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Embedded Styles
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    
    .header-container {
      font-family: 'Inter', sans-serif;
    }
    
    .logo-gradient {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4338ca 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: gradientShift 3s ease infinite;
    }
    
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .logo-underline {
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .logo-container:hover .logo-underline {
      transform: scaleX(1);
    }
    
    .logo-glow {
      position: absolute;
      inset: -8px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
      border-radius: 12px;
      filter: blur(20px);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .logo-container:hover .logo-glow {
      opacity: 1;
    }
    
    .nav-link {
      position: relative;
      padding: 8px 4px;
      font-weight: 600;
      font-size: 18px;
      color: #374151;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-link:hover {
      color: #3b82f6;
      transform: translateY(-1px);
    }
    
    .nav-link::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 1px;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-link:hover::before {
      width: 100%;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      inset: -8px;
      background: rgba(59, 130, 246, 0.05);
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
    
    .nav-link:hover::after {
      opacity: 1;
    }
    
    .btn-login {
      color: #6b7280;
      font-weight: 600;
      font-size: 18px;
      padding: 12px 16px;
      border-radius: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn-login:hover {
      color: #3b82f6;
      background: rgba(59, 130, 246, 0.05);
      transform: scale(1.05);
    }
    
    .btn-signup {
      position: relative;
      border: 2px solid #3b82f6;
      color: #3b82f6;
      padding: 12px 32px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 18px;
      background: transparent;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn-signup::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }
    
    .btn-signup:hover::before {
      transform: scaleX(1);
    }
    
    .btn-signup:hover {
      color: white;
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }
    
    .btn-post-job {
      position: relative;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 12px 32px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 18px;
      border: none;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .btn-post-job::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #8b5cf6, #4338ca);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .btn-post-job:hover::before {
      opacity: 1;
    }
    
    .btn-post-job:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
    }
    
    .btn-post-job svg {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn-post-job:hover svg {
      transform: translateX(4px) scale(1.1);
    }
    
    .btn-post-job::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transform: skewX(-12deg);
      transition: left 0.6s ease;
    }
    
    .btn-post-job:hover::after {
      left: 100%;
    }
    
    .mobile-menu-btn {
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .mobile-menu-btn:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    
    .mobile-menu-btn span {
      width: 28px;
      height: 2px;
      background: #374151;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      margin: 3px 0;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translateY(8px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px);
    }
    
    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      z-index: 40;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 320px;
      background: white;
      box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
      z-index: 50;
      transform: translateX(100%);
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .mobile-menu.open {
      transform: translateX(0);
    }
    
    .mobile-menu-content {
      padding: 32px;
      padding-top: 96px;
    }
    
    .mobile-logo {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 32px;
    }
    
    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
    }
    
    .mobile-nav a {
      font-size: 20px;
      font-weight: 600;
      color: #374151;
      text-decoration: none;
      padding-bottom: 16px;
      border-bottom: 1px solid #f3f4f6;
      transition: all 0.3s ease;
    }
    
    .mobile-nav a:hover {
      color: #3b82f6;
      border-bottom-color: #bfdbfe;
    }
    
    .mobile-buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .mobile-btn-login {
      color: #6b7280;
      font-weight: 600;
      font-size: 18px;
      padding: 12px 16px;
      text-align: left;
      background: transparent;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .mobile-btn-login:hover {
      color: #3b82f6;
      background: rgba(59, 130, 246, 0.05);
    }
    
    .mobile-btn-signup {
      border: 2px solid #3b82f6;
      color: #3b82f6;
      padding: 16px 32px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 18px;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .mobile-btn-signup:hover {
      background: rgba(59, 130, 246, 0.05);
    }
    
    .mobile-btn-post {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 16px 32px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 18px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .mobile-btn-post:hover {
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    }
    
    .header-scrolled {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .header-normal {
      background: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    @media (max-width: 1024px) {
      .desktop-nav { display: none; }
      .desktop-buttons { display: none; }
      .mobile-menu-btn { display: flex; }
    }
    
    @media (min-width: 1025px) {
      .mobile-menu-btn { display: none; }
      .mobile-overlay { display: none; }
      .mobile-menu { display: none; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <header 
        className={`header-container fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'header-scrolled' : 'header-normal'
        }`}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px' }}>
          
          {/* Enhanced Logo */}
          <div className="logo-container" style={{ position: 'relative', cursor: 'pointer' }}>
            <div className="logo-gradient" style={{ fontSize: '32px', fontWeight: '900' }}>
              JobHunt
            </div>
            <div className="logo-underline" style={{ position: 'absolute', bottom: '-4px', left: '0', width: '100%' }}></div>
            <div className="logo-glow"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '40px' }}>
            <a href="#" className="nav-link">Find Jobs</a>
            <a href="#" className="nav-link">For Companies</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="desktop-buttons" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>
            <button className="btn-post-job">
              Post a Job
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-logo">JobHunt</div>
          
          <nav className="mobile-nav">
            <a href="#" onClick={toggleMobileMenu}>Find Jobs</a>
            <a href="#" onClick={toggleMobileMenu}>For Companies</a>
          </nav>

          <div className="mobile-buttons">
            <button className="mobile-btn-login" onClick={toggleMobileMenu}>Log in</button>
            <button className="mobile-btn-signup" onClick={toggleMobileMenu}>Sign up</button>
            <button className="mobile-btn-post" onClick={toggleMobileMenu}>Post a Job</button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '96px' }}></div>
    </>
  );
};

export default Header;