// src/pages/HIITDetail.js
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const PlanDetailContainer = styled(Container)({
  marginTop: '50px',
  padding: '20px',
});

const PlanDetailCard = styled(Card)({
  maxWidth: '600px',
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
});

const PlanDetailImage = styled(CardMedia)({
  height: '300px',
});

const HIITDetail = () => {
  return (
    <PlanDetailContainer>
      <PlanDetailCard>
        <PlanDetailImage component="img" image="https://via.placeholder.com/600x300.png?text=HIIT" alt="HIIT" />
        <CardContent>
          <Typography variant="h4">HIIT Plan</Typography>
          <Typography variant="body1" paragraph>
            Our HIIT (High-Intensity Interval Training) Plan is designed for efficient fat burning and cardiovascular improvements. This plan offers intense, short bursts of exercise followed by rest periods to maximize your workout effectiveness.
          </Typography>
          <Typography variant="h6">Key Features:</Typography>
          <ul>
            <li>High-intensity interval workouts</li>
            <li>Varied exercise routines for all fitness levels</li>
            <li>Focus on cardiovascular and fat-burning goals</li>
            <li>Flexible workout schedules</li>
          </ul>
        </CardContent>
      </PlanDetailCard>
    </PlanDetailContainer>
  );
};

export default HIITDetail;
