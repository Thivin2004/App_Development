import axios from 'axios';
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  maxWidth: '600px',
});

const ContactDetails = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  marginBottom: '40px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const StyledButton = styled(Button)({
  padding: '10px',
  borderRadius: '8px',
  fontSize: '1rem',
});

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact/submit', contactData);
      console.log(response.data);
      // Handle successful form submission
    } catch (error) {
      console.error(error);
      // Handle form submission error
    }
  };

  return (
    <ContactContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactDetails>
              <Typography variant="h6" gutterBottom>
                Our Contact Details
              </Typography>
              <Box className="contact-details">
                <ul>
                  <li>
                    <strong>Address:</strong> 123 Fitness Street, Gym City, FIT 45678
                  </li>
                  <li>
                    <strong>Phone:</strong> +1 234 567 890
                  </li>
                  <li>
                    <strong>Email:</strong> support@fittrack.com
                  </li>
                  <li>
                    <strong>Website:</strong> <a href="https://www.fittrack.com" target="_blank" rel="noopener noreferrer">www.fittrack.com</a>
                  </li>
                </ul>
              </Box>
            </ContactDetails>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm onSubmit={handleSubmit}>
              <StyledTextField
                label="Name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <StyledTextField
                label="Email"
                name="email"
                type="email"
                value={contactData.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <StyledTextField
                label="Subject"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                required
                fullWidth
              />
              <StyledTextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={contactData.message}
                onChange={handleChange}
                required
                fullWidth
              />
              <StyledButton type="submit" variant="contained" color="primary">
                Send Message
              </StyledButton>
            </ContactForm>
          </Grid>
        </Grid>
      </Container>
    </ContactContainer>
  );
};

export default ContactUs;
