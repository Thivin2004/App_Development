// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
// // import './ContactUs.css'; // Import the updated CSS

// // const ContactUs = () => {
// //   const [contactData, setContactData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: '',
// //   });

// //   const handleChange = (e) => {
// //     setContactData({ ...contactData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/api/contact/submit', contactData);
// //       console.log(response.data);
// //       // Handle successful form submission
// //     } catch (error) {
// //       console.error(error);
// //       // Handle form submission error
// //     }
// //   };

// //   return (
// //     <div className="contact-container">
// //       <Container maxWidth="md">
// //         <Typography variant="h4" gutterBottom>
// //           Contact Us
// //         </Typography>
// //         <Grid container spacing={4}>
// //           <Grid item xs={12} md={6}>
// //             <div className="contact-details">
// //               <Typography variant="h6" gutterBottom>
// //                 Our Contact Details
// //               </Typography>
// //               <ul>
// //                 <li>
// //                   <strong>Address:</strong> 123 Fitness Street, Coimbatore
// //                 </li>
// //                 <li>
// //                   <strong>Phone:</strong> 9344802190
// //                 </li>
// //                 <li>
// //                   <strong>Email:</strong> <a href="mailto:support@fittrack.com">support@fittrack.com</a>
// //                 </li>
// //                 <li>
// //                   <strong>Website:</strong> <a href="https://www.fittrack.com" target="_blank" rel="noopener noreferrer">www.fittrack.com</a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <form className="contact-form" onSubmit={handleSubmit}>
// //               <TextField
// //                 label="Name"
// //                 name="name"
// //                 value={contactData.name}
// //                 onChange={handleChange}
// //                 required
// //                 fullWidth
// //                 className="styled-text-field"
// //               />
// //               <TextField
// //                 label="Email"
// //                 name="email"
// //                 type="email"
// //                 value={contactData.email}
// //                 onChange={handleChange}
// //                 required
// //                 fullWidth
// //                 className="styled-text-field"
// //               />
// //               <TextField
// //                 label="Subject"
// //                 name="subject"
// //                 value={contactData.subject}
// //                 onChange={handleChange}
// //                 required
// //                 fullWidth
// //                 className="styled-text-field"
// //               />
// //               <TextField
// //                 label="Message"
// //                 name="message"
// //                 multiline
// //                 rows={4}
// //                 value={contactData.message}
// //                 onChange={handleChange}
// //                 required
// //                 fullWidth
// //                 className="styled-text-field"
// //               />
// //               <Button type="submit" variant="contained" className="styled-button">
// //                 Send Message
// //               </Button>
// //             </form>
// //           </Grid>
// //         </Grid>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default ContactUs;
// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
// import './ContactUs.css'; // Import the updated CSS

// const ContactUs = () => {
//   const [contactData, setContactData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form submission logic here
//     console.log('Form submitted:', contactData);
//   };

//   return (
//     <div className="contact-container">
//       <Container maxWidth="lg">
//         <Paper elevation={6} className="contact-paper">
//           <Typography variant="h4" gutterBottom className="contact-header">
//             Contact Us
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <div className="contact-details">
//                 <Typography variant="h6" gutterBottom className="details-header">
//                   Our Contact Details
//                 </Typography>
//                 <ul className="details-list">
//                   <li><strong>Address:</strong> 123 Fitness Street, Coimbatore</li>
//                   <li><strong>Phone:</strong> 9344802190</li>
//                   <li><strong>Email:</strong> <a href="mailto:support@fittrack.com">support@fittrack.com</a></li>
//                   <li><strong>Website:</strong> <a href="https://www.fittrack.com" target="_blank" rel="noopener noreferrer">www.fittrack.com</a></li>
//                 </ul>
//               </div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <form className="contact-form" onSubmit={handleSubmit}>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   value={contactData.name}
//                   onChange={handleChange}
//                   required
//                   fullWidth
//                   className="styled-text-field"
//                 />
//                 <TextField
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={contactData.email}
//                   onChange={handleChange}
//                   required
//                   fullWidth
//                   className="styled-text-field"
//                 />
//                 <TextField
//                   label="Subject"
//                   name="subject"
//                   value={contactData.subject}
//                   onChange={handleChange}
//                   required
//                   fullWidth
//                   className="styled-text-field"
//                 />
//                 <TextField
//                   label="Message"
//                   name="message"
//                   multiline
//                   rows={4}
//                   value={contactData.message}
//                   onChange={handleChange}
//                   required
//                   fullWidth
//                   className="styled-text-field"
//                 />
//                 <Button type="submit" variant="contained" className="styled-button">
//                   Send Message
//                 </Button>
//               </form>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default ContactUs;
import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import "./ContactUs.css"; // Import the updated CSS

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/contact/create",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Message sent successfully:", response.data);
      alert("Your message has been sent!");
      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <Container maxWidth="lg">
        <Paper elevation={6} className="contact-paper">
          <Typography variant="h4" gutterBottom className="contact-header">
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="contact-details">
                <Typography
                  variant="h6"
                  gutterBottom
                  className="details-header"
                >
                  Our Contact Details
                </Typography>
                <ul className="details-list">
                  <li>
                    <strong>Address:</strong> 123 Fitness Street, Coimbatore
                  </li>
                  <li>
                    <strong>Phone:</strong> 9344802190
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:support@fittrack.com">
                      support@fittrack.com
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.fittrack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.fittrack.com
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  className="styled-text-field"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  className="styled-text-field"
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleChange}
                  required
                  fullWidth
                  className="styled-text-field"
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={contactData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  className="styled-text-field"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="styled-button"
                >
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactUs;
