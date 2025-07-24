import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  MapPin,
  Star,
  Briefcase,
  Building,
  CheckCircle,
  Award,
  ArrowRight,
  Globe,
  Zap,
  Target,
  Eye,
  Heart,
  ExternalLink,
  ChevronDown,
  X,
  SlidersHorizontal
} from "lucide-react";

const companies = [
  { 
    id: 1,
    name: "Apple", 
    logo: "https://logo.clearbit.com/apple.com",
    logoFallback: "https://ui-avatars.com/api/?name=Apple&background=000000&color=ffffff&size=64",
    jobs: "1,234", 
    industry: "Technology",
    employees: "150K+",
    rating: 4.9,
    location: "Cupertino, CA",
    founded: "1976",
    featured: true,
    trending: true,
    description: "Technology company that creates innovative consumer products.",
    benefits: ["Employee Discounts", "Health & Wellness", "Stock Purchase", "Sabbatical"],
    technologies: ["Hardware", "Software", "Services", "Design"]
  },
  { 
    id: 2,
    name: "Google", 
    logo: "https://logo.clearbit.com/google.com",
    logoFallback: "https://ui-avatars.com/api/?name=Google&background=4285f4&color=ffffff&size=64",
    jobs: "2,547", 
    industry: "Technology",
    employees: "100K+",
    rating: 4.8,
    location: "Mountain View, CA",
    founded: "1998",
    featured: true,
    trending: true,
    description: "Organize the world's information and make it universally accessible.",
    benefits: ["Health Insurance", "Stock Options", "Remote Work", "Learning Budget"],
    technologies: ["AI/ML", "Cloud", "Search", "Mobile"]
  },
  { 
    id: 3,
    name: "Microsoft", 
    logo: "https://logo.clearbit.com/microsoft.com",
    logoFallback: "https://ui-avatars.com/api/?name=Microsoft&background=0078d4&color=ffffff&size=64",
    jobs: "1,654", 
    industry: "Technology",
    employees: "200K+",
    rating: 4.8,
    location: "Redmond, WA",
    founded: "1975",
    featured: true,
    trending: false,
    description: "Empowering every person and organization to achieve more.",
    benefits: ["Work-Life Balance", "Learning Budget", "Stock Plan", "Healthcare"],
    technologies: ["Cloud", "Productivity", "Gaming", "Enterprise"]
  },
  { 
    id: 4,
    name: "Amazon", 
    logo: "https://logo.clearbit.com/amazon.com",
    logoFallback: "https://ui-avatars.com/api/?name=Amazon&background=ff9900&color=000000&size=64",
    jobs: "1,832", 
    industry: "E-commerce",
    employees: "75K+",
    rating: 4.6,
    location: "Seattle, WA",
    founded: "1994",
    featured: true,
    trending: false,
    description: "Earth's most customer-centric company and cloud leader.",
    benefits: ["Career Growth", "Stock Options", "Global Opportunities", "Innovation Time"],
    technologies: ["AWS", "E-commerce", "Logistics", "AI"]
  },
  { 
    id: 5,
    name: "Spotify", 
    logo: "https://logo.clearbit.com/spotify.com",
    logoFallback: "https://ui-avatars.com/api/?name=Spotify&background=1db954&color=ffffff&size=64",
    jobs: "318", 
    industry: "Music Streaming",
    employees: "15K+",
    rating: 4.5,
    location: "Stockholm, Sweden",
    founded: "2006",
    featured: true,
    trending: true,
    description: "Audio platform that unlocks the potential of human creativity.",
    benefits: ["Music Perks", "Flexible Work", "Health Benefits", "Innovation Days"],
    technologies: ["Audio", "Recommendations", "Mobile", "Data Science"]
  },
  { 
    id: 6,
    name: "Netflix", 
    logo: "https://logo.clearbit.com/netflix.com",
    logoFallback: "https://ui-avatars.com/api/?name=Netflix&background=e50914&color=ffffff&size=64",
    jobs: "421", 
    industry: "Entertainment",
    employees: "25K+",
    rating: 4.9,
    location: "Los Gatos, CA",
    founded: "1997",
    featured: false,
    trending: false,
    description: "Entertainment company that revolutionized how people watch content.",
    benefits: ["Unlimited PTO", "Content Budget", "Performance Bonus", "Culture"],
    technologies: ["Streaming", "Content", "Data Analytics", "Personalization"]
  },
  { 
    id: 7,
    name: "Meta", 
    logo: "https://logo.clearbit.com/meta.com",
    logoFallback: "https://ui-avatars.com/api/?name=Meta&background=1877f2&color=ffffff&size=64",
    jobs: "945", 
    industry: "Social Media",
    employees: "50K+",
    rating: 4.7,
    location: "Menlo Park, CA",
    founded: "2004",
    featured: false,
    trending: true,
    description: "Connecting people and building the future of social technology.",
    benefits: ["Flexible Hours", "Wellness Programs", "Stock Options", "Learning"],
    technologies: ["VR/AR", "Social", "Mobile", "AI"]
  },
  { 
    id: 8,
    name: "Tesla", 
    logo: "https://logo.clearbit.com/tesla.com",
    logoFallback: "https://ui-avatars.com/api/?name=Tesla&background=cc0000&color=ffffff&size=64",
    jobs: "892", 
    industry: "Automotive",
    employees: "100K+",
    rating: 4.4,
    location: "Austin, TX",
    founded: "2003",
    featured: false,
    trending: true,
    description: "Accelerating the world's transition to sustainable energy.",
    benefits: ["Stock Options", "Free Charging", "Health Insurance", "Innovation"],
    technologies: ["Electric Vehicles", "Energy Storage", "Solar", "Autonomous Driving"]
  }
];

