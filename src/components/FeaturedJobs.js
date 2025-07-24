import React, { useState, useEffect } from "react";
import jobs from "../data/jobs.json";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Button,
  Chip,
  Snackbar,
  Alert,
  Stack,
  Fade,
  Paper,
  Badge,
  Tooltip,
  Container,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  LinearProgress,
  Skeleton
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationOnIcon,
  Work as WorkIcon,
  AccessTime as AccessTimeIcon,
  AttachMoney as PaidIcon,
  Launch as LaunchIcon,
  TrendingUp,
  Star,
  FlashOn,
  Search,
  FilterList,
  Visibility,
  People,
  WorkspacePremium,
  Rocket,
  AutoAwesome,
  BusinessCenter,
  Verified,
  Speed,
  CheckCircle,
  ArrowForward,
  BookmarkBorder,
  Share,
  ExpandMore,
  CompareArrows
} from "@mui/icons-material";

const FeaturedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [notification, setNotification] = useState({ show: false, message: '', severity: 'success' });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewCount, setViewCount] = useState({});
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const toggleSaveJob = (jobId, jobTitle) => {
    setSavedJobs(prev => {
      const newSaved = new Set(prev);
      const isSaved = newSaved.has(jobId);
      if (isSaved) {
        newSaved.delete(jobId);
        showNotification(`Removed "${jobTitle}" from saved jobs`, 'info');
      } else {
        newSaved.add(jobId);
        showNotification(`Saved "${jobTitle}" to your favorites!`, 'success');
      }
      return newSaved;
    });
  };

  const showNotification = (message, severity) => {
    setNotification({ show: true, message, severity });
    setTimeout(() => setNotification({ show: false, message: '', severity: 'success' }), 4000);
  };

  const handleViewJob = (jobId) => {
    setViewCount(prev => ({ ...prev, [jobId]: (prev[jobId] || 0) + 1 }));
  };

  const getJobTypeColor = (type) => {
    switch (type) {
      case 'Full-Time': return 'success';
      case 'Part-Time': return 'warning';
      case 'Contract': return 'info';
      default: return 'default';
    }
  };

  const getJobPriority = (job) => {
    const priorities = [];
    if (job.urgent) priorities.push({ label: 'URGENT', color: 'error', icon: <FlashOn /> });
    if (job.featured) priorities.push({ label: 'FEATURED', color: 'primary', icon: <Star /> });
    if (job.hot) priorities.push({ label: 'HOT', color: 'warning', icon: <TrendingUp /> });
    return priorities;
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'featured') return matchesSearch && job.featured;
    if (filter === 'remote') return matchesSearch && job.remote;
    if (filter === 'urgent') return matchesSearch && job.urgent;
    return matchesSearch;
  });

  // Professional trust indicators
  const trustMetrics = {
    totalJobs: jobs.length,
    featuredJobs: jobs.filter(job => job.featured).length,
    remoteJobs: jobs.filter(job => job.remote).length,
    companiesHiring: new Set(jobs.map(job => job.company)).size
  };

  return (
    <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
      <Container maxWidth="xl">
        {/* Professional Header Section */}
        <Box textAlign="center" mb={6}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mb={2}>
            <WorkspacePremium color="primary" />
            <Chip 
              label="Curated Opportunities"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Stack>
          
          <Typography 
            variant="h3" 
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Featured Job Opportunities
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', mb: 4, fontWeight: 400 }}
          >
            Discover hand-picked opportunities from verified companies. Join over 100,000+ professionals who found their ideal role through our platform.
          </Typography>

          {/* Trust Indicators */}
          <Grid container spacing={2} justifyContent="center" mb={4}>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Verified color="success" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  <strong>{trustMetrics.totalJobs}+</strong> Active Jobs
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={1}>
                <BusinessCenter color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  <strong>{trustMetrics.companiesHiring}+</strong> Hiring Companies
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircle color="success" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  <strong>95%</strong> Success Rate
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Professional Search and Filter Section */}
        <Paper 
          elevation={2}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '1px solid rgba(25, 118, 210, 0.1)'
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search by job title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    bgcolor: 'white'
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={4}>
              <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={(e, newFilter) => newFilter && setFilter(newFilter)}
                size="small"
                fullWidth
              >
                <ToggleButton value="all">All Jobs</ToggleButton>
                <ToggleButton value="featured">Featured</ToggleButton>
                <ToggleButton value="remote">Remote</ToggleButton>
                <ToggleButton value="urgent">Urgent</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item xs={12} md={2}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<FilterList />}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                Filters
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Professional Stats Dashboard */}
        <Grid container spacing={3} mb={6}>
          <Grid item xs={6} md={3}>
            <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h4" color="primary.main" fontWeight="bold">
                {filteredJobs.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available Positions
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h4" color="success.main" fontWeight="bold">
                {filteredJobs.filter(job => job.featured).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premium Roles
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h4" color="info.main" fontWeight="bold">
                {filteredJobs.filter(job => job.remote).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Remote Opportunities
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h4" color="warning.main" fontWeight="bold">
                {filteredJobs.filter(job => job.urgent).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Urgent Hiring
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Professional Jobs Grid */}
        <Grid container spacing={3}>
          {filteredJobs.map((job, index) => (
            <Fade in key={job.id} timeout={300 + index * 50}>
              <Grid item xs={12} sm={6} lg={4}>
                <Card
                  elevation={hoveredCard === job.id ? 8 : 2}
                  onMouseEnter={() => setHoveredCard(job.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredCard === job.id ? 'translateY(-4px)' : 'translateY(0)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'visible',
                    border: job.featured ? '2px solid' : '1px solid',
                    borderColor: job.featured ? 'primary.main' : 'divider',
                    '&::before': job.featured ? {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      borderRadius: 3,
                      zIndex: -1,
                      opacity: 0.1
                    } : {}
                  }}
                >
                  {/* Professional Priority Indicators */}
                  {getJobPriority(job).length > 0 && (
                    <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                      <Stack direction="row" spacing={1}>
                        {getJobPriority(job).map((priority, idx) => (
                          <Chip
                            key={idx}
                            label={priority.label}
                            icon={priority.icon}
                            color={priority.color}
                            size="small"
                            sx={{ 
                              fontWeight: 'bold',
                              fontSize: '0.7rem',
                              '& .MuiChip-icon': { fontSize: '0.9rem' }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}

                  <CardHeader
                    avatar={
                      <Badge
                        badgeContent={job.applicants || Math.floor(Math.random() * 50 + 5)}
                        color="secondary"
                        max={99}
                        sx={{
                          '& .MuiBadge-badge': {
                            fontSize: '0.7rem',
                            minWidth: '18px',
                            height: '18px'
                          }
                        }}
                      >
                        <Avatar 
                          src={job.companyLogo} 
                          alt={job.company}
                          sx={{ 
                            width: 56, 
                            height: 56,
                            border: '2px solid',
                            borderColor: 'divider',
                            fontSize: '1.5rem',
                            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
                          }}
                        >
                          {job.company.charAt(0)}
                        </Avatar>
                      </Badge>
                    }
                    action={
                      <Stack direction="row" spacing={0.5}>
                        <Tooltip title="Share job">
                          <IconButton size="small">
                            <Share fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={savedJobs.has(job.id) ? "Remove from favorites" : "Save job"}>
                          <IconButton 
                            onClick={() => toggleSaveJob(job.id, job.title)}
                            size="small"
                          >
                            {savedJobs.has(job.id) ? 
                              <FavoriteIcon color="error" fontSize="small" /> : 
                              <FavoriteBorderIcon fontSize="small" />
                            }
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    }
                    title={
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          lineHeight: 1.3,
                          color: 'text.primary'
                        }}
                      >
                        {job.title}
                      </Typography>
                    }
                    subheader={
                      <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                          {job.company}
                        </Typography>
                        {job.rating && (
                          <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Star sx={{ fontSize: 14, color: 'warning.main' }} />
                            <Typography variant="caption" color="warning.main" fontWeight="bold">
                              {job.rating}
                            </Typography>
                          </Stack>
                        )}
                        <Chip 
                          label="Verified" 
                          size="small" 
                          color="success" 
                          variant="outlined"
                          sx={{ fontSize: '0.65rem', height: 18 }}
                        />
                      </Stack>
                    }
                    sx={{ pb: 1 }}
                  />

                  <CardContent sx={{ pt: 0 }}>
                    {/* Professional Job Details */}
                    <Stack spacing={1.5} mb={3}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.primary">
                          {job.location}
                        </Typography>
                        {job.remote && (
                          <Chip 
                            label="Remote" 
                            size="small" 
                            color="info"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem', height: 20 }}
                          />
                        )}
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <WorkIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                        <Chip 
                          label={job.type} 
                          size="small"
                          color={getJobTypeColor(job.type)}
                          variant="filled"
                        />
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.primary">
                          {job.postedTime}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <PaidIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            color: 'success.main', 
                            fontWeight: 'bold'
                          }}
                        >
                          {job.salary}
                        </Typography>
                      </Stack>

                      {job.applicants && (
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <People sx={{ fontSize: 18, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {job.applicants} applicants
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={Math.min((job.applicants / 100) * 100, 100)} 
                            sx={{ flex: 1, height: 4, borderRadius: 2 }}
                          />
                        </Stack>
                      )}
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    {/* Professional Skills Section */}
                    <Box mb={3}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 500 }}>
                        Key Requirements:
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" spacing={1}>
                        {job.skills?.slice(0, 3).map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        ))}
                        {job.skills?.length > 3 && (
                          <Chip
                            label={`+${job.skills.length - 3} more`}
                            size="small"
                            variant="outlined"
                            color="secondary"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        )}
                      </Stack>
                    </Box>

                    {/* Professional Action Buttons */}
                    <Stack spacing={1.5}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<Rocket />}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1
                        }}
                      >
                        Apply Now
                      </Button>
                      
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          fullWidth
                          endIcon={<LaunchIcon />}
                          onClick={() => handleViewJob(job.id)}
                          sx={{
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 500
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<CompareArrows />}
                          sx={{
                            minWidth: 'auto',
                            borderRadius: 2
                          }}
                        />
                      </Stack>
                    </Stack>

                    {/* Professional View Counter */}
                    {viewCount[job.id] && (
                      <Stack direction="row" alignItems="center" spacing={1} mt={2} justifyContent="center">
                        <Visibility sx={{ fontSize: 12, color: 'text.disabled' }} />
                        <Typography variant="caption" color="text.disabled">
                          Viewed {viewCount[job.id]} time{viewCount[job.id] > 1 ? 's' : ''}
                        </Typography>
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Fade>
          ))}
        </Grid>

        {/* Professional Load More Section */}
        <Box mt={8} textAlign="center">
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 3,
              maxWidth: 500,
              mx: 'auto',
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white'
            }}
          >
            <AutoAwesome sx={{ fontSize: 40, mb: 2, opacity: 0.9 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Ready to Find Your Next Role?
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Join thousands of professionals who've found their dream job
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                View All {jobs.length} Jobs
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<BookmarkBorder />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Create Alert
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>

      {/* Professional Notification */}
      <Snackbar 
        open={notification.show} 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ zIndex: 9999 }}
      >
        <Alert 
          severity={notification.severity} 
          variant="filled"
          sx={{ 
            borderRadius: 2,
            fontWeight: 500
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeaturedJobs;