import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";
import "./NutritionDiet.css"; // Import the external CSS

// Styled components
const NutritionCard = styled(Card)({
  maxWidth: 345,
  margin: "20px auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  borderRadius: "15px",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
});

const NutritionCardContent = styled(CardContent)({
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#ffffff",
});

const CardMediaStyled = styled(CardMedia)({
  height: 160,
  objectFit: "cover",
});

const DialogContentStyled = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px",
  backgroundColor: "#fafafa",
});

// Nutrition Diet component
const NutritionDiet = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDietPlan, setSelectedDietPlan] = useState(null);
  const [newDietPlan, setNewDietPlan] = useState({
    name: "",
    description: "",
    mealDetails: "",
    dietaryRestrictions: "",
    targetAudience: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    // Fetch initial diet plans
    // Example API call (replace with actual API endpoint)
    fetch("/api/diet-plans")
      .then((response) => response.json())
      .then((data) => setDietPlans(data))
      .catch((error) => console.error("Error fetching diet plans:", error));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedDietPlan(null);
    setNewDietPlan({
      name: "",
      description: "",
      mealDetails: "",
      dietaryRestrictions: "",
      targetAudience: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDietPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddDietPlan = () => {
    // Add new diet plan (replace with actual API endpoint)
    fetch("/api/diet-plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDietPlan),
    })
      .then((response) => response.json())
      .then((data) => {
        setDietPlans((prevState) => [...prevState, data]);
        setSnackbarMessage("Diet Plan added successfully!");
        setSnackbarOpen(true);
        handleClose();
      })
      .catch((error) => {
        console.error("Error adding diet plan:", error);
        setSnackbarMessage("Error adding diet plan. Please try again.");
        setSnackbarOpen(true);
      });
  };

  const handleInfoClick = (dietPlan) => {
    setSelectedDietPlan(dietPlan);
    setOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="NutritionContainer">
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Nutrition and Diet Plans
        </Typography>
        <Typography variant="body1" paragraph>
          Manage and add your diet plans. Follow these guidelines to support
          your fitness journey and overall well-being.
        </Typography>
        <Button className="AddButton" variant="contained" onClick={handleOpen}>
          Add New Diet Plan
        </Button>
        <Grid container spacing={4} justifyContent="center">
          {dietPlans.map((dietPlan) => (
            <Grid item key={dietPlan.id}>
              <NutritionCard>
                <CardMediaStyled
                  component="img"
                  image={
                    dietPlan.image || "https://via.placeholder.com/345x160.png"
                  }
                  alt={dietPlan.name}
                />
                <NutritionCardContent>
                  <Typography variant="h5">{dietPlan.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {dietPlan.description}
                  </Typography>
                  <Button
                    className="ViewButton"
                    variant="contained"
                    onClick={() => handleInfoClick(dietPlan)}
                  >
                    View Details
                  </Button>
                </NutritionCardContent>
              </NutritionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for adding a new diet plan */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedDietPlan ? "Diet Plan Details" : "Add New Diet Plan"}
        </DialogTitle>
        <DialogContentStyled>
          {!selectedDietPlan ? (
            <>
              <TextField
                label="Name"
                name="name"
                value={newDietPlan.name}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Description"
                name="description"
                value={newDietPlan.description}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Meal Details"
                name="mealDetails"
                value={newDietPlan.mealDetails}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Dietary Restrictions"
                name="dietaryRestrictions"
                value={newDietPlan.dietaryRestrictions}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Target Audience"
                name="targetAudience"
                value={newDietPlan.targetAudience}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
            </>
          ) : (
            <>
              <Typography variant="body1">
                {selectedDietPlan.mealDetails}
              </Typography>
              <Typography variant="body1">
                {selectedDietPlan.dietaryRestrictions}
              </Typography>
              <Typography variant="body1">
                {selectedDietPlan.targetAudience}
              </Typography>
            </>
          )}
        </DialogContentStyled>
        <DialogActions>
          {!selectedDietPlan && (
            <Button className="AddButton" onClick={handleAddDietPlan}>
              Add Diet Plan
            </Button>
          )}
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for success and error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarMessage.includes("Error") ? "error" : "success"}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NutritionDiet;
