// src/pages/YogaDetail.js
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

const YogaDetail = () => {
  return (
    <PlanDetailContainer>
      <PlanDetailCard>
        <PlanDetailImage component="img" image="https://via.placeholder.com/600x300.png?text=Yoga" alt="Yoga" />
        <CardContent>
          <Typography variant="h4">Yoga Plan</Typography>
          <Typography variant="body1" paragraph>
            Our Yoga Plan focuses on improving flexibility, balance, and relaxation through various yoga poses and breathing exercises. This plan includes guided sessions, detailed instructions, and support to enhance your yoga practice.
          </Typography>
          <Typography variant="h6">Key Features:</Typography>
          <ul>
            <li>Guided yoga sessions for different levels</li>
            <li>Breathing and relaxation techniques</li>
            <li>Flexibility and balance improvement routines</li>
            <li>Access to online yoga classes and workshops</li>
          </ul>
        </CardContent>
      </PlanDetailCard>
    </PlanDetailContainer>
  );
};

export default YogaDetail;
