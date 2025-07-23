import React, { useState, useEffect } from "react";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    company: ''
  });
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search triggered:', searchData);
    // Add your search logic here
  };

  const suggestedKeywords = ["Designer", "Developer", "Tester", "Manager", "Analyst"];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    .hero-section {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      position: relative;
      overflow: hidden;
      min-height: 60vh;
      display: flex;
      align-items: center;
      padding: 80px 0;
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
      text-align: center;
    }
    
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      color: #1e293b;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: #64748b;
      margin-bottom: 48px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }
    
    .search-container {
      max-width: 900px;
      margin: 0 auto 40px;
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }
    
    .search-wrapper {
      background: #ffffff;
      border-radius: 16px;
      padding: 8px;
      box-shadow: 
        0 10px 40px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .search-wrapper.focused {
      box-shadow: 
        0 20px 60px rgba(59, 130, 246, 0.15),
        0 1px 3px rgba(0, 0, 0, 0.05);
      border-color: #3b82f6;
    }
    
    .search-field {
      flex: 1;
      min-width: 200px;
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
    }
    
    .search-input:focus {
      background: #ffffff;
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
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 140px;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .search-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }
    
    .search-button:active {
      transform: translateY(0);
    }
    
    .suggestions-container {
      animation: fadeInUp 0.8s ease-out 0.6s both;
    }
    
    .suggestions-label {
      color: #64748b;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 12px;
      display: inline-block;
    }
    
    .suggestions-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .suggestion-tag {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      color: #3b82f6;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    
    .suggestion-tag:hover {
      background: #3b82f6;
      color: #ffffff;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .stats-section {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      animation: fadeInUp 0.8s ease-out 0.8s both;
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
      font-size: 14px;
      color: #64748b;
      font-weight: 500;
      margin-top: 4px;
    }
    
    @media (max-width: 768px) {
      .hero-section {
        padding: 60px 0;
        min-height: 50vh;
      }
      
      .search-wrapper {
        flex-direction: column;
        padding: 16px;
      }
      
      .search-field {
        min-width: 100%;
      }
      
      .search-button {
        width: 100%;
      }
      
      .stats-section {
        gap: 20px;
        margin-top: 40px;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-container {
        padding: 0 16px;
      }
      
      .hero-subtitle {
        font-size: 1.125rem;
        margin-bottom: 32px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <section className="hero-section">
        <div className="hero-container">
          {/* Hero Title */}
          <h1 className="hero-title">
            Find your dream job
          </h1>
          <p className="hero-subtitle">
            Discover opportunities that match your skills and passion. Join thousands of professionals who found their perfect career match.
          </p>

          {/* Enhanced Search Bar */}
          <div className="search-container">
            <div 
              className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            >
              {/* Job Title Field */}
              <div className="search-field">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-10v10a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="search-input"
                  value={searchData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
              </div>

              {/* Location Field */}
              <div className="search-field">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  className="search-input"
                  value={searchData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>

              {/* Company Field */}
              <div className="search-field">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <input
                  type="text"
                  placeholder="Company"
                  className="search-input"
                  value={searchData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              {/* Search Button */}
              <button className="search-button" onClick={handleSearch}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Enhanced Suggested Keywords */}
          <div className="suggestions-container">
            <div className="suggestions-label">Popular searches:</div>
            <div className="suggestions-list">
              {suggestedKeywords.map((keyword) => (
                <button
                  key={keyword}
                  className="suggestion-tag"
                  onClick={() => handleInputChange('jobTitle', keyword)}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Active Jobs</span>
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
        </div>
      </section>
    </>
  );
};

export default Hero;