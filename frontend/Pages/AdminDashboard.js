// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Typography, Box, Toolbar, Avatar, IconButton } from '@mui/material';
// import PeopleIcon from '@mui/icons-material/People';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { useNavigate } from 'react-router-dom';
// import UserControl from './UserControl';

// const drawerWidth = 240;

// const AdminDashboard = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const navigate = useNavigate();

//   const handleTabChange = (tabIndex) => {
//     setSelectedTab(tabIndex);
//   };

//   const handleLogout = () => {
//     // Add any logout logic here if necessary (e.g., clearing auth tokens)
//     navigate('/'); // Navigate to the login page
//   };

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//       <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: '#1976d2', boxShadow: 'none' }}>
//         <Toolbar>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: '#fff' }}>
//             Admin Dashboard
//           </Typography>
//           <IconButton color="inherit" onClick={handleLogout}>
//             <ExitToAppIcon />
//           </IconButton>
//           <Avatar sx={{ bgcolor: '#1976d2', color: '#fff', width: 40, height: 40 }}>A</Avatar>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             backgroundColor: '#333',
//             color: '#fff',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//             padding: 0, // Remove padding
//           },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           <ListItem
//             button
//             onClick={() => handleTabChange(0)}
//             sx={{
//               backgroundColor: selectedTab === 0 ? '#444' : 'inherit',
//               '&:hover': { backgroundColor: '#555' },
//             }}
//           >
//             <ListItemIcon>
//               <PeopleIcon color={selectedTab === 0 ? 'primary' : 'inherit'} />
//             </ListItemIcon>
//             <ListItemText primary="User Control" />
//           </ListItem>
//           <ListItem
//             button
//             onClick={() => handleTabChange(1)}
//             sx={{
//               backgroundColor: selectedTab === 1 ? '#444' : 'inherit',
//               '&:hover': { backgroundColor: '#555' },
//             }}
//           >
//             <ListItemIcon>
//               <AccountBoxIcon color={selectedTab === 1 ? 'primary' : 'inherit'} />
//             </ListItemIcon>
//             <ListItemText primary="My Profile" />
//           </ListItem>
//         </List>
//         <Divider />
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: '#f0f2f5', ml: `${drawerWidth}px`, p: 3 }}
//       >
//         <Toolbar />
//         {selectedTab === 0 && (
//           <Box sx={{ p: 3 }}>
//             <Typography variant="h4" gutterBottom>User Control Panel</Typography>
//             <UserControl />
//           </Box>
//         )}
//         {selectedTab === 1 && (
//           <Box sx={{
//             display: 'flex',
//             alignItems: 'center',
//             p: 3,
//             bgcolor: '#fff',
//             borderRadius: 2,
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <Avatar sx={{ bgcolor: '#1976d2', color: '#fff', width: 80, height: 80, mr: 3 }}>A</Avatar>
//             <Box>
//               <Typography variant="h5" fontWeight="bold">Admin User</Typography>
//               <Typography variant="body1" color="textSecondary">admin@example.com</Typography>
//               <Typography variant="body1" color="textSecondary">Role: Administrator</Typography>
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Typography,
  Box,
  Toolbar,
  Avatar,
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [adminProfile, setAdminProfile] = useState({
    id: "",
    adminName: "",
    adminEmail: "",
    role: "",
  });
  const [adminProfiles, setAdminProfiles] = useState([]);
  const [profileDetails, setProfileDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all admin profiles
    axios
      .get("/api/admin/get/getall")
      .then((response) => setAdminProfiles(response.data))
      .catch((error) => console.error("Error fetching admin profiles:", error));

    // Fetch admin profile details
    axios
      .get("/api/admin/profile")
      .then((response) => {
        setProfileDetails(response.data);
      })
      .catch((error) =>
        console.error("Error fetching profile details:", error)
      );
  }, []);

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleLogout = () => {
    // Add any logout logic here if necessary (e.g., clearing auth tokens)
    navigate("/"); // Navigate to the login page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminProfile({ ...adminProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminProfile.id) {
      axios
        .put(`/api/admin/${adminProfile.id}`, adminProfile)
        .then((response) => {
          setSuccessMessage("Admin profile updated successfully.");
          // Optionally refresh profiles list
        })
        .catch((error) =>
          console.error("Error updating admin profile:", error)
        );
    } else {
      axios
        .post("/api/admin/create", adminProfile)
        .then((response) => {
          setSuccessMessage("Registration successful.");
          // Optionally refresh profiles list
        })
        .catch((error) =>
          console.error("Error creating admin profile:", error)
        );
    }
    setAdminProfile({
      id: "",
      adminName: "",
      adminEmail: "",
      role: "",
    });
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "#1976d2",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: "#fff" }}>
            Admin Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
          <Avatar
            sx={{ bgcolor: "#1976d2", color: "#fff", width: 40, height: 40 }}
          >
            A
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#333",
            color: "#fff",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => handleTabChange(0)}
            sx={{
              backgroundColor: selectedTab === 0 ? "#444" : "inherit",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemIcon>
              <PeopleIcon color={selectedTab === 0 ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText primary="User Control" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleTabChange(1)}
            sx={{
              backgroundColor: selectedTab === 1 ? "#444" : "inherit",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon
                color={selectedTab === 1 ? "primary" : "inherit"}
              />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f0f2f5", ml: `${drawerWidth}px`, p: 3 }}
      >
        <Toolbar />
        {selectedTab === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              User Control Panel
            </Typography>
            <Grid container spacing={3}>
              {adminProfiles.map((profile) => (
                <Grid item xs={12} sm={6} md={4} key={profile.id}>
                  <Card sx={{ mb: 2 }}>
                    <CardHeader
                      title={profile.adminName}
                      subheader={profile.adminEmail}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Role: {profile.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
              <TextField
                label="Name"
                name="adminName"
                value={adminProfile.adminName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="adminEmail"
                value={adminProfile.adminEmail}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Role"
                name="role"
                value={adminProfile.role}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {adminProfile.id ? "Update" : "Create"} Profile
              </Button>
            </form>
          </Box>
        )}
        {selectedTab === 1 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {profileDetails ? (
              <>
                <Avatar
                  sx={{
                    bgcolor: "#1976d2",
                    color: "#fff",
                    width: 80,
                    height: 80,
                    mb: 2,
                  }}
                >
                  {profileDetails.adminName.charAt(0)}
                </Avatar>
                <Typography variant="h5" fontWeight="bold">
                  {profileDetails.adminName}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {profileDetails.adminEmail}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Role: {profileDetails.role}
                </Typography>
              </>
            ) : (
              <Typography variant="body1" color="textSecondary">
                Loading profile information...
              </Typography>
            )}
          </Box>
        )}
        <Snackbar
          open={Boolean(successMessage)}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage("")}
          sx={{ bottom: 50 }}
        >
          <Alert
            onClose={() => setSuccessMessage("")}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
