import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications,
  Bookmark,
  Login,
  BusinessCenter,
  Person,
  ExpandMore,
} from "@mui/icons-material";

const Header = () => {
  const [anchorElJobs, setAnchorElJobs] = useState(null);
  const [anchorElCompanies, setAnchorElCompanies] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const handleMenuOpen = (event, setter) => {
    setter(event.currentTarget);
  };

  const handleMenuClose = (setter) => {
    setter(null);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" elevation={trigger ? 4 : 0} color="default">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                width: 40,
                height: 40,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.1rem",
                boxShadow: 2,
                mr: 1,
              }}
            >
              J
            </Box>
            <Typography variant="h6" color="primary">
              JobHunt
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            <Box>
              <Button
                color="inherit"
                endIcon={<ExpandMore />}
                onClick={(e) => handleMenuOpen(e, setAnchorElJobs)}
              >
                Find Jobs
              </Button>
              <Menu
                anchorEl={anchorElJobs}
                open={Boolean(anchorElJobs)}
                onClose={() => handleMenuClose(setAnchorElJobs)}
              >
                <MenuItem>Technology</MenuItem>
                <MenuItem>Design & Creative</MenuItem>
                <MenuItem>Marketing</MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                color="inherit"
                endIcon={<ExpandMore />}
                onClick={(e) => handleMenuOpen(e, setAnchorElCompanies)}
              >
                For Companies
              </Button>
              <Menu
                anchorEl={anchorElCompanies}
                open={Boolean(anchorElCompanies)}
                onClose={() => handleMenuClose(setAnchorElCompanies)}
              >
                <MenuItem>Post Jobs</MenuItem>
                <MenuItem>Branding</MenuItem>
                <MenuItem>Analytics</MenuItem>
              </Menu>
            </Box>

            <Button color="inherit">Career Advice</Button>
            <Button color="inherit">Salary Guide</Button>
          </Box>

          {/* Actions */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton>
              <Bookmark />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
            <Button startIcon={<Person />} sx={{ display: { xs: "none", sm: "flex" } }}>
              Log in
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Sign up
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<BusinessCenter />}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Post a Job
            </Button>
            <IconButton sx={{ display: { md: "none" } }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" color="primary">
              JobHunt
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {["Find Jobs", "For Companies", "Career Advice", "Salary Guide"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box mt={4} display="flex" flexDirection="column" gap={2}>
            <Button variant="outlined" startIcon={<Login />}>
              Log in
            </Button>
            <Button variant="outlined" color="primary">
              Sign up
            </Button>
            <Button variant="contained" color="primary" startIcon={<BusinessCenter />}>
              Post a Job
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
