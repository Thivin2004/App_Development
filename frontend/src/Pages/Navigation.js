// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { styled } from '@mui/system';

// // Styled Link component
// const StyledLink = styled(Link)({
//   color: 'white',
//   textDecoration: 'none',
//   margin: '0 10px',
// });

// // Styled Button component for consistent styling
// const NavButton = styled(Button)({
//   color: 'white',
//   textTransform: 'none', // Avoid uppercase text transformation
//   margin: '0 10px', // Add margin for spacing
//   '&:hover': {
//     backgroundColor: '#444', // Slightly darker on hover
//   },
// });

// const Navigation = () => {
//   return (
//     <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           FitTrack Gym
//         </Typography>
//         {/* <NavButton>
//           <StyledLink to="/">Home</StyledLink>
//         </NavButton> */}
//         {/* <NavButton>
//           <StyledLink to="/about-us">About Us</StyledLink>
//         </NavButton> */}
//         <NavButton>
//           <StyledLink to="/pricing">Pricing</StyledLink>
//         </NavButton>
//         <NavButton>
//           <StyledLink to="/contact-us">Contact Us</StyledLink>
//         </NavButton>
//         <NavButton>
//           <StyledLink to="/login">Login</StyledLink>
//         </NavButton>
//         <NavButton>
//           <StyledLink to="/signup">Signup</StyledLink>
//         </NavButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Styled Link component
const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
});

const NavButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: '#444',
  },
});

const Navigation = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FitTrack Gym
        </Typography>
        <NavButton>
          <StyledLink to="/">Home</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/pricing">Pricing</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/contact-us">Contact Us</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/login">Login</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/signup">Signup</StyledLink>
        </NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
