import React, { useState, useEffect } from "react";
import { Search, MapPin, Building, Briefcase, TrendingUp, Users, Star, ArrowRight, CheckCircle, Award, Globe } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    company: ''
  });
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { number: "150K+", label: "Active Jobs" },
    { number: "25K+", label: "Companies" },
    { number: "1M+", label: "Professionals" },
    { number: "95%", label: "Success Rate" }
  ];

  // Subtle metric rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log('Search triggered:', searchData);
  };

  const suggestedKeywords = ["Software Engineer", "Product Manager", "Data Analyst", "UX Designer", "Marketing Director"];

  const trustedCompanies = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Tesla"
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .hero-section {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          animation: gridShift 20s linear infinite;
        }

        @keyframes gridShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #64748b;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          animation: slideInDown 0.8s ease-out;
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #1e293b;
          margin-bottom: 24px;
          animation: slideInUp 0.8s ease-out 0.2s both;
          letter-spacing: -0.025em;
        }

        .title-highlight {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 48px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          animation: slideInUp 0.8s ease-out 0.4s both;
          font-weight: 400;
        }

        .search-container {
          max-width: 900px;
          margin: 0 auto 48px;
          animation: slideInUp 0.8s ease-out 0.6s both;
        }

        .search-wrapper {
          background: #ffffff;
          border-radius: 16px;
          padding: 8px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.08),
            0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr auto;
          gap: 8px;
          align-items: center;
        }

        .search-wrapper.focused {
          transform: translateY(-4px);
          box-shadow: 
            0 32px 60px rgba(59, 130, 246, 0.12),
            0 8px 24px rgba(0, 0, 0, 0.08);
          border-color: #3b82f6;
        }

        .search-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .search-label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding-left: 16px;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 500;
          color: #1e293b;
          background: #f8fafc;
          transition: all 0.2s ease;
          outline: none;
          border: 1px solid transparent;
        }

        .search-input:focus {
          background: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-input::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 20px;
          height: 20px;
        }

        .search-button {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 160px;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        .search-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
        }

        .search-button:active {
          transform: translateY(0);
        }

        .suggestions-container {
          animation: slideInUp 0.8s ease-out 0.8s both;
          margin-bottom: 64px;
        }

        .suggestions-label {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .suggestions-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .suggestion-tag {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #3b82f6;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .suggestion-tag:hover {
          background: #3b82f6;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .trust-section {
          margin-bottom: 64px;
          animation: slideInUp 0.8s ease-out 1s both;
        }

        .trust-label {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .trust-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 32px;
          opacity: 0.6;
        }

        .trust-logo {
          font-size: 18px;
          font-weight: 600;
          color: #475569;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        .trust-logo:hover {
          opacity: 1;
          transform: translateY(-2px);
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
          animation: slideInUp 0.8s ease-out 1.2s both;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: #3b82f6;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          display: block;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-highlight {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        @media (max-width: 1024px) {
          .search-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          
          .search-button {
            grid-column: 1 / -1;
          }

          .trust-logos {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 0 60px;
            min-height: 75vh;
          }

          .hero-container {
            padding: 0 20px;
          }

          .search-wrapper {
            grid-template-columns: 1fr;
            padding: 16px;
            gap: 12px;
          }

          .search-field {
            width: 100%;
          }

          .search-button {
            width: 100%;
            grid-column: 1;
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .trust-logos {
            gap: 16px;
          }

          .trust-logo {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
            margin-bottom: 32px;
          }

          .suggestions-list {
            gap: 8px;
          }

          .suggestion-tag {
            padding: 8px 16px;
            font-size: 13px;
          }

          .stats-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
      
      <section className="hero-section">
        <div className="grid-overlay"></div>
        
        <div className="hero-container">
          {/* Professional Trust Badge */}
          <div className="trust-badge">
            <CheckCircle size={16} />
            <span>Trusted by Fortune 500 companies worldwide</span>
          </div>

          {/* Professional Title */}
          <h1 className="hero-title">
            Find your <span className="title-highlight">ideal career</span> opportunity
          </h1>
          
          <p className="hero-subtitle">
            Connect with top employers and discover opportunities that match your expertise. 
            Join over <span className="metric-highlight">{metrics[currentMetric].number}</span> professionals 
            who've advanced their careers through our platform.
          </p>

          {/* Professional Search Interface */}
          <div className="search-container">
            <div 
              className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}
            >
              {/* Job Title Field */}
              <div className="search-field">
                <div className="search-label">Position</div>
                <div className="search-input-wrapper">
                  <Briefcase className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Job title or keywords"
                    className="search-input"
                    value={searchData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
              </div>

              {/* Location Field */}
              <div className="search-field">
                <div className="search-label">Location</div>
                <div className="search-input-wrapper">
                  <MapPin className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="City or remote"
                    className="search-input"
                    value={searchData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="search-field">
                <div className="search-label">Company</div>
                <div className="search-input-wrapper">
                  <Building className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="search-input"
                    value={searchData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
              </div>

              {/* Professional Search Button */}
              <button className="search-button" onClick={handleSearch}>
                <Search size={20} />
                <span>Search Jobs</span>
              </button>
            </div>
          </div>

          {/* Professional Suggestions */}
          <div className="suggestions-container">
            <div className="suggestions-label">
              <TrendingUp size={16} />
              Popular job categories:
            </div>
            <div className="suggestions-list">
              {suggestedKeywords.map((keyword, index) => (
                <button
                  key={keyword}
                  className="suggestion-tag"
                  onClick={() => handleInputChange('jobTitle', keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-section">
            <div className="trust-label">Trusted by leading companies</div>
            <div className="trust-logos">
              {trustedCompanies.map((company, index) => (
                <div key={company} className="trust-logo">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Stats */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-icon">
                <Briefcase size={24} />
              </div>
              <span className="stat-number">150K+</span>
              <span className="stat-label">Active Positions</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Building size={24} />
              </div>
              <span className="stat-number">25K+</span>
              <span className="stat-label">Partner Companies</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <span className="stat-number">1M+</span>
              <span className="stat-label">Professionals</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={24} />
              </div>
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;