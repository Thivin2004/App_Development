import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const DemoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
});

const ExerciseCard = styled('div')({
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  maxWidth: '300px',
  textAlign: 'center',
});

const ExerciseDemo = () => {
  const exercises = [
    { name: 'Squats', description: 'A lower body exercise for strength.' },
    { name: 'Push-Ups', description: 'An upper body exercise for chest and arms.' },
    { name: 'Planks', description: 'A core exercise for stability.' },
  ];

  return (
    <DemoContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Exercise Demonstrations
        </Typography>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.name}>
            <Typography variant="h6">{exercise.name}</Typography>
            <Typography variant="body1">{exercise.description}</Typography>
          </ExerciseCard>
        ))}
      </Container>
    </DemoContainer>
  );
};

export default ExerciseDemo;
