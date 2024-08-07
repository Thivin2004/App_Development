import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
});
const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  maxWidth: '400px',
});
const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});
const StyledButton = styled(Button)({
  padding: '10px',
  borderRadius: '8px',
  fontSize: '1rem',
  textTransform: 'none',
});
const GoogleButton = styled(StyledButton)({
  backgroundColor: '#4285f4',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#357ae8',
  },
});
const FacebookButton = styled(StyledButton)({
  backgroundColor: '#3b5998',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2d4373',
  },
});
const RecentLoginsContainer = styled('div')({
  marginTop: '20px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  textAlign: 'center',
  width: '100%',
  maxWidth: '400px',
});
const RecentLoginItem = styled('div')({
  margin: '5px 0',
  padding: '10px',
  border: '1px solid #eee',
  borderRadius: '8px',
  backgroundColor: '#f4f4f4',
});
const SignupLink = styled(Typography)({
  marginTop: '10px',
  fontSize: '0.875rem',
  color: '#007bff',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recentLogins, setRecentLogins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const logins = JSON.parse(localStorage.getItem('recentLogins')) || [];
    setRecentLogins(logins);
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      const newLogins = [username, ...recentLogins.filter(login => login !== username)].slice(0, 5);
      localStorage.setItem('recentLogins', JSON.stringify(newLogins));
      setRecentLogins(newLogins);

      alert('Login successful');
      if (onLogin) onLogin(user);
      navigate('/');
    } else alert('Invalid username or password');
  };

  const handleGoogleLogin = () => alert('Google login functionality not implemented yet.');

  const handleFacebookLogin = () => alert('Facebook login functionality not implemented yet.');

  const handleSignUpClick = () => navigate('/signup');

  return (
    <LoginContainer>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom>Login</Typography>
        <LoginForm>
          <StyledTextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
          <StyledTextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <StyledButton variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</StyledButton>
          <Typography variant="body2" align="center">
            Forget password? <Link href="#">Reset your password</Link>
          </Typography>
          <GoogleButton variant="contained" onClick={handleGoogleLogin} startIcon={<FaGoogle />} fullWidth>Login with Google</GoogleButton>
          <FacebookButton variant="contained" onClick={handleFacebookLogin} startIcon={<FaFacebook />} fullWidth>Login with Facebook</FacebookButton>
        </LoginForm>
        <SignupLink onClick={handleSignUpClick} align="center">Don't have an account? Create a new account</SignupLink>
        {recentLogins.length > 0 && (
          <RecentLoginsContainer>
            <Typography variant="h6">Recently Used Accounts</Typography>
            {recentLogins.length > 0 ? recentLogins.map((login, index) => (
              <RecentLoginItem key={index}>{login}</RecentLoginItem>
            )) : (
              <Typography variant="body2">No recent logins found.</Typography>
            )}
          </RecentLoginsContainer>
        )}
      </Container>
    </LoginContainer>
  );
};

export default Login;