const TopCompanies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteCompanies, setFavoriteCompanies] = useState(new Set());
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedCompanySize, setSelectedCompanySize] = useState('all');
  const [activeFilters, setActiveFilters] = useState([]);

  // Get unique industries
  const industries = ['all', ...new Set(companies.map(company => company.industry))];
  const ratingsOptions = ['all', '4.5+', '4.0+', '3.5+'];
  const companySizeOptions = ['all', 'Startup (1-50)', 'Medium (51-1000)', 'Large (1000+)'];

  // Filter and sort companies
  const filteredCompanies = companies
    .filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           company.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
      
      const matchesRating = selectedRating === 'all' || 
                           (selectedRating === '4.5+' && company.rating >= 4.5) ||
                           (selectedRating === '4.0+' && company.rating >= 4.0) ||
                           (selectedRating === '3.5+' && company.rating >= 3.5);
      
      const employeeCount = parseInt(company.employees.replace(/\D/g, ''));
      const matchesSize = selectedCompanySize === 'all' ||
                         (selectedCompanySize === 'Startup (1-50)' && employeeCount <= 50) ||
                         (selectedCompanySize === 'Medium (51-1000)' && employeeCount > 50 && employeeCount <= 1000) ||
                         (selectedCompanySize === 'Large (1000+)' && employeeCount > 1000);
      
      return matchesSearch && matchesIndustry && matchesRating && matchesSize;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured - a.featured || b.rating - a.rating;
        case 'jobs':
          return parseInt(b.jobs.replace(',', '')) - parseInt(a.jobs.replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('all');
    setSelectedRating('all');
    setSelectedCompanySize('all');
    setSortBy('featured');
    setActiveFilters([]);
  };

  const toggleFavorite = (companyId) => {
    setFavoriteCompanies(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(companyId)) {
        newFavorites.delete(companyId);
      } else {
        newFavorites.add(companyId);
      }
      return newFavorites;
    });
  };

  // Update active filters
  useEffect(() => {
    const filters = [];
    if (selectedIndustry !== 'all') filters.push(`Industry: ${selectedIndustry}`);
    if (selectedRating !== 'all') filters.push(`Rating: ${selectedRating}`);
    if (selectedCompanySize !== 'all') filters.push(`Size: ${selectedCompanySize}`);
    if (searchQuery) filters.push(`Search: "${searchQuery}"`);
    setActiveFilters(filters);
  }, [selectedIndustry, selectedRating, selectedCompanySize, searchQuery]);

  const styles = {
    container: {
      backgroundColor: '#f8fafc',
      padding: '80px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    maxWidth: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    trustBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'white',
      padding: '8px 20px',
      borderRadius: '25px',
      border: '1px solid #e3f2fd',
      fontSize: '14px',
      color: '#1976d2',
      fontWeight: '600',
      marginBottom: '24px',
      boxShadow: '0 2px 8px rgba(25, 118, 210, 0.1)'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    highlight: {
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '700px',
      margin: '0 auto 48px',
      lineHeight: '1.6',
      fontWeight: '400'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #f0f0f0'
    },
    statNumber: (color) => ({
      fontSize: '2rem',
      fontWeight: 'bold',
      color: color,
      marginBottom: '8px'
    }),
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    // Enhanced search and filter section
    controlsSection: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '20px',
      marginBottom: '48px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(25, 118, 210, 0.1)'
    },
    searchContainer: {
      position: 'relative',
      marginBottom: '24px'
    },
    searchInput: {
      width: '100%',
      padding: '16px 60px 16px 24px',
      borderRadius: '12px',
      border: '2px solid #f0f0f0',
      fontSize: '16px',
      backgroundColor: '#f8fafc',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontWeight: '500'
    },
    searchIcon: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6b7280'
    },
    filtersRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    },
    filterSelect: {
      padding: '12px 16px',
      borderRadius: '10px',
      border: '2px solid #f0f0f0',
      backgroundColor: '#f8fafc',
      fontSize: '14px',
      cursor: 'pointer',
      outline: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    },
    advancedFiltersToggle: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#1976d2',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    advancedFilters: {
      display: showAdvancedFilters ? 'grid' : 'none',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px',
      padding: '24px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    },
    activeFilters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center'
    },
    activeFilterChip: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    clearFiltersButton: {
      backgroundColor: '#f3f4f6',
      color: '#6b7280',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: '500'
    },
    resultsInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      color: '#6b7280',
      fontSize: '14px'
    },
    companiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '32px',
      marginBottom: '64px',
      alignItems: 'start'
    },
    companyCard: (isHovered, isFeatured) => ({
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '32px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: isHovered 
        ? '0 25px 50px rgba(0, 0, 0, 0.15)' 
        : '0 8px 25px rgba(0, 0, 0, 0.08)',
      border: isFeatured ? '2px solid #1976d2' : '1px solid #f0f0f0',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '520px',
      display: 'flex',
      flexDirection: 'column'
    }),
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '24px',
      minHeight: '80px'
    },
    companyInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flex: 1
    },
    // Enhanced logo styling with real image support
    companyLogo: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      border: '3px solid #f0f0f0',
      flexShrink: 0,
      overflow: 'hidden',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '8px'
    },
    companyDetails: {
      flex: 1,
      minWidth: 0
    },
    companyName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '4px',
      lineHeight: '1.2'
    },
    companyIndustry: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '8px',
      fontWeight: '500'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    actionButtons: {
      display: 'flex',
      gap: '8px',
      flexShrink: 0
    },
    actionButton: {
      padding: '8px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#f8fafc',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    badges: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: 'flex',
      gap: '8px'
    },
    badge: (color, bg) => ({
      padding: '4px 8px',
      borderRadius: '12px',
      backgroundColor: bg,
      color: color,
      fontSize: '0.7rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }),
    companyStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      marginBottom: '24px',
      minHeight: '80px'
    },
    statItem: {
      textAlign: 'center',
      padding: '12px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    statValue: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '4px'
    },
    statKey: {
      fontSize: '0.75rem',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    description: {
      fontSize: '0.9rem',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '24px',
      minHeight: '48px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    benefitsSection: {
      marginBottom: '24px',
      minHeight: '80px',
      display: 'flex',
      flexDirection: 'column'
    },
    sectionTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '12px'
    },
    benefitsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      flex: 1
    },
    benefitChip: {
      padding: '4px 12px',
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      borderRadius: '16px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid #bbdefb'
    },
    cardActions: {
      display: 'flex',
      gap: '12px',
      marginTop: 'auto'
    },
    primaryButton: {
      flex: 1,
      padding: '12px 16px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
      color: 'white',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    secondaryButton: {
      flex: 1,
      padding: '12px 16px',
      borderRadius: '10px',
      backgroundColor: 'transparent',
      color: '#1976d2',
      border: '1px solid #1976d2',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '16px',
      padding: '12px 0',
      borderTop: '1px solid #f0f0f0',
      fontSize: '0.75rem',
      color: '#6b7280',
      minHeight: '36px'
    },
    locationInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    loadMore: {
      textAlign: 'center'
    },
    loadMoreCard: {
      backgroundColor: 'white',
      padding: '48px 32px',
      borderRadius: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
      color: 'white'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Professional Header */}
        <div style={styles.header}>
          <div style={styles.trustBadge}>
            <Award size={16} />
            <span>Top Employers</span>
          </div>
          
          <h2 style={styles.title}>
            Leading Companies <span style={styles.highlight}>Hiring Now</span>
          </h2>
          
          <p style={styles.subtitle}>
            Discover opportunities at world-class companies that value innovation, growth, and exceptional talent. 
            Join industry leaders who are shaping the future.
          </p>
        </div>

        {/* Trust Metrics */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber('#1976d2')}>{companies.length}</div>
            <div style={styles.statLabel}>Top Companies</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber('#2e7d32')}>
              {companies.reduce((sum, company) => sum + parseInt(company.jobs.replace(',', '')), 0).toLocaleString()}+
            </div>
            <div style={styles.statLabel}>Open Positions</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber('#7b1fa2')}>
              {industries.length - 1}
            </div>
            <div style={styles.statLabel}>Industries</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber('#ef6c00')}>
              {(companies.reduce((sum, company) => sum + company.rating, 0) / companies.length).toFixed(1)}
            </div>
            <div style={styles.statLabel}>Avg Rating</div>
          </div>
        </div>

        {/* Enhanced Search and Filter Controls */}
        <div style={styles.controlsSection}>
          {/* Main Search Bar */}
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search companies, industries, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => {
                e.target.style.borderColor = '#1976d2';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 0 0 3px rgba(25, 118, 210, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#f0f0f0';
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.boxShadow = 'none';
              }}
            />
            <Search style={styles.searchIcon} size={20} />
          </div>

          {/* Primary Filters */}
          <div style={styles.filtersRow}>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={styles.filterSelect}
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={styles.filterSelect}
            >
              <option value="featured">Featured First</option>
              <option value="jobs">Most Jobs</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Company Name</option>
            </select>

            <button
              style={styles.advancedFiltersToggle}
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1565c0';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1976d2';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <SlidersHorizontal size={16} />
              Advanced Filters
              <ChevronDown 
                size={16} 
                style={{ 
                  transform: showAdvancedFilters ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </button>
          </div>

          {/* Advanced Filters */}
          <div style={styles.advancedFilters}>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              style={styles.filterSelect}
            >
              {ratingsOptions.map(rating => (
                <option key={rating} value={rating}>
                  {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                </option>
              ))}
            </select>
            
            <select
              value={selectedCompanySize}
              onChange={(e) => setSelectedCompanySize(e.target.value)}
              style={styles.filterSelect}
            >
              {companySizeOptions.map(size => (
                <option key={size} value={size}>
                  {size === 'all' ? 'All Company Sizes' : size}
                </option>
              ))}
            </select>
          </div>

          {/* Active Filters & Results Info */}
          <div style={styles.resultsInfo}>
            <div>
              <strong>{filteredCompanies.length}</strong> companies found
              {activeFilters.length > 0 && ` with ${activeFilters.length} filter${activeFilters.length > 1 ? 's' : ''}`}
            </div>
            {activeFilters.length > 0 && (
              <button
                style={styles.clearFiltersButton}
                onClick={clearAllFilters}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6';
                }}
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Active Filter Chips */}
          {activeFilters.length > 0 && (
            <div style={styles.activeFilters}>
              <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500', marginRight: '8px' }}>
                Active filters:
              </span>
              {activeFilters.map((filter, index) => (
                <div key={index} style={styles.activeFilterChip}>
                  {filter}
                  <X size={12} style={{ cursor: 'pointer' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Companies Grid with Real Logos */}
        <div style={styles.companiesGrid}>
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              style={styles.companyCard(hoveredCard === company.id, company.featured)}
              onMouseEnter={() => setHoveredCard(company.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badges */}
              <div style={styles.badges}>
                {company.featured && (
                  <div style={styles.badge('#1976d2', '#e3f2fd')}>
                    <Star size={12} />
                    FEATURED
                  </div>
                )}
                {company.trending && (
                  <div style={styles.badge('#f59e0b', '#fef3c7')}>
                    <TrendingUp size={12} />
                    TRENDING
                  </div>
                )}
              </div>

              {/* Card Header with Real Logo */}
              <div style={styles.cardHeader}>
                <div style={styles.companyInfo}>
                  <div style={styles.companyLogo}>
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      style={styles.logoImage}
                      onError={(e) => {
                        e.target.src = company.logoFallback;
                      }}
                    />
                  </div>
                  <div style={styles.companyDetails}>
                    <h3 style={styles.companyName}>{company.name}</h3>
                    <div style={styles.companyIndustry}>{company.industry}</div>
                    <div style={styles.ratingContainer}>
                      <Star size={14} color="#fbbf24" fill="#fbbf24" />
                      <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#fbbf24' }}>
                        {company.rating}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        (1.2k reviews)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div style={styles.actionButtons}>
                  <button
                    style={styles.actionButton}
                    onClick={() => toggleFavorite(company.id)}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  >
                    <Heart 
                      size={16} 
                      color={favoriteCompanies.has(company.id) ? '#ef4444' : '#6b7280'}
                      fill={favoriteCompanies.has(company.id) ? '#ef4444' : 'none'}
                    />
                  </button>
                  <button
                    style={styles.actionButton}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  >
                    <ExternalLink size={16} color="#6b7280" />
                  </button>
                </div>
              </div>

              {/* Company Stats */}
              <div style={styles.companyStats}>
                <div style={styles.statItem}>
                  <div style={styles.statValue}>{company.jobs}</div>
                  <div style={styles.statKey}>Open Jobs</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statValue}>{company.employees}</div>
                  <div style={styles.statKey}>Employees</div>
                </div>
              </div>

              {/* Company Description */}
              <div style={styles.description}>
                {company.description}
              </div>

              {/* Benefits */}
              <div style={styles.benefitsSection}>
                <div style={styles.sectionTitle}>Top Benefits</div>
                <div style={styles.benefitsList}>
                  {company.benefits.slice(0, 3).map((benefit, index) => (
                    <span key={index} style={styles.benefitChip}>
                      {benefit}
                    </span>
                  ))}
                  {company.benefits.length > 3 && (
                    <span style={{ ...styles.benefitChip, backgroundColor: '#f3e8ff', color: '#7c3aed' }}>
                      +{company.benefits.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.cardActions}>
                <button
                  style={styles.primaryButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(25, 118, 210, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Briefcase size={16} />
                  View Jobs
                </button>
                <button
                  style={styles.secondaryButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1976d2';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#1976d2';
                  }}
                >
                  <Building size={16} />
                  Company Info
                </button>
              </div>

              {/* Footer */}
              <div style={styles.cardFooter}>
                <div style={styles.locationInfo}>
                  <MapPin size={12} />
                  {company.location}
                </div>
                <div>Founded {company.founded}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.loadMore}>
          <div style={styles.loadMoreCard}>
            <Target size={48} style={{ marginBottom: '24px', opacity: 0.9 }} />
            <h3 style={{ marginBottom: '16px', fontSize: '1.75rem', fontWeight: '600' }}>
              Ready to Join Industry Leaders?
            </h3>
            <p style={{ marginBottom: '32px', opacity: 0.9, fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 32px' }}>
              Connect with top companies and discover opportunities that match your career aspirations. Your dream job awaits.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'white',
                  color: '#1976d2',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Zap size={20} />
                Explore All Companies
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(25, 118, 210, 0.05)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '30%',
        background: 'rgba(46, 125, 50, 0.05)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />
    </div>
  );
};

export default TopCompanies;