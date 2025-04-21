import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Paper,
  Divider,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  LocalHospital as DoctorIcon,
  People as PatientIcon,
  EventNote as AppointmentIcon,
  Notifications as NotificationIcon,
  Settings as SettingsIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  BarChart as AnalyticsIcon,
  MonetizationOn as BillingIcon
} from "@mui/icons-material";

function AdminMain() {
  const [stats, setStats] = useState({
    doctors: 24,
    patients: 156,
    appointments: 38,
    pendingRequests: 5
  });
  const navigate = useNavigate();
  
  const [recentActivities] = useState([
    { activity: "New doctor registered", time: "10 minutes ago" },
    { activity: "3 new appointments scheduled", time: "1 hour ago" },
    { activity: "Monthly report generated", time: "3 hours ago" },
    { activity: "System maintenance completed", time: "Yesterday" }
  ]);

  // Demo chart data
  const revenueData = [12000, 15000, 8000, 18000, 14000, 22000];
  const revenueLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxRevenue = Math.max(...revenueData);
  
  useEffect(() => {
    // This would be replaced with actual API calls to get dashboard data
    console.log("Dashboard loaded");
  }, []);
  
  const handleLogout = () => {
    // You might want to add actual logout logic here, like clearing tokens from localStorage
    localStorage.removeItem('token'); // If you're using token-based authentication
    navigate('/'); // Navigate to the Home page
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <AppBar position="static" sx={{ bgcolor: "#2563eb" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            HealthCare Admin
          </Typography>
          
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Notifications">
              <IconButton color="inherit" size="large">
                <Badge badgeContent={3} color="error">
                  <NotificationIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Settings">
              <IconButton color="inherit" size="large" sx={{ mx: 1 }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Profile">
              <IconButton 
                component={Link} 
                to="/profile" 
                color="inherit" 
                size="large"
              >
                <Avatar 
                  sx={{ width: 32, height: 32, bgcolor: "#1e40af" }}
                  alt="Admin"
                >
                  HK
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Sidebar Navigation */}
          <Grid item xs={12} md={3} lg={2}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 2, 
                height: "100%", 
                borderRadius: 2,
                display: { xs: "none", md: "block" } 
              }}
            >
              <List component="nav">
                <ListItem button selected sx={{ borderRadius: 1, mb: 1, bgcolor: "#e0e7ff" }}>
                  <ListItemIcon>
                    <DashboardIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: "medium" }} />
                </ListItem>
                
                <ListItem button component={Link} to="/doctors" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <DoctorIcon />
                  </ListItemIcon>
                  <ListItemText primary="Doctors" />
                </ListItem>
                
                <ListItem button component={Link} to="/patients" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <PatientIcon />
                  </ListItemIcon>
                  <ListItemText primary="Patients" />
                </ListItem>
                
                <ListItem button component={Link} to="/appointments" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <AppointmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Appointments" />
                </ListItem>
                
                <ListItem button component={Link} to="/analytics" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <AnalyticsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItem>
                
                <ListItem button component={Link} to="/billing" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <BillingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Billing" />
                </ListItem>
                
                <Divider sx={{ my: 2 }} />
                
                <ListItem button component={Link} to="/profile" sx={{ borderRadius: 1, mb: 1 }}>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                
                <ListItem button onClick={handleLogout} sx={{ borderRadius: 1, color: "error.main", cursor: 'pointer' }}>
                  <ListItemIcon>
                    <LogoutIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          
          {/* Main Content */}
          <Grid item xs={12} md={9} lg={10}>
            <Grid container spacing={3}>
              {/* Welcome Message */}
              <Grid item xs={12}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    backgroundImage: "linear-gradient(to right, #2563eb, #3b82f6)",
                    color: "white"
                  }}
                >
                  <Typography variant="h4" gutterBottom fontWeight="bold">
                    Welcome back, Huzaifa!
                  </Typography>
                  <Typography variant="body1">
                    Here's what's happening with your healthcare system today.
                  </Typography>
                </Paper>
              </Grid>
              
              {/* Stats Cards */}
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ borderRadius: 2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography color="text.secondary" gutterBottom>
                        Doctors
                      </Typography>
                      <Avatar sx={{ bgcolor: "#e0f2fe", color: "#0284c7" }}>
                        <DoctorIcon fontSize="small" />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stats.doctors}
                    </Typography>
                    <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                      +3 this month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ borderRadius: 2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography color="text.secondary" gutterBottom>
                        Patients
                      </Typography>
                      <Avatar sx={{ bgcolor: "#fef3c7", color: "#d97706" }}>
                        <PatientIcon fontSize="small" />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stats.patients}
                    </Typography>
                    <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                      +12 this week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ borderRadius: 2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography color="text.secondary" gutterBottom>
                        Appointments
                      </Typography>
                      <Avatar sx={{ bgcolor: "#dcfce7", color: "#16a34a" }}>
                        <AppointmentIcon fontSize="small" />
                      </Avatar>
                    </Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stats.appointments}
                    </Typography>
                    <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                      +8 today
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ borderRadius: 2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography color="text.secondary" gutterBottom>
                        Pending
                      </Typography>
                      <Avatar sx={{ bgcolor: "#fee2e2", color: "#dc2626" }}>
                        <Badge badgeContent={stats.pendingRequests} color="error">
                          <NotificationIcon fontSize="small" />
                        </Badge>
                      </Avatar>
                    </Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stats.pendingRequests}
                    </Typography>
                    <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
                      Action needed
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              {/* Charts and Activity */}
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Revenue Overview
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  {/* Simple chart visualization */}
                  <Box sx={{ display: "flex", height: 200, alignItems: "flex-end" }}>
                    {revenueData.map((value, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          width: `${100/revenueData.length}%`, 
                          mx: 0.5,
                          height: `${(value/maxRevenue) * 100}%`, 
                          bgcolor: "#3b82f6",
                          borderRadius: "4px 4px 0 0",
                          position: "relative"
                        }}
                      >
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            position: "absolute", 
                            bottom: -24, 
                            left: "50%", 
                            transform: "translateX(-50%)" 
                          }}
                        >
                          {revenueLabels[index]}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Activity
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <List>
                    {recentActivities.map((item, index) => (
                      <ListItem 
                        key={index} 
                        sx={{ 
                          px: 0, 
                          borderBottom: index !== recentActivities.length - 1 ? "1px solid #f0f0f0" : "none"
                        }}
                      >
                        <ListItemText 
                          primary={item.activity} 
                          secondary={item.time} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              
              {/* Quick Actions */}
              <Grid item xs={12}>
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Quick Actions
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                      <Button 
                        variant="outlined" 
                        fullWidth 
                        component={Link}
                        to="/doctors" 
                        startIcon={<DoctorIcon />}
                        sx={{ py: 1.5, borderRadius: 2 }}
                      >
                        View Doctors
                      </Button>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                      <Button 
                        variant="outlined" 
                        fullWidth 
                        component={Link}
                        to="/patients" 
                        startIcon={<PatientIcon />}
                        sx={{ py: 1.5, borderRadius: 2 }}
                      >
                        View Patients
                      </Button>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                      <Button 
                        variant="outlined" 
                        fullWidth 
                        component={Link}
                        to="/appointments/create" 
                        startIcon={<AppointmentIcon />}
                        sx={{ py: 1.5, borderRadius: 2 }}
                      >
                        New Appointment
                      </Button>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                      <Button 
                        variant="contained" 
                        fullWidth 
                        component={Link}
                        to="/reports" 
                        startIcon={<AnalyticsIcon />}
                        sx={{ py: 1.5, borderRadius: 2, bgcolor: "#2563eb" }}
                      >
                        Generate Report
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Health Management System. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AdminMain;