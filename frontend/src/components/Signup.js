import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Styled components
const SignupContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5%',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  maxWidth: '500px',
  margin: '5% auto',
});

const SignupForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  padding: '12px',
  borderRadius: '8px',
  fontSize: '1rem',
  marginTop: '10px',
  textTransform: 'none',
});

const FooterLink = styled(Typography)({
  marginTop: '10px',
  fontSize: '0.875rem',
  color: '#007bff',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email address is required';
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === username || user.email === email);
    if (existingUser) {
      alert('User with the same username or email already exists');
      setLoading(false);
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    navigate('/login');
  };

  return (
    <SignupContainer>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Create an Account
        </Typography>
        <SignupForm>
          <StyledTextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <StyledTextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <StyledTextField
            label="Email Address"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
          <StyledTextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            error={!!errors.username}
            helperText={errors.username}
          />
          <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
          />
          <StyledTextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <StyledButton 
            variant="contained" 
            color="primary" 
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </StyledButton>
          <FooterLink align="center">
            Already have an account? <Button component={Link} to="/login" color="primary">Login</Button>
          </FooterLink>
        </SignupForm>
      </Container>
    </SignupContainer>
  );
};

export default Signup;
