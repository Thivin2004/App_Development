import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia, Grid, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const NutritionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '0 20px',
});

const NutritionCard = styled(Card)({
  maxWidth: '345px',
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
});

const NutritionCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: '16px',
});

const CardMediaStyled = styled(CardMedia)({
  height: '140px',
});

// Nutrition Diet component
const NutritionDiet = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [open, setOpen] = useState(false);

  const tips = [
    {
      id: 1,
      name: 'Hydration',
      description: 'Staying hydrated is essential for overall health. Aim to drink at least 8 glasses of water daily.',
      image: 'https://via.placeholder.com/345x140.png?text=Hydration', // Placeholder image
      details: 'Hydration is crucial for maintaining the balance of bodily fluids. It supports digestion, absorption of nutrients, and temperature regulation. Keep a water bottle handy and track your intake to stay on top of your hydration goals.',
    },
    {
      id: 2,
      name: 'Balanced Diet',
      description: 'A balanced diet includes a mix of proteins, carbohydrates, and healthy fats. Aim for variety in your meals.',
      image: 'https://via.placeholder.com/345x140.png?text=Balanced+Diet', // Placeholder image
      details: 'A balanced diet ensures that you get all the necessary nutrients. Incorporate a variety of foods from all food groups, including lean proteins, whole grains, fruits, and vegetables. Avoid excessive intake of sugars and saturated fats.',
    },
    {
      id: 3,
      name: 'Meal Timing',
      description: 'Eating smaller, more frequent meals can help maintain energy levels and support metabolism.',
      image: 'https://via.placeholder.com/345x140.png?text=Meal+Timing', // Placeholder image
      details: 'Regular meal timing helps regulate blood sugar levels and metabolism. Aim for 5-6 small meals throughout the day instead of three large ones. This can help sustain energy levels and prevent overeating.',
    },
  ];

  const handleInfoClick = (tip) => {
    setSelectedTip(tip);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTip(null);
  };

  return (
    <NutritionContainer>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center">
          Nutrition and Diet Tips
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Discover essential tips for maintaining a healthy diet. Follow these guidelines to support your fitness journey and overall well-being.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {tips.map((tip) => (
            <Grid item key={tip.id}>
              <NutritionCard>
                <CardMediaStyled
                  component="img"
                  image={tip.image}
                  alt={tip.name}
                />
                <NutritionCardContent>
                  <Typography variant="h5">{tip.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tip.description}
                  </Typography>
                  <div style={{ marginTop: '10px' }}>
                    <IconButton 
                      color="primary"
                      onClick={() => handleInfoClick(tip)}
                    >
                      <InfoIcon />
                    </IconButton>
                    <Button 
                      variant="contained" 
                      color="primary"
                      startIcon={<CheckCircleIcon />}
                      style={{ marginLeft: '10px' }}
                    >
                      Got it
                    </Button>
                  </div>
                </NutritionCardContent>
              </NutritionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for detailed information */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedTip?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedTip?.details}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </NutritionContainer>
  );
};

export default NutritionDiet;
