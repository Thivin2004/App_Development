// src/pages/MuscleGainDetail.js
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

const MuscleGainDetail = () => {
  return (
    <PlanDetailContainer>
      <PlanDetailCard>
        <PlanDetailImage component="img" image="https://via.placeholder.com/600x300.png?text=Muscle+Gain" alt="Muscle Gain" />
        <CardContent>
          <Typography variant="h4">Muscle Gain Plan</Typography>
          <Typography variant="body1" paragraph>
            The Muscle Gain Plan is crafted to help you build muscle mass with an emphasis on resistance training and a protein-rich diet. This plan provides structured workouts, diet plans, and ongoing support to ensure you maximize your muscle growth and strength.
          </Typography>
          <Typography variant="h6">Key Features:</Typography>
          <ul>
            <li>Customized workout plans</li>
            <li>Protein intake recommendations</li>
            <li>Regular muscle growth assessments</li>
            <li>Access to exclusive workout videos</li>
          </ul>
        </CardContent>
      </PlanDetailCard>
    </PlanDetailContainer>
  );
};

export default MuscleGainDetail;
