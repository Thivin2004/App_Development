import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

// Styled components
const TermsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '20px',
});

const TermsText = styled('div')({
  maxWidth: '800px',
  textAlign: 'justify',
  marginTop: '20px',
});

const SectionTitle = styled(Typography)({
  marginTop: '20px',
  marginBottom: '10px',
  fontWeight: 'bold',
});

const SectionContent = styled(Typography)({
  marginBottom: '20px',
});

const TermsConditions = () => {
  return (
    <TermsContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Terms and Conditions
        </Typography>
        <Divider style={{ width: '100%', marginBottom: '20px' }} />
        <TermsText>
          <SectionTitle variant="h6">Introduction</SectionTitle>
          <SectionContent variant="body1">
            Welcome to Fit Gym! These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Fit Gym if you do not agree to take all of the terms and conditions stated on this page.
          </SectionContent>

          <SectionTitle variant="h6">Use of Our Website</SectionTitle>
          <SectionContent variant="body1">
            By using our website, you agree to comply with the following terms:
            <ul>
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree to provide accurate and complete information when registering.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            </ul>
          </SectionContent>

          <SectionTitle variant="h6">Intellectual Property</SectionTitle>
          <SectionContent variant="body1">
            All content, trademarks, and other intellectual property on this website are owned by Fit Gym or its licensors. You may not reproduce, distribute, or otherwise use any content from this site without our express written permission.
          </SectionContent>

          <SectionTitle variant="h6">Limitation of Liability</SectionTitle>
          <SectionContent variant="body1">
            Fit Gym will not be liable for any damages or losses arising from your use of the website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
          </SectionContent>

          <SectionTitle variant="h6">Changes to Terms</SectionTitle>
          <SectionContent variant="body1">
            We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are made constitutes your acceptance of the new terms.
          </SectionContent>

          <SectionTitle variant="h6">Contact Us</SectionTitle>
          <SectionContent variant="body1">
            If you have any questions about these terms and conditions, please contact us at <a href="mailto:support@fitgym.com">support@fitgym.com</a>.
          </SectionContent>
        </TermsText>
      </Container>
    </TermsContainer>
  );
};

export default TermsConditions;
