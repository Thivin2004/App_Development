import React, { useState } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WeightLoss from "../Images/WeightLoss.jpeg";
import Musclegain from "../Images/Musclegain.jpeg";
import Run from "../Images/Run.jpeg";
import Goal from "../Images/Goal.jpeg"; // Path to your background image

// Styled components
const GoalContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  padding: "0 20px",
  background: `url(${Goal}) no-repeat center center fixed`,
  backgroundSize: "cover",
  minHeight: "100vh",
});

const GoalCard = styled(Card)({
  maxWidth: "345px",
  margin: "20px auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.3s, box-shadow 0.3s",
  backgroundColor: "#fff",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  },
});

const GoalCardContent = styled(CardContent)({
  textAlign: "center",
});

const StyledButton = styled(Button)({
  margin: "10px",
  borderRadius: "8px",
  textTransform: "none",
});

const IconButtonStyled = styled(IconButton)({
  margin: "0 5px",
});

const EditDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    padding: "20px",
    borderRadius: "12px",
  },
});

const GoalSetting = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: "Weight Loss",
      description: "Lose 5 kg in the next 2 months.",
      image: WeightLoss,
      completed: false,
    },
    {
      id: 2,
      name: "Muscle Gain",
      description: "Increase muscle mass by 3 kg.",
      image: Musclegain,
      completed: false,
    },
    {
      id: 3,
      name: "Run a 5K",
      description: "Complete a 5K run within 30 minutes.",
      image: Run,
      completed: false,
    },
  ]);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState(null);
  const [editedGoal, setEditedGoal] = useState({ name: "", description: "" });

  const handleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleEditOpen = (goal) => {
    setCurrentGoal(goal);
    setEditedGoal({ name: goal.name, description: goal.description });
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSave = () => {
    setGoals(
      goals.map((goal) =>
        goal.id === currentGoal.id
          ? {
              ...goal,
              name: editedGoal.name,
              description: editedGoal.description,
            }
          : goal
      )
    );
    setEditDialogOpen(false);
  };

  return (
    <GoalContainer>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center" color="white">
          Goal Setting
        </Typography>
        <Typography variant="body1" paragraph align="center" color="white">
          Set your fitness goals and track your progress with our personalized
          goal-setting feature. Achieve your fitness milestones with clear,
          actionable objectives.
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
                  <Typography variant="h5" color="textPrimary">
                    {goal.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {goal.description}
                  </Typography>
                  <div style={{ marginTop: "10px" }}>
                    <IconButtonStyled
                      color={goal.completed ? "primary" : "default"}
                      onClick={() => handleComplete(goal.id)}
                    >
                      <CheckCircleIcon />
                    </IconButtonStyled>
                    <IconButtonStyled
                      color="primary"
                      onClick={() => handleEditOpen(goal)}
                    >
                      <EditIcon />
                    </IconButtonStyled>
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

      {/* Edit Dialog */}
      <EditDialog open={editDialogOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Goal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Goal Name"
            type="text"
            fullWidth
            variant="outlined"
            value={editedGoal.name}
            onChange={(e) =>
              setEditedGoal({ ...editedGoal, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={editedGoal.description}
            onChange={(e) =>
              setEditedGoal({ ...editedGoal, description: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </EditDialog>
    </GoalContainer>
  );
};

export default GoalSetting;
