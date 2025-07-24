import React, { useState } from "react";
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
  Stack
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import LaunchIcon from "@mui/icons-material/Launch";

const FeaturedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [notification, setNotification] = useState({ show: false, message: '', severity: 'success' });

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
    setTimeout(() => setNotification({ show: false, message: '', severity: 'success' }), 3000);
  };

  const getJobTypeColor = (type) => {
    switch (type) {
      case 'Full-Time': return 'success';
      case 'Part-Time': return 'warning';
      case 'Contract': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box py={8} px={2} bgcolor="#f8fafc">
      <Box maxWidth="lg" mx="auto" textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Featured Jobs
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Discover hand-picked opportunities from top companies looking for talented professionals like you
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar src={job.companyLogo} alt={job.company} />}
                action={
                  <IconButton onClick={() => toggleSaveJob(job.id, job.title)}>
                    {savedJobs.has(job.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </IconButton>
                }
                title={<Typography fontWeight={600}>{job.title}</Typography>}
                subheader={<Typography variant="body2" color="textSecondary">{job.company}</Typography>}
              />
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">{job.location}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <WorkIcon fontSize="small" />
                  <Chip label={job.type} color={getJobTypeColor(job.type)} size="small" />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body2">{job.postedTime}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  <PaidIcon fontSize="small" />
                  <Typography variant="h6" color="green">{job.salary}</Typography>
                </Stack>

                <Box mb={2}>
                  <Stack direction="row" flexWrap="wrap" spacing={1}>
                    {job.skills.map((skill, index) => (
                      <Chip key={index} label={skill} variant="outlined" />
                    ))}
                  </Stack>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" fullWidth>
                    Apply Now
                  </Button>
                  <Button variant="outlined" endIcon={<LaunchIcon />} fullWidth>
                    View Details
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Button variant="outlined" size="large">
          View All Jobs
        </Button>
      </Box>

      <Snackbar open={notification.show} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeaturedJobs;
