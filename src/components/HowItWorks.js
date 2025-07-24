import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
  Button,
  useTheme,
  Zoom
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
  {
    title: "Create Account",
    description: "Sign up and get started in seconds with our streamlined registration process.",
    details: "Quick setup, email verification, profile creation",
    icon: <PersonIcon fontSize="large" />, 
  },
  {
    title: "Upload CV/Resume",
    description: "Add your professional details to stand out from the competition.",
    details: "PDF upload, skills parsing, automatic formatting",
    icon: <DescriptionIcon fontSize="large" />, 
  },
  {
    title: "Find Suitable Job",
    description: "Browse and search jobs that perfectly match your skills and preferences.",
    details: "AI matching, filters, personalized recommendations",
    icon: <SearchIcon fontSize="large" />, 
  },
  {
    title: "Apply for Job",
    description: "One-click apply and track your application status in real-time.",
    details: "Instant apply, status tracking, interview scheduling",
    icon: <RocketLaunchIcon fontSize="large" />, 
  },
];

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box py={10} px={2} bgcolor="#f8fafc" textAlign="center">
      <Typography variant="h4" fontWeight={700} mb={2}>
        Get Hired in <Typography component="span" color="primary" display="inline">4 Easy Steps</Typography>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={6}>
        The quickest and most effective way to get hired by top firms in your interest area.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Zoom in style={{ transitionDelay: `${index * 150}ms` }} key={index}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  minHeight: 280,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6
                  }
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 64, height: 64 }}>
                    {step.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={700}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {step.description}
                  </Typography>
                  <Typography variant="caption" fontStyle="italic" color="text.disabled">
                    {step.details}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Zoom>
        ))}
      </Grid>

      <Box mt={8}>
        <Button variant="contained" size="large" sx={{ px: 5, py: 1.5, borderRadius: 10 }}>
          Start Your Journey Now
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWorks;
