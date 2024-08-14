import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardContent, Grid, CardMedia, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

// Styled components
const PlansContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f4f4f4',
});

const PlanCard = styled(Card)({
  maxWidth: '350px',
  margin: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const PlanCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: '20px',
});

const PlanImage = styled(CardMedia)({
  height: '140px',
});

const WorkoutPlans = () => {
  const plans = [
    { 
      name: 'Weight Loss', 
      description: 'A structured plan focusing on reducing body fat through cardio, strength training, and a balanced diet.',
      image: 'https://via.placeholder.com/350x140.png?text=Weight+Loss',
      link: '/plan/weight-loss'
    },
    { 
      name: 'Muscle Gain', 
      description: 'Designed to help build muscle mass with resistance training, protein-rich diet, and progressive overload.',
      image: 'https://via.placeholder.com/350x140.png?text=Muscle+Gain',
      link: '/plan/muscle-gain'
    },
    { 
      name: 'Strength Building', 
      description: 'Enhance your overall strength with a combination of weightlifting and functional exercises.',
      image: 'https://via.placeholder.com/350x140.png?text=Strength+Building',
      link: '/plan/strength-building'
    },
    { 
      name: 'HIIT', 
      description: 'High-Intensity Interval Training for efficient fat burning and cardiovascular improvements.',
      image: 'https://via.placeholder.com/350x140.png?text=HIIT',
      link: '/plan/hiit'
    },
    { 
      name: 'Yoga', 
      description: 'Improve flexibility, balance, and relaxation through various yoga poses and breathing exercises.',
      image: 'https://via.placeholder.com/350x140.png?text=Yoga',
      link: '/plan/yoga'
    },
  ];

  return (
    <PlansContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Workout Plans
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Explore our diverse range of workout plans designed to help you achieve your fitness goals. Whether you're looking to lose weight, gain muscle, or improve your overall strength, we have a plan tailored for you.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan) => (
            <Grid item key={plan.name}>
              <Link to={plan.link} style={{ textDecoration: 'none' }}>
                <PlanCard>
                  <CardActionArea>
                    <PlanImage
                      component="img"
                      image={plan.image}
                      alt={plan.name}
                    />
                    <PlanCardContent>
                      <Typography variant="h6">{plan.name}</Typography>
                      <Typography variant="body1" color="textSecondary">
                        {plan.description}
                      </Typography>
                    </PlanCardContent>
                  </CardActionArea>
                </PlanCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PlansContainer>
  );
};

export default WorkoutPlans;
