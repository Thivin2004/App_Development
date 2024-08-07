import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia, Grid, Button, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled components
const GoalContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '0 20px',
});

const GoalCard = styled(Card)({
  maxWidth: '345px',
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  borderRadius: '12px',
  overflow: 'hidden',
});

const GoalCardContent = styled(CardContent)({
  textAlign: 'center',
});

const StyledButton = styled(Button)({
  margin: '10px',
});

// Goal Setting component
const GoalSetting = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: 'Weight Loss',
      description: 'Lose 5 kg in the next 2 months.',
      image: 'https://via.placeholder.com/345x140.png?text=Weight+Loss', // Placeholder image
      completed: false,
    },
    {
      id: 2,
      name: 'Muscle Gain',
      description: 'Increase muscle mass by 3 kg.',
      image: 'https://via.placeholder.com/345x140.png?text=Muscle+Gain', // Placeholder image
      completed: false,
    },
    {
      id: 3,
      name: 'Run a 5K',
      description: 'Complete a 5K run within 30 minutes.',
      image: 'https://via.placeholder.com/345x140.png?text=Run+a+5K', // Placeholder image
      completed: false,
    },
  ]);

  const handleComplete = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const handleDelete = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <GoalContainer>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center">
          Goal Setting
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Set your fitness goals and track your progress with our personalized goal-setting feature. Achieve your fitness milestones with clear, actionable objectives.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {goals.map((goal) => (
            <Grid item key={goal.id}>
              <GoalCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={goal.image}
                  alt={goal.name}
                />
                <GoalCardContent>
                  <Typography variant="h5">{goal.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {goal.description}
                  </Typography>
                  <div style={{ marginTop: '10px' }}>
                    <IconButton 
                      color={goal.completed ? 'primary' : 'default'} 
                      onClick={() => handleComplete(goal.id)}
                    >
                      <CheckCircleIcon />
                    </IconButton>
                    <StyledButton 
                      variant="outlined" 
                      color="error" 
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(goal.id)}
                    >
                      Delete
                    </StyledButton>
                  </div>
                </GoalCardContent>
              </GoalCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GoalContainer>
  );
};

export default GoalSetting;
