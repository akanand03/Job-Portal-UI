import React, { useState } from "react";
import jobs from "../data/jobs.json"; // ← JSON import as required

const FeaturedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(new Set());

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(jobId)) {
        newSaved.delete(jobId);
      } else {
        newSaved.add(jobId);
      }
      return newSaved;
    });
  };

  const getJobTypeIcon = (type) => {
    const iconStyles = {
      width: '12px',
      height: '12px'
    };
    
    switch(type) {
      case 'Full-Time':
        return (
          <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-10v10a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
          </svg>
        );
      case 'Part-Time':
        return (
          <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Contract':
        return (
          <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    .featured-jobs-section {
      font-family: 'Inter', sans-serif;
      padding: 80px 16px;
      background: #f8fafc;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1280px;
      margin: 0 auto;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 64px;
    }
    
    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #1f2937 0%, #2563eb 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
    }
    
    .section-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 640px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    .jobs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }
    
    .job-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      border: 1px solid #e5e7eb;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .job-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #2563eb, #7c3aed);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    .job-card:hover::before {
      transform: scaleX(1);
    }
    
    .job-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: #93c5fd;
    }
    
    .job-card.featured {
      border-color: #2563eb;
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
    }
    
    .job-card.featured::before {
      transform: scaleX(1);
    }
    
    .featured-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .job-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 16px;
    }
    
    .job-info {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      flex: 1;
      min-width: 0;
    }
    
    .company-logo {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      padding: 8px;
      background: #ffffff;
      object-fit: contain;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }
    
    .job-card:hover .company-logo {
      transform: scale(1.05);
    }
    
    .job-details {
      flex: 1;
      min-width: 0;
    }
    
    .job-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 4px;
      line-height: 1.3;
      transition: color 0.3s ease;
    }
    
    .job-card:hover .job-title {
      color: #2563eb;
    }
    
    .company-name {
      color: #2563eb;
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 8px;
    }
    
    .job-location {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #6b7280;
      font-size: 0.875rem;
    }
    
    .location-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
    
    .save-button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.2s ease;
      color: #9ca3af;
      flex-shrink: 0;
    }
    
    .save-button:hover {
      background: #fef2f2;
      color: #ef4444;
    }
    
    .save-button.saved {
      color: #ef4444;
      background: #fef2f2;
    }
    
    .save-icon {
      width: 20px;
      height: 20px;
    }
    
    .job-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .job-type-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 1px solid;
    }
    
    .job-type-badge.full-time {
      background: #d1fae5;
      color: #065f46;
      border-color: #a7f3d0;
    }
    
    .job-type-badge.part-time {
      background: #fef3c7;
      color: #92400e;
      border-color: #fde68a;
    }
    
    .job-type-badge.contract {
      background: #e0e7ff;
      color: #3730a3;
      border-color: #c7d2fe;
    }
    
    .posted-time {
      color: #9ca3af;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .job-salary {
      font-size: 1.5rem;
      font-weight: 700;
      color: #059669;
      margin-bottom: 16px;
    }
    
    .skills-section {
      margin-bottom: 24px;
    }
    
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-tag {
      background: #f1f5f9;
      color: #475569;
      padding: 6px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    .skill-tag:hover {
      background: #dbeafe;
      color: #1d4ed8;
    }
    
    .job-actions {
      display: flex;
      gap: 12px;
    }
    
    .action-button {
      flex: 1;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      outline: none;
    }
    
    .apply-button {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
    }
    
    .apply-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
    }
    
    .apply-button:focus {
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
    }
    
    .view-button {
      background: #ffffff;
      color: #6b7280;
      border: 2px solid #e5e7eb;
    }
    
    .view-button:hover {
      background: #dbeafe;
      border-color: #93c5fd;
      color: #1d4ed8;
    }
    
    .view-button:focus {
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    
    .view-all-section {
      text-align: center;
    }
    
    .view-all-button {
      background: #ffffff;
      color: #2563eb;
      border: 2px solid #2563eb;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      outline: none;
    }
    
    .view-all-button:hover {
      background: #2563eb;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    }
    
    .view-all-button:focus {
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    }
    
    @media (max-width: 768px) {
      .featured-jobs-section {
        padding: 60px 16px;
      }
      
      .jobs-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .job-card {
        padding: 20px;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .section-subtitle {
        font-size: 1.125rem;
      }
      
      .job-actions {
        flex-direction: column;
      }
      
      .job-header {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .save-button {
        align-self: flex-end;
        margin-top: -40px;
      }
    }
    
    @media (max-width: 480px) {
      .job-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
      
      .skills-list {
        gap: 6px;
      }
      
      .skill-tag {
        padding: 4px 8px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <section className="featured-jobs-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Featured Jobs</h2>
            <p className="section-subtitle">
              Discover hand-picked opportunities from top companies looking for talented professionals like you
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className={`job-card ${job.featured ? 'featured' : ''}`}
              >
                {job.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                
                {/* Job Header */}
                <div className="job-header">
                  <div className="job-info">
                    <img 
                      src={job.companyLogo} 
                      alt={`${job.company} logo`} 
                      className="company-logo"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=3b82f6&color=ffffff&size=56&rounded=true`;
                      }}
                    />
                    <div className="job-details">
                      <h3 className="job-title">{job.title}</h3>
                      <p className="company-name">{job.company}</p>
                      <div className="job-location">
                        <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className={`save-button ${savedJobs.has(job.id) ? 'saved' : ''}`}
                    onClick={() => toggleSaveJob(job.id)}
                    aria-label={savedJobs.has(job.id) ? 'Remove from saved jobs' : 'Save job'}
                  >
                    <svg className="save-icon" fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Job Meta */}
                <div className="job-meta">
                  <div className={`job-type-badge ${job.type.toLowerCase().replace('-', '-')}`}>
                    {getJobTypeIcon(job.type)}
                    <span>{job.type}</span>
                  </div>
                  <span className="posted-time">{job.postedTime}</span>
                </div>

                {/* Salary */}
                <div className="job-salary">{job.salary}</div>

                {/* Skills */}
                <div className="skills-section">
                  <div className="skills-list">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="job-actions">
                  <button className="action-button apply-button">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Apply Now</span>
                  </button>
                  <button className="action-button view-button">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Jobs Button */}
          <div className="view-all-section">
            <button className="view-all-button">
              <span>View All Jobs</span>
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

export default FeaturedJobs;