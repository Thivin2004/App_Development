import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

const ProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
});

const ProfileCard = styled('div')({
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  maxWidth: '500px',
  textAlign: 'center',
});

const Profile = () => {
  const { userId } = useParams();
  // Fetch user profile data based on userId

  return (
    <ProfileContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        <ProfileCard>
          <Typography variant="h6">Name: John Doe</Typography>
          <Typography variant="body1">Age: 30</Typography>
          <Typography variant="body1">Weight: 70 kg</Typography>
          <Typography variant="body1">Fitness Goals: Build muscle</Typography>
          <Typography variant="body1">Health Conditions: None</Typography>
        </ProfileCard>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;
