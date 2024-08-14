import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Styled components
const FAQContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '0 20px',
});

const FAQItem = styled('div')({
  margin: '10px 0',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

const QuestionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
});

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'How do I create an account?', answer: 'Click on the Register button and fill out the form.' },
    { question: 'How can I reset my password?', answer: 'Click on the Forgot Password link on the login page.' },
    { question: 'Can I track my progress over time?', answer: 'Yes, use the Progress Tracking section to view your progress.' },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <QuestionContainer onClick={() => handleToggle(index)}>
              <Typography variant="h6">{faq.question}</Typography>
              <IconButton>
                {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </QuestionContainer>
            <Collapse in={openIndex === index}>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                {faq.answer}
              </Typography>
            </Collapse>
          </FAQItem>
        ))}
      </Container>
    </FAQContainer>
  );
};

export default FAQ;
