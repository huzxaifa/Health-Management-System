import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';

// Enhanced Card with modern styling and hover effects
const EnhancedCard = styled(Card)(({ theme }) => ({
  width: '300px',
  height: '380px',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  background: '#fff',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
  },
}));

const CardMediaWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
}));

const DoctorInfo = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'relative',
}));

const DoctorName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(1),
  color: '#03265a',
}));

const DoctorDetails = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiTabs-indicator': {
    backgroundColor: '#03265a',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      color: '#03265a',
    },
  },
}));

const SpecialtyHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '2.2rem',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  background: 'linear-gradient(45deg, #03265a 30%, #2752af 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ScrollControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  gap: theme.spacing(2),
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#03265a',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2752af',
  },
}));

const BookButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  borderRadius: '20px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.8rem',
  padding: '4px 12px',
  backgroundColor: '#03265a',
  '&:hover': {
    backgroundColor: '#2752af',
  },
}));

const RatingChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#f57c00',
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: '#f57c00',
  },
}));

const DoctorAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  border: '3px solid #fff',
  position: 'absolute',
  bottom: '-32px',
  left: '20px',
  zIndex: 1,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const SpecialtyDoctorsSlideshow = () => {
  // Specialty data (same as your original)
  const specialties = [
    {
      name: 'Dermatologists',
      doctors: [
        {
          name: 'Dr. Michael Brown',
          image: 'https://www.shutterstock.com/image-photo/photo-young-happy-woman-professional-260nw-2100617581.jpg',
          details: 'Experienced in dermatologic surgery and cosmetic dermatology procedures.',
          rating: 4.9,
        },
        {
          name: 'Dr. Emily Wilson',
          image: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1714932220~exp=1714935820~hmac=af93c99d824d8e7540e2eed0a859d7d3029a752d17cb1c71cfd3ed0be3b13cf6&w=360',
          details: 'Expertise in pediatric dermatology and treating skin conditions in children.',
          rating: 4.8,
        },
        {
          name: 'Dr. Sarah Johnson',
          image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?t=st=1714917399~exp=1714920999~hmac=c5d82a2fd8e3a1b63142f7db627aadf3ce38902e50aca29ae63f7bd25bfa4a3f&w=360',
          details: 'Specializes in treating skin conditions such as acne, eczema, and psoriasis.',
          rating: 4.7,
        },
        {
          name: 'Dr. David Martinez',
          image: 'https://img.freepik.com/premium-photo/photo-portrait-beautiful-young-female-doctor-looking-camera_763111-137933.jpg?w=360',
          details: 'Specializes in Mohs micrographic surgery for skin cancer treatment.',
          rating: 4.9,
        },
        {
          name: 'Dr. Olivia Parker',
          image: 'https://img.freepik.com/free-photo/close-up-health-worker_23-2149112580.jpg?t=st=1714932479~exp=1714936079~hmac=1c367232152f2e3b366ea520eafa70af3fa9b3b176021e2326a462346f78f94d&w=360',
          details: 'Provides comprehensive care for skin diseases and aesthetic treatments.',
          rating: 4.8,
        },
      ],
    },
    {
      name: 'Cardiologists',
      doctors: [
        {
          name: 'Dr. James Anderson',
          image: 'https://img.freepik.com/free-photo/portrait-confident-male-doctor_329181-12190.jpg?t=st=1714932271~exp=1714935871~hmac=574e71ad798eceb8f227abf796e7d3bffc73f73bd3f00b4b4f85707b835492bf&w=360',
          details: 'Specializes in diagnosing and treating heart diseases and conditions.',
          rating: 4.9,
        },
        {
          name: 'Dr. Elizabeth Carter',
          image: 'https://img.freepik.com/premium-psd/female-doctor-isolated-transparent-background_879541-1281.jpg?w=360',
          details: 'Experienced in interventional cardiology procedures such as angioplasty and stent placement.',
          rating: 4.7,
        },
        {
          name: 'Dr. Christopher Lee',
          image: 'https://img.freepik.com/premium-photo/male-doctor-light-surface_392895-24691.jpg?w=360',
          details: 'Expertise in electrophysiology for diagnosing and treating heart rhythm disorders.',
          rating: 4.8,
        },
        {
          name: 'Dr. Maria Garcia',
          image: 'https://img.freepik.com/premium-photo/latin-american-doctor-woman-standing-with-arms-crossed-smiling-hospital-physician-ready-examine-patient-health-care-insurance-help-concept-physician-ready-examine-patient_665183-8189.jpg?w=360',
          details: 'Specializes in cardiac imaging techniques including echocardiography and cardiac MRI.',
          rating: 4.6,
        },
        {
          name: 'Dr. Benjamin Taylor',
          image: 'https://img.freepik.com/free-photo/close-up-health-worker_23-2149112503.jpg?t=st=1714932417~exp=1714936017~hmac=c00b1b731f1bbd73c7860ba24c63676358e9837b58ce996c84f82e34279be4c0&w=360',
          details: 'Provides comprehensive care for patients with heart failure and other cardiac conditions.',
          rating: 4.9,
        },
      ],
    },
    {
      name: 'Orthopedic Surgeons',
      doctors: [
        {
          name: 'Dr. Alexander Smith',
          image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1714932576~exp=1714936176~hmac=d4a08cce72d130200e4328040443b99381fb8c8646b396b2c356d7f8272ebfba&w=740',
          details: 'Specializes in treating musculoskeletal injuries and performing joint replacement surgeries.',
          rating: 4.8,
        },
        {
          name: 'Dr. Jennifer White',
          image: 'https://img.freepik.com/premium-photo/portrait-smiling-handsome-male-doctor-man_485089-24.jpg?w=360',
          details: 'Experienced in arthroscopic procedures for sports injuries and minimally invasive surgeries.',
          rating: 4.7,
        },
        {
          name: 'Dr. Daniel Brown',
          image: 'https://img.freepik.com/free-photo/portrait-beautiful-young-female-doctor_329181-1163.jpg?t=st=1714932513~exp=1714936113~hmac=47312721b3d9f6297c2e289c139742c5eba7efff06e9e043972daec216a7e799&w=360',
          details: 'Expertise in pediatric orthopedics and treating congenital musculoskeletal conditions.',
          rating: 4.9,
        },
        {
          name: 'Dr. Rachel Garcia',
          image: 'https://img.freepik.com/free-photo/confident-senior-doctor-with-clipboard_23-2147896173.jpg?t=st=1714932745~exp=1714936345~hmac=688629e6dbab2230d0e104efe8c652a6e61a6598d690583c1fe09d72777c6c0c&w=360',
          details: 'Specializes in spine surgery for conditions such as herniated discs and scoliosis.',
          rating: 4.6,
        },
        {
          name: 'Dr. William Martinez',
          image: 'https://img.freepik.com/free-photo/close-up-doctor-getting-ready-work_23-2149152484.jpg?t=st=1714932776~exp=1714936376~hmac=e6e1fc77c9e35925b7579e77b092f93302b2635f24efc4793b9f2d39f7b05e92&w=360',
          details: 'Provides comprehensive care for patients with fractures and orthopedic trauma.',
          rating: 4.8,
        },
      ],
    },
    {
      name: 'Neurologists',
      doctors: [
        {
          name: 'Dr. Samantha Johnson',
          image: 'https://img.freepik.com/free-photo/nurse-with-stethoscope-white-medical-uniform-white-protective-sterile-mask_179666-205.jpg?t=st=1714932622~exp=1714936222~hmac=92540825e0b3f037ef70a9c6616f8b34d379f243ac19b0bc0cf71e422f30fa24&w=360',
          details: 'Specializes in diagnosing and treating neurological disorders such as multiple sclerosis and epilepsy.',
          rating: 4.9,
        },
        {
          name: 'Dr. Andrew Wilson',
          image: 'https://img.freepik.com/premium-photo/male-doctor-portrait_23-2148827722.jpg?w=360',
          details: 'Experienced in neurophysiology and performing nerve conduction studies and electromyography.',
          rating: 4.7,
        },
        {
          name: 'Dr. Jessica Lee',
          image: 'https://img.freepik.com/premium-photo/close-up-doctor-getting-ready-work_23-2149152528.jpg?w=360',
          details: 'Expertise in movement disorders including Parkinson\'s disease and essential tremor.',
          rating: 4.8,
        },
        {
          name: 'Dr. Christopher Brown',
          image: 'https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780330.jpg?t=st=1714932890~exp=1714936490~hmac=aa4e7b7911349aa85007f82848835e4b62f877af0a5ef9b6d5526698dfcf29cf&w=360',
          details: 'Specializes in neurocritical care for patients with acute brain injuries and strokes.',
          rating: 4.6,
        },
        {
          name: 'Dr. Emily Taylor',
          image: 'https://img.freepik.com/free-photo/portrait-young-successful-female-surgeon-with-stethoscope-isolated_186202-1270.jpg?t=st=1714932857~exp=1714936457~hmac=04ce84e284d9d1d4bf20a146834f150cb7c1515bd448e34b27e5e25fd3fea442&w=360',
          details: 'Provides comprehensive care for patients with Alzheimer\'s disease and other cognitive disorders.',
          rating: 4.9,
        },
      ],
    },
    {
      name: 'Ophthalmologists',
      doctors: [
        {
          name: 'Dr. Ethan Martinez',
          image: 'https://img.freepik.com/free-photo/front-view-smiley-male-doctor_23-2148453484.jpg?t=st=1714932910~exp=1714936510~hmac=0277461289cd694bac9689d99f129836c62c0ff7291a4aab22d3e940d49f57db&w=360',
          details: 'Specializes in treating eye diseases such as glaucoma and diabetic retinopathy.',
          rating: 4.8,
        },
        {
          name: 'Dr. Sophia Garcia',
          image: 'https://img.freepik.com/premium-photo/side-view-smiley-female-doctor_23-2148453487.jpg?w=360',
          details: 'Experienced in performing cataract surgery and refractive procedures like LASIK.',
          rating: 4.9,
        },
        {
          name: 'Dr. Noah Johnson',
          image: 'https://img.freepik.com/premium-photo/portrait-experienced-therapistisolated-white_160672-27685.jpg?w=360',
          details: 'Expertise in pediatric ophthalmology and treating childhood eye conditions.',
          rating: 4.7,
        },
        {
          name: 'Dr. Ava Brown',
          image: 'https://img.freepik.com/premium-photo/doctor-woman-happy-cheerful-while-standing-hospital-office-highlight-background-medicine-healthcare-concept_735658-1759.jpg?w=360',
          details: 'Specializes in corneal transplantation and managing corneal diseases.',
          rating: 4.8,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setScrollPosition(0); // Reset scroll position when changing tabs
  };

  const handleScroll = (direction) => {
    const container = document.getElementById('doctors-container');
    const cardWidth = 320; // card width + margin
    
    if (container) {
      if (direction === 'left') {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        setScrollPosition(Math.max(0, scrollPosition - 1));
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        setScrollPosition(scrollPosition + 1);
      }
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <StyledTabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="specialty tabs"
        centered
      >
        {specialties.map((specialty, index) => (
          <Tab key={index} label={specialty.name} />
        ))}
      </StyledTabs>

      {specialties.map((specialty, index) => (
        <Box
          key={index}
          role="tabpanel"
          hidden={activeTab !== index}
          id={`specialty-tabpanel-${index}`}
          aria-labelledby={`specialty-tab-${index}`}
        >
          {activeTab === index && (
            <>
              <SpecialtyHeading variant="h4">
                {specialty.name}
              </SpecialtyHeading>
              
              <Box
                id="doctors-container"
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: 3,
                  py: 4,
                  px: 2,
                  scrollbarWidth: 'none', // Firefox
                  '&::-webkit-scrollbar': { // Chrome, Safari, etc.
                    display: 'none',
                  },
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory',
                }}
              >
                {specialty.doctors.map((doctor, docIndex) => (
                  <Box
                    key={docIndex}
                    sx={{
                      scrollSnapAlign: 'start',
                      flex: '0 0 auto',
                    }}
                  >
                    <EnhancedCard>
                      <CardMediaWrapper>
                        <CardMedia
                          component="img"
                          height="200"
                          image={doctor.image}
                          alt={doctor.name}
                          sx={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                        />
                        <RatingChip
                          icon={<StarIcon />}
                          label={doctor.rating}
                          size="small"
                        />
                        <DoctorAvatar src={doctor.image} alt={doctor.name} />
                      </CardMediaWrapper>
                      <DoctorInfo>
                        <Box sx={{ mt: 2 }}>
                          <DoctorName variant="h6">
                            {doctor.name}
                          </DoctorName>
                          <DoctorDetails variant="body2">
                            {doctor.details}
                          </DoctorDetails>
                          <BookButton 
                            variant="contained" 
                            size="small"
                          >
                            Book Now
                          </BookButton>
                        </Box>
                      </DoctorInfo>
                    </EnhancedCard>
                  </Box>
                ))}
              </Box>
              
              <ScrollControls>
                <ScrollButton onClick={() => handleScroll('left')} disabled={scrollPosition === 0}>
                  <KeyboardArrowLeftIcon />
                </ScrollButton>
                <ScrollButton onClick={() => handleScroll('right')} disabled={scrollPosition >= specialty.doctors.length - 3}>
                  <KeyboardArrowRightIcon />
                </ScrollButton>
              </ScrollControls>
            </>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default SpecialtyDoctorsSlideshow;