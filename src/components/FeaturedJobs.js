import React, { useState, useEffect } from "react";
import jobs from "../data/jobs.json"; // ← JSON import as required
// // Sample jobs data since we can't import JSON in this environment
// const jobs = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     company: "TechCorp",
//     location: "San Francisco, CA",
//     type: "Full-Time",
//     salary: "$120k - $180k",
//     postedTime: "2 days ago",
//     featured: true,
//     companyLogo: "https://ui-avatars.com/api/?name=TechCorp&background=3b82f6&color=ffffff&size=56&rounded=true",
//     skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
//   },
//   {
//     id: 2,
//     title: "UX/UI Designer",
//     company: "DesignStudio",
//     location: "New York, NY",
//     type: "Full-Time",
//     salary: "$90k - $130k",
//     postedTime: "1 day ago",
//     featured: false,
//     companyLogo: "https://ui-avatars.com/api/?name=DesignStudio&background=10b981&color=ffffff&size=56&rounded=true",
//     skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
//   },
//   {
//     id: 3,
//     title: "Backend Engineer",
//     company: "DataFlow",
//     location: "Remote",
//     type: "Contract",
//     salary: "$80k - $120k",
//     postedTime: "3 days ago",
//     featured: true,
//     companyLogo: "https://ui-avatars.com/api/?name=DataFlow&background=f59e0b&color=ffffff&size=56&rounded=true",
//     skills: ["Node.js", "Python", "AWS", "MongoDB"]
//   },
//   {
//     id: 4,
//     title: "Product Manager",
//     company: "InnovateLab",
//     location: "Austin, TX",
//     type: "Part-Time",
//     salary: "$60k - $90k",
//     postedTime: "1 week ago",
//     featured: false,
//     companyLogo: "https://ui-avatars.com/api/?name=InnovateLab&background=8b5cf6&color=ffffff&size=56&rounded=true",
//     skills: ["Strategy", "Analytics", "Agile", "Leadership"]
//   }
// ];

const FeaturedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const toggleSaveJob = (jobId, jobTitle) => {
    setSavedJobs(prev => {
      const newSaved = new Set(prev);
      const isCurrentlySaved = newSaved.has(jobId);
      
      if (isCurrentlySaved) {
        newSaved.delete(jobId);
        showNotification(`Removed "${jobTitle}" from saved jobs`, 'removed');
      } else {
        newSaved.add(jobId);
        showNotification(`Saved "${jobTitle}" to your favorites!`, 'saved');
      }
      return newSaved;
    });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
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
      left: 16px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      z-index: 10;
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
    
    /* ENHANCED: Heart icon brought to the VERY front with maximum z-index */
    .save-button {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(15px);
      border: 2px solid #e5e7eb;
      cursor: pointer;
      padding: 12px;
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: #9ca3af;
      flex-shrink: 0;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 9999;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      transform: translateZ(0);
      isolation: isolate;
    }
    
    .save-button:hover {
      background: rgba(255, 242, 242, 0.98);
      border-color: #fecaca;
      color: #ef4444;
      transform: scale(1.15) translateZ(0);
      box-shadow: 0 12px 32px rgba(239, 68, 68, 0.4);
      z-index: 10000;
    }
    
    .save-button.saved {
      color: #ef4444;
      background: rgba(255, 242, 242, 0.98);
      border-color: #fecaca;
      animation: heartPulse 0.6s ease-in-out;
      z-index: 10000;
    }

    @keyframes heartPulse {
      0% { transform: scale(1) translateZ(0); }
      30% { transform: scale(1.3) translateZ(0); }
      60% { transform: scale(1.1) translateZ(0); }
      100% { transform: scale(1) translateZ(0); }
    }
    
    .save-icon {
      width: 24px;
      height: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .save-button:hover .save-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(239, 68, 68, 0.3));
    }

    .save-button.saved .save-icon {
      filter: drop-shadow(0 4px 8px rgba(239, 68, 68, 0.4));
    }

    /* Ensure heart stays on top of everything */
    .save-button::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
      border-radius: 20px;
    }

    /* NOTIFICATION SYSTEM */
    .notification {
      position: fixed;
      top: 100px;
      right: 24px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      padding: 16px 24px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      border: 1px solid #e5e7eb;
      z-index: 1000;
      transform: translateX(400px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 320px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .notification.show {
      transform: translateX(0);
    }

    .notification.saved {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.05);
    }

    .notification.removed {
      border-color: #ef4444;
      background: rgba(239, 68, 68, 0.05);
    }

    .notification-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .notification.saved .notification-icon {
      color: #10b981;
    }

    .notification.removed .notification-icon {
      color: #ef4444;
    }

    .notification-message {
      font-size: 14px;
      font-weight: 500;
      color: #1f2937;
      line-height: 1.4;
    }
    
    .job-content {
      margin-top: 16px;
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
      
      .featured-badge {
        top: 12px;
        left: 12px;
        padding: 3px 10px;
        font-size: 11px;
      }
      
      .save-button {
        top: 6px;
        right: 6px;
        padding: 10px;
        z-index: 9999;
      }
      
      .save-icon {
        width: 22px;
        height: 22px;
      }
      
      .job-content {
        margin-top: 20px;
      }

      .notification {
        right: 16px;
        top: 80px;
        max-width: 280px;
        padding: 12px 16px;
      }

      .notification-message {
        font-size: 13px;
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
      
      .featured-badge {
        top: 10px;
        left: 10px;
        padding: 2px 8px;
        font-size: 10px;
      }
      
      .save-button {
        top: 6px;
        right: 6px;
        padding: 8px;
        z-index: 9999;
      }
      
      .save-icon {
        width: 20px;
        height: 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <section className="featured-jobs-section">
        {/* NOTIFICATION SYSTEM */}
        <div className={`notification ${notification.show ? 'show' : ''} ${notification.type}`}>
          <div className="notification-icon">
            {notification.type === 'saved' ? (
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            )}
          </div>
          <div className="notification-message">{notification.message}</div>
        </div>

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
                
                {/* HEART ICON IN THE FRONT */}
                <button 
                  className={`save-button ${savedJobs.has(job.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaveJob(job.id, job.title)}
                  aria-label={savedJobs.has(job.id) ? 'Remove from saved jobs' : 'Save job'}
                >
                  <svg className="save-icon" fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className="job-content">
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