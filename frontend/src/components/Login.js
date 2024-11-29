import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, CircularProgress, Typography, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/Logins/create', { email, password });
      setSuccessMessage('Login Successful');
      navigate("/"); // Redirect to home after successful login
      setOpenSnackbar(true);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data); // Generic error message
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="login-container">
      <Paper className="login-paper">
        <Typography variant="h4" className="login-title">Login</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            error={!!error}
            helperText={error ? error : ' '}
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            error={!!error}
            helperText={error ? error : ' '}
            margin="normal"
          />

          {error && <div className="error-message">{error}</div>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            className="submit-button"
          >
            {loading ? <CircularProgress size={24} className="loading-spinner" /> : 'Login'}
          </Button>
        </form>

        <div className="signup-link">
          <Typography variant="body2">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </Typography>
        </div>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage}
      />
    </div>
  );
}

export default Login;
