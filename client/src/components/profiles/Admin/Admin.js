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
  const [adminName, setAdminName] = useState("Kamran Khan"); // Set default to Kamran Khan
  
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
    // Fetch admin profile data
    const fetchAdminProfile = async () => {
      try {
        // This would be replaced with actual API call to get admin data
        // const response = await fetch('/api/admin/profile');
        // const data = await response.json();
        // setAdminName(data.name);
        
        // For now, we'll use the name from localStorage or default to "Kamran Khan"
        const storedName = localStorage.getItem('adminName') || "Kamran Khan";
        setAdminName(storedName);
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };
    
    fetchAdminProfile();
    console.log("Dashboard loaded");
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      {/* ... (rest of the AppBar code remains the same) ... */}

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* ... (sidebar code remains the same) ... */}
          
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
                    Welcome back, {adminName}!
                  </Typography>
                  <Typography variant="body1">
                    Here's what's happening with your healthcare system today.
                  </Typography>
                </Paper>
              </Grid>
              
              {/* ... (rest of the component remains the same) ... */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      {/* ... (footer code remains the same) ... */}
    </Box>
  );
}

export default AdminMain;