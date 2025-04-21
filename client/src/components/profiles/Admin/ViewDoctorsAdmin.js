import doctorImages from '../Assets/doctorImages';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Box,
  CardMedia,
  IconButton,
  Breadcrumbs
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

function DoctorCard({ doctor }) {
  return (
    <Card sx={{
      maxWidth: 345,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 3,
      borderRadius: 2,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6
      }
    }}>
      {/* Doctor's Image */}
      <CardMedia
        component="img"
        height="200"
        image={doctor.profilePicture || "https://via.placeholder.com/150"}
        alt={`${doctor.fullName}'s profile`}
        sx={{ objectFit: 'cover', objectPosition: 'center 30%' }}
      />
      
      {/* Remove the Paper component that was here */}

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Doctor's Name */}
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {doctor.fullName}
        </Typography>
        
        {/* Specialization with icon */}
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="body2" color="text.secondary">
            <strong>Specialty:</strong> {doctor.specializationName}
          </Typography>
        </Box>
        
        {/* Clinic/Hospital */}
        <Typography variant="body2" color="text.secondary" mb={1}>
          <strong>Clinic:</strong> {doctor.clinicOrHospital || "Not specified"}
        </Typography>
        
        {/* Contact Info */}
        <Box mb={2}>
          <Typography variant="body2" color="text.secondary">
            <strong>Email:</strong> {doctor.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone:</strong> {doctor.contactNumber || "Not provided"}
          </Typography>
        </Box>
        
        {/* View More Button */}
        <Button
          component={Link}
          to={`/appointments/${doctor._id}`}
          variant="contained"
          color="primary"
          fullWidth
        >
          View Appointments
        </Button>
      </CardContent>
    </Card>
  );
}

function ViewDoctor() {
  // Rest of your component remains unchanged
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDoctorData = async () => {
    try {
      setLoading(true);
      const userRes = await fetch("http://localhost:3000/fetch_user?role=Doctor");
      
      if (!userRes.ok) throw new Error('Failed to fetch doctors');
      
      const userData = await userRes.json();
      
      const doctorData = await Promise.all(
        userData.map(async (user) => {
          const res = await fetch(`http://localhost:3000/fetch_doctor/${user._id}`);
          if (!res.ok) return {};
          return await res.json();
        })
      );

      // Combine with local images
      const populatedData = userData.map((user, index) => ({
        ...user,
        ...doctorData[index],
        profilePicture: doctorImages[user._id] || doctorImages.default
      }));
      
      setDoctorsData(populatedData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDoctorData(); }, []);

  const handleBack = () => {
    navigate('/AdminProfile');
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            aria-label="back"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard - Doctors
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 3 }}>
        {/* Breadcrumb navigation */}
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link 
            to="/AdminProfile"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              color: '#2d90d2',
              textDecoration: 'none' 
            }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Admin Dashboard
          </Link>
          <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
            Doctors
          </Typography>
        </Breadcrumbs>
        
        {loading ? (
          <Typography>Loading doctors...</Typography>
        ) : doctorsData.length === 0 ? (
          <Typography>No doctors found.</Typography>
        ) : (
          <Grid container spacing={3}>
            {doctorsData.map((doctor) => (
              <Grid item xs={12} sm={6} md={4} key={doctor._id}>
                <DoctorCard doctor={doctor} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default ViewDoctor;