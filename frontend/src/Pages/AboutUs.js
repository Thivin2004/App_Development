import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AboutUsImg from '../Images/about-us-img.png'; // Ensure this path is correct

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
        <AboutUsSubtitle variant="h6">
          Join Us
        </AboutUsSubtitle>
        <AboutUsText variant="body1">
          Discover a new level of fitness at FitTrack Gym. Join us today and take the first step towards a healthier, stronger you!
        </AboutUsText>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
