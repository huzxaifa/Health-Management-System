import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components for animations and modern effects
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: 'linear-gradient(45deg, #03265a 0%, #2752af 100%)',
  color: '#fff',
  overflow: 'hidden',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?t=st=1714935217~exp=1714938817~hmac=9ae1b8a97f5c78e35ade7d266b7b97cee07db0c805f0ffab38e22c3df1d10ada&w=740") no-repeat center center',
    backgroundSize: 'cover',
    opacity: 0.1,
    zIndex: 0,
  }
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  margin: '0 auto',
  opacity: 0.9,
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '12px 30px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.25)',
  transition: 'all 0.3s ease',
  backgroundColor: '#fff',
  color: '#03265a',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.35)',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.09)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #03265a 0%, #2752af 100%)',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: '#fff',
  boxShadow: '0 10px 20px rgba(3, 38, 90, 0.2)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '4px',
    width: '60px',
    background: 'linear-gradient(45deg, #03265a 0%, #2752af 100%)',
    borderRadius: '4px',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 4px 15px rgba(3, 38, 90, 0.15)',
  marginTop: theme.spacing(2),
  backgroundColor: '#03265a',
  '&:hover': {
    backgroundColor: '#2752af',
  },
}));

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <HeroContent>
            <HeroTitle variant="h2" component="h1">
              Welcome to Health Hub
            </HeroTitle>
            <HeroSubtitle variant="h5">
              Your comprehensive healthcare solution connecting patients with top medical specialists.
              Book appointments with ease and manage your health journey seamlessly.
            </HeroSubtitle>
            <AnimatedButton variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
              Explore Our Services
            </AnimatedButton>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h3" component="h2">
            Why Choose Health Hub?
          </SectionTitle>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mt: 4 }}>
            We provide comprehensive healthcare solutions to connect you with the best specialists
            and streamline your medical journey with innovative technology.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={2}>
              <IconWrapper>
                <LocalHospitalIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, my: 2 }}>
                Top Specialists
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access to qualified medical professionals across multiple specialties and disciplines.
              </Typography>
              <ActionButton variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
                Find Doctors
              </ActionButton>
            </FeatureCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={2}>
              <IconWrapper>
                <CalendarMonthIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, my: 2 }}>
                Easy Scheduling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Book appointments online anytime, with instant confirmations and reminders.
              </Typography>
              <ActionButton variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
                Book Now
              </ActionButton>
            </FeatureCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={2}>
              <IconWrapper>
                <HealthAndSafetyIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, my: 2 }}>
                Patient Care
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Personalized healthcare plans and continuous support throughout your medical journey.
              </Typography>
              <ActionButton variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
                Learn More
              </ActionButton>
            </FeatureCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={2}>
              <IconWrapper>
                <MedicalInformationIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, my: 2 }}>
                Digital Records
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secure access to your medical history, test results, and treatment plans all in one place.
              </Typography>
              <ActionButton variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
                View Demo
              </ActionButton>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        backgroundColor: 'rgba(3, 38, 90, 0.03)', 
        py: 8 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                position: 'relative', 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              }}>
                <Box 
                  component="img"
                  src="https://img.freepik.com/free-photo/medium-shot-doctor-with-stethoscope_23-2149191355.jpg?t=st=1714935542~exp=1714939142~hmac=af15fb5d1f7c5d7c89dc428d4b680a83a4f5ec1fce5cd649ce69e7ed4c686fea&w=740"
                  alt="Doctor with patient"
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Focused on Patient Experience
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                At Health Hub, we believe healthcare should be accessible, convenient, and personalized. 
                Our platform connects you with the right specialists for your specific needs and simplifies 
                the entire healthcare journey.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                With intuitive appointment booking, secure messaging with doctors, and easy access to 
                your medical records, we're transforming how you experience healthcare.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  borderRadius: '50px',
                  background: 'linear-gradient(45deg, #03265a 0%, #2752af 100%)',
                  textTransform: 'none',
                  fontWeight: 600,
                  padding: '12px 30px',
                }}
              >
                Get Started Today
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="footer" sx={{ 
        backgroundColor: '#03265a', 
        color: '#fff', 
        py: 5,
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 2 }}>
            Health Hub
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Connecting patients with healthcare professionals for better health outcomes.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
            © {new Date().getFullYear()} Health Hub. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;