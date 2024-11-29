import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const TrainerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
});

const TrainerCard = styled('div')({
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  maxWidth: '300px',
  textAlign: 'center',
});

const VirtualTrainer = () => {
  const trainers = [
    { name: 'John Doe', description: 'Certified personal trainer with 10 years of experience.' },
    { name: 'Jane Smith', description: 'Nutritionist and fitness expert specializing in weight loss.' },
  ];

  return (
    <TrainerContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Virtual Trainer
        </Typography>
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.name}>
            <Typography variant="h6">{trainer.name}</Typography>
            <Typography variant="body1">{trainer.description}</Typography>
          </TrainerCard>
        ))}
      </Container>
    </TrainerContainer>
  );
};

export default VirtualTrainer;
