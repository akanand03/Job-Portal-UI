import React, { useState, useEffect } from 'react';
import { ChevronDown, Bell, User, Briefcase, Building, TrendingUp, Globe, Menu, X, Bookmark } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobCategories = [
    { name: 'Technology', icon: '💻', count: '3.2k', trend: '+15%', hot: true },
    { name: 'Design & Creative', icon: '🎨', count: '1.8k', trend: '+8%' },
    { name: 'Marketing', icon: '📊', count: '2.1k', trend: '+12%' },
    { name: 'Sales', icon: '💼', count: '1.5k', trend: '+5%' },
    { name: 'Finance', icon: '💰', count: '1.2k', trend: '+7%' },
    { name: 'Remote Work', icon: '🌍', count: '4.5k', trend: '+25%', hot: true }
  ];

  const companyResources = [
    { name: 'Post Jobs', icon: <Briefcase size={16} />, desc: 'Hire top talent fast' },
    { name: 'Employer Branding', icon: <Building size={16} />, desc: 'Build your reputation' },
    { name: 'Analytics Dashboard', icon: <TrendingUp size={16} />, desc: 'Track hiring metrics' },
    { name: 'Global Recruitment', icon: <Globe size={16} />, desc: 'Worldwide talent pool' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }

        .job-header {
          background: #ffffff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid #f1f5f9;
          position: relative;
          z-index: 50;
        }

        .job-header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid #e2e8f0;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: 12px 24px 12px 8px;
          gap: 48px;
          min-height: 76px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%);
          border-radius: 14px;
          color: white;
          font-weight: 800;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
          position: relative;
          overflow: hidden;
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: translateX(-100%) rotate(45deg);
          transition: transform 0.8s ease;
        }

        .logo:hover .logo-icon::before {
          transform: translateX(100%) rotate(45deg);
        }

        .logo-text {
          color: #1e293b;
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .center-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          background: transparent;
        }

        .nav-link:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          transform: translateY(-1px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 1px;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 20px 64px rgba(0, 0, 0, 0.15);
          padding: 20px;
          min-width: 320px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }

        .dropdown.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .dropdown-header {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
          font-size: 16px;
        }

        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 12px;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: #64748b;
          background: rgba(248, 250, 252, 0.5);
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .dropdown-item:hover {
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
        }

        .dropdown-item-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .dropdown-item-name {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .dropdown-item-count {
          font-size: 12px;
          color: #94a3b8;
        }

        .dropdown-item-trend {
          font-size: 11px;
          color: #10b981;
          font-weight: 600;
        }

        .hot-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-btn {
          position: relative;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #64748b;
          height: 48px;
          width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          background: white;
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
        }

        .notification-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .btn {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 0 20px;
          transition: all 0.3s ease;
          gap: 8px;
          height: 48px;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .btn:hover::before {
          transform: translateX(100%);
        }

        .btn-login {
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .btn-login:hover {
          color: #3b82f6;
          background: white;
          border-color: #3b82f6;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15);
        }

        .btn-signup {
          color: #3b82f6;
          background: white;
          border: 1px solid #3b82f6;
        }

        .btn-signup:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        .btn-post {
          color: white;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%);
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
          position: relative;
        }

        .btn-post:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.5);
        }

        .mobile-menu-btn {
          display: none;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          cursor: pointer;
          border-radius: 12px;
          height: 48px;
          width: 48px;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: white;
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
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
          width: 350px;
          background: white;
          border-left: 1px solid #e2e8f0;
          z-index: 50;
          padding: 24px;
          transform: translateX(100%);
          transition: transform 0.4s ease;
          overflow-y: auto;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          padding: 16px;
          border-radius: 12px;
          background: #f8fafc;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(59, 130, 246, 0.05);
          color: #3b82f6;
        }

        @media (max-width: 1200px) {
          .center-section {
            gap: 32px;
          }
        }

        @media (max-width: 968px) {
          .center-section {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 12px 16px 12px 8px;
            min-height: 68px;
          }

          .center-section {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .right-section {
            gap: 12px;
          }

          .btn {
            padding: 0 16px;
            font-size: 14px;
          }
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          filter: blur(8px);
          opacity: 0.6;
          z-index: -1;
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.6; }
          to { opacity: 0.8; }
        }
      `}</style>

      <header className={`job-header fixed top-0 left-0 right-0 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo - Complete Left */}
          <a href="#" className="logo">
            <div className="logo-icon glow-effect">J</div>
            <span className="logo-text">JobHunt</span>
          </a>

          {/* Center Section */}
          <div className="center-section">
            <nav className="main-nav">
              <div 
                className="nav-item"
                onMouseEnter={() => setActiveDropdown('jobs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href="#" className="nav-link">
                  Find Jobs <ChevronDown size={16} />
                </a>
                <div className={`dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
                  <div className="dropdown-header">Popular Job Categories</div>
                  <div className="dropdown-grid">
                    {jobCategories.map((category, index) => (
                      <a key={index} href="#" className="dropdown-item">
                        {category.hot && <div className="hot-badge">HOT</div>}
                        <span style={{ fontSize: '20px' }}>{category.icon}</span>
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-name">{category.name}</span>
                          <span className="dropdown-item-count">{category.count} jobs</span>
                          <span className="dropdown-item-trend">{category.trend}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div 
                className="nav-item"
                onMouseEnter={() => setActiveDropdown('companies')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href="#" className="nav-link">
                  For Companies <ChevronDown size={16} />
                </a>
                <div className={`dropdown ${activeDropdown === 'companies' ? 'active' : ''}`}>
                  <div className="dropdown-header">Enterprise Solutions</div>
                  {companyResources.map((resource, index) => (
                    <a key={index} href="#" className="dropdown-item" style={{ gridColumn: '1 / -1', marginBottom: '8px' }}>
                      {resource.icon}
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-name">{resource.name}</span>
                        <span className="dropdown-item-count">{resource.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <a href="#" className="nav-link">Career Advice</a>
              <a href="#" className="nav-link">Salary Guide</a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <button className="icon-btn">
              <Bookmark size={18} />
            </button>

            <button className="icon-btn">
              <Bell size={18} />
              <div className="notification-badge">5</div>
            </button>

            <button className="btn btn-login">
              <User size={16} />
              Log in
            </button>
            
            <button className="btn btn-signup">Sign up</button>
            
            <button className="btn btn-post">
              <Briefcase size={16} />
              Post a Job
            </button>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <div className="logo-icon">J</div>
            <span className="logo-text">JobHunt</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="icon-btn"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav">
          <a href="#" className="mobile-nav-link">📋 Find Jobs</a>
          <a href="#" className="mobile-nav-link">🏢 For Companies</a>
          <a href="#" className="mobile-nav-link">📚 Career Advice</a>
          <a href="#" className="mobile-nav-link">💰 Salary Guide</a>
          
          <div style={{ borderTop: '1px solid #f1f5f9', margin: '20px 0', paddingTop: '20px' }}>
            <button className="btn btn-login" style={{ width: '100%', marginBottom: '12px' }}>
              <User size={16} />
              Log in
            </button>
            <button className="btn btn-signup" style={{ width: '100%', marginBottom: '12px' }}>
              Sign up
            </button>
            <button className="btn btn-post" style={{ width: '100%' }}>
              <Briefcase size={16} />
              Post a Job
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div style={{ height: '76px' }} />
    </>
  );
};

export default Header;