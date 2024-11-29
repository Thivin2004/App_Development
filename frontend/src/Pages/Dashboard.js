import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const DashboardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
});

const DashboardLink = styled(Link)({
  textDecoration: 'none',
  color: '#00bcd4',
  fontSize: '18px',
  margin: '10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="body1">
          Manage your fitness journey here. Use the links below to access different sections.
        </Typography>
        <DashboardLink to="/profile">View Profile</DashboardLink>
        <DashboardLink to="/workout-plans">Workout Plans</DashboardLink>
        <DashboardLink to="/progress-tracking">Track Your Progress</DashboardLink>
        <DashboardLink to="/nutrition-diet">Nutrition and Diet Tips</DashboardLink>
        <DashboardLink to="/goal-setting">Set and View Goals</DashboardLink>
        <DashboardLink to="/virtual-trainer">Virtual Trainer</DashboardLink>
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard;
