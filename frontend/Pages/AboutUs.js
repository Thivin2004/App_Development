// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import AboutUsImg from '../Images/about-us-img.png'; // Ensure this path is correct

// const AboutUsContainer = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '80px',
//   padding: '20px',
//   backgroundColor: '#e8f0f2', // Light background for the whole page
// });

// const AboutUsImage = styled('img')({
//   width: '80%',
//   maxWidth: '600px',
//   borderRadius: '20px', // More rounded corners
//   boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Enhanced shadow
//   marginBottom: '30px',
//   border: '5px solid #fff', // White border to make the image stand out
// });

// const AboutUsContent = styled('div')({
//   textAlign: 'center',
//   marginTop: '20px',
//   maxWidth: '800px',
//   padding: '30px',
//   backgroundColor: '#fff',
//   borderRadius: '15px',
//   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
//   border: '1px solid #ddd', // Light border for a clean look
// });

// const AboutUsTitle = styled(Typography)({
//   marginBottom: '20px',
//   color: '#333',
//   fontWeight: 'bold', // Emphasize title
//   fontSize: '2.5rem', // Larger font size for title
// });

// const AboutUsSubtitle = styled(Typography)({
//   marginBottom: '20px',
//   color: '#777',
//   fontSize: '1.2rem',
//   fontStyle: 'italic', // Italicized for emphasis
// });

// const AboutUsText = styled(Typography)({
//   marginBottom: '20px',
//   color: '#555',
//   lineHeight: '1.8', // Increased line height for readability
//   fontSize: '1.1rem',
// });

// const AboutUs = () => {
//   return (
//     <AboutUsContainer>
//       <AboutUsImage src={AboutUsImg} alt="About Us" />
//       <AboutUsContent>
//         <AboutUsTitle variant="h4" gutterBottom>
//           About Us
//         </AboutUsTitle>
//         <AboutUsSubtitle variant="h6">
//           Our Mission
//         </AboutUsSubtitle>
//         <AboutUsText variant="body1" paragraph>
//           Welcome to FitTrack Gym, where we are dedicated to your fitness journey. Our mission is to provide top-notch training and support to help you achieve your health and wellness goals.
//         </AboutUsText>
//         <AboutUsSubtitle variant="h6">
//           Our Team
//         </AboutUsSubtitle>
//         <AboutUsText variant="body1" paragraph>
//           Our expert trainers are here to offer personalized guidance and motivation. We believe in fostering a supportive environment where every member feels valued and empowered.
//         </AboutUsText>
//         <AboutUsSubtitle variant="h6">
//           Join Us
//         </AboutUsSubtitle>
//         <AboutUsText variant="body1">
//           Discover a new level of fitness at FitTrack Gym. Join us today and take the first step towards a healthier, stronger you!
//         </AboutUsText>
//       </AboutUsContent>
//     </AboutUsContainer>
//   );
// };

// export default AboutUs;





import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import AboutUsImg from '../Images/about-us-img.png'; // Ensure this path is correct
import Gym5 from '../Images/Gym5.jpg'; // Ensure this path is correct
import Gym6 from '../Images/Gym6.jpeg'; // Ensure this path is correct
import './AboutUs.css';

const AboutUsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  padding: '20px',
  backgroundColor: '#e8f0f2', // Light background for the whole page
});

const AboutUsImage = styled('img')({
  width: '80%',
  maxWidth: '600px',
  borderRadius: '20px', // More rounded corners
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Enhanced shadow
  marginBottom: '30px',
  border: '5px solid #fff', // White border to make the image stand out
});

const AboutUsContent = styled('div')({
  textAlign: 'center',
  marginTop: '20px',
  maxWidth: '800px',
  padding: '30px',
  backgroundColor: '#fff',
  borderRadius: '15px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  border: '1px solid #ddd', // Light border for a clean look
});

const AboutUsTitle = styled(Typography)({
  marginBottom: '20px',
  color: '#333',
  fontWeight: 'bold', // Emphasize title
  fontSize: '2.5rem', // Larger font size for title
});

const AboutUsSubtitle = styled(Typography)({
  marginBottom: '20px',
  color: '#777',
  fontSize: '1.2rem',
  fontStyle: 'italic', // Italicized for emphasis
});

const AboutUsText = styled(Typography)({
  marginBottom: '20px',
  color: '#555',
  lineHeight: '1.8', // Increased line height for readability
  fontSize: '1.1rem',
});

const CallToActionButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#4caf50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#388e3c',
  },
  padding: '10px 20px',
  fontSize: '1rem',
});

const TeamMemberCard = styled('div')({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  margin: '10px',
});

const TeamMemberImage = styled('img')({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '10px',
});

const TeamMemberName = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#333',
});

const TeamMemberRole = styled(Typography)({
  color: '#777',
  fontStyle: 'italic',
});

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsImage src={AboutUsImg} alt="About Us" />
      <AboutUsContent>
        <AboutUsTitle variant="h4" gutterBottom>
          About Us
        </AboutUsTitle>
        <AboutUsSubtitle variant="h6">
          Our Mission
        </AboutUsSubtitle>
        <AboutUsText variant="body1" paragraph>
          Welcome to FitTrack Gym, where we are dedicated to your fitness journey. Our mission is to provide top-notch training and support to help you achieve your health and wellness goals.
        </AboutUsText>
        <AboutUsSubtitle variant="h6">
          Our Team
        </AboutUsSubtitle>
        <AboutUsText variant="body1" paragraph>
          Our expert trainers are here to offer personalized guidance and motivation. We believe in fostering a supportive environment where every member feels valued and empowered.
        </AboutUsText>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <TeamMemberCard>
              <TeamMemberImage src={Gym5} alt="Team Member" />
              <TeamMemberName variant="h6">John Doe</TeamMemberName>
              <TeamMemberRole variant="body2">Head Trainer</TeamMemberRole>
              <Typography variant="body2" color="textSecondary">
                John is an experienced fitness trainer with a passion for helping others achieve their goals.
              </Typography>
            </TeamMemberCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TeamMemberCard>
              <TeamMemberImage src={Gym6} alt="Team Member" />
              <TeamMemberName variant="h6">Jane Smith</TeamMemberName>
              <TeamMemberRole variant="body2">Nutrition Specialist</TeamMemberRole>
              <Typography variant="body2" color="textSecondary">
                Jane is a certified nutritionist who provides personalized diet plans and advice.
              </Typography>
            </TeamMemberCard>
          </Grid>
          {/* Add more team members here */}
        </Grid>
        <AboutUsSubtitle variant="h6">
          Join Us
        </AboutUsSubtitle>
        <AboutUsText variant="body1">
          Discover a new level of fitness at FitTrack Gym. Join us today and take the first step towards a healthier, stronger you!
        </AboutUsText>
        <CallToActionButton variant="contained">
          Get Started
        </CallToActionButton>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
