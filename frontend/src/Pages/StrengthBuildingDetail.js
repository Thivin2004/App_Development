// src/pages/StrengthBuildingDetail.js
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

const StrengthBuildingDetail = () => {
  return (
    <PlanDetailContainer>
      <PlanDetailCard>
        <PlanDetailImage component="img" image="https://via.placeholder.com/600x300.png?text=Strength+Building" alt="Strength Building" />
        <CardContent>
          <Typography variant="h4">Strength Building Plan</Typography>
          <Typography variant="body1" paragraph>
            The Strength Building Plan focuses on enhancing your overall strength through weightlifting and functional exercises. This plan includes a mix of strength training routines and exercises designed to boost your power and endurance.
          </Typography>
          <Typography variant="h6">Key Features:</Typography>
          <ul>
            <li>Comprehensive strength training routines</li>
            <li>Guidance on proper lifting techniques</li>
            <li>Access to strength-building workshops</li>
            <li>Personalized progress tracking</li>
          </ul>
        </CardContent>
      </PlanDetailCard>
    </PlanDetailContainer>
  );
};

export default StrengthBuildingDetail;
