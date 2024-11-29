// src/pages/WeightLossDetail.js
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

const WeightLossDetail = () => {
  return (
    <PlanDetailContainer>
      <PlanDetailCard>
        <PlanDetailImage component="img" image="https://via.placeholder.com/600x300.png?text=Weight+Loss" alt="Weight Loss" />
        <CardContent>
          <Typography variant="h4">Weight Loss Plan</Typography>
          <Typography variant="body1" paragraph>
            This Weight Loss Plan is a structured approach focusing on reducing body fat through a combination of cardio workouts, strength training, and a balanced diet. You'll gain access to specialized workouts, nutritional guidance, and support to help you achieve your weight loss goals.
          </Typography>
          <Typography variant="h6">Key Features:</Typography>
          <ul>
            <li>Personalized workout routines</li>
            <li>Dietary recommendations and meal plans</li>
            <li>Weekly progress tracking and adjustments</li>
            <li>Access to online support groups</li>
          </ul>
        </CardContent>
      </PlanDetailCard>
    </PlanDetailContainer>
  );
};

export default WeightLossDetail;
