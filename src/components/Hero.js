import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Building,
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
} from "lucide-react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    company: ''
  });
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { number: "150K+", label: "Active Jobs", icon: <Briefcase /> },
    { number: "25K+", label: "Companies", icon: <Building /> },
    { number: "1M+", label: "Professionals", icon: <Users /> },
    { number: "95%", label: "Success Rate", icon: <Award /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log("Search triggered:", searchData);
  };

  const suggestedKeywords = ["Software Engineer", "Product Manager", "Data Analyst", "UX Designer", "Marketing Director"];
  const trustedCompanies = ["Google", "Microsoft", "Apple", "Amazon", "Meta", "Tesla"];

  return (
    <Box sx={{ bgcolor: "grey.100", py: { xs: 10, md: 14 }, overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Trust Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Chip
            icon={<CheckCircle size={18} />}
            label="Trusted by Fortune 500 companies worldwide"
            sx={{ mb: 4, px: 2, py: 1.5, fontWeight: 500 }}
            color="default"
            variant="outlined"
          />
        </motion.div>

        {/* Hero Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            Find your{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ideal career
            </Box>{" "}
            opportunity
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="subtitle1" sx={{ maxWidth: 700, mx: "auto", mb: 6 }}>
            Connect with top employers and discover opportunities that match your expertise. Join over{" "}
            <motion.span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {metrics[currentMetric].number}
            </motion.span>{" "}
            professionals who've advanced their careers through our platform.
          </Typography>
        </motion.div>

        {/* Search Form */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              maxWidth: 900,
              mx: "auto",
              mb: 5,
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            <TextField
              label="Job Title"
              value={searchData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              InputProps={{ startAdornment: <Briefcase size={20} style={{ marginRight: 8 }} /> }}
            />
            <TextField
              label="Location"
              value={searchData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              InputProps={{ startAdornment: <MapPin size={20} style={{ marginRight: 8 }} /> }}
            />
            <TextField
              label="Company"
              value={searchData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              InputProps={{ startAdornment: <Building size={20} style={{ marginRight: 8 }} /> }}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleSearch}
              sx={{ minHeight: 56 }}
              startIcon={<Search />}
            >
              Search Jobs
            </Button>
          </Paper>
        </motion.div>

        {/* Suggested Tags */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Typography variant="body2" color="text.secondary" mb={1}>
            <TrendingUp size={16} style={{ verticalAlign: "middle", marginRight: 4 }} />
            Popular job categories:
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" useFlexGap flexWrap="wrap" sx={{ mb: 6 }}>
            {suggestedKeywords.map((keyword) => (
              <motion.div whileHover={{ scale: 1.1 }} key={keyword}>
                <Chip
                  label={keyword}
                  variant="outlined"
                  clickable
                  onClick={() => handleInputChange("jobTitle", keyword)}
                />
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* Trusted Companies */}
        <Typography variant="caption" display="block" gutterBottom sx={{ color: "text.secondary", mb: 2 }}>
          Trusted by leading companies
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" useFlexGap flexWrap="wrap" sx={{ opacity: 0.7, mb: 6 }}>
          {trustedCompanies.map((company) => (
            <motion.div key={company} whileHover={{ y: -3 }}>
              <Paper
                elevation={1}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "default",
                }}
              >
                {company}
              </Paper>
            </motion.div>
          ))}
        </Stack>

        {/* Stats Section */}
        <Grid container spacing={3} justifyContent="center">
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "primary.main",
                      color: "white",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {metric.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="bold">
                    {metric.number}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textTransform: "uppercase", fontWeight: 500 }}>
                    {metric.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
