import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const UserControl = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/admin/getall")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = () => {
    if (selectedUser) {
      axios
        .delete(`/api/admin/${selectedUser.id}`)
        .then(() => {
          setMessage("User deleted successfully.");
          setUsers(users.filter((user) => user.id !== selectedUser.id));
          setSelectedUser(null);
        })
        .catch((error) => console.error("Error deleting user:", error));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.adminName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Control
      </Typography>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{
                mb: 2,
                border: `1px solid ${
                  user === selectedUser ? "#1976d2" : "#ccc"
                }`,
                cursor: "pointer",
                "&:hover": {
                  border: "1px solid #1976d2",
                },
              }}
              onClick={() => handleSelectUser(user)}
            >
              <CardHeader title={user.adminName} subheader={user.adminEmail} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Role: {user.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedUser && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Selected User: {selectedUser.adminName}
          </Typography>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete User
          </Button>
        </Box>
      )}
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={6000}
        onClose={() => setMessage("")}
        sx={{ bottom: 50 }}
      >
        <Alert onClose={() => setMessage("")} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserControl;
