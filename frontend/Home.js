// // import React from 'react';
// // import { styled } from '@mui/system';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { Link } from 'react-router-dom';
// // import GymImage from './Images/GymImage.jpeg'; 

// // const HomeContainer = styled('div')({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   marginTop: '80px',
// //   padding: '20px',
// //   background: '#f4f4f4', 
// // });

// // const HeroContent = styled('div')({
// //   textAlign: 'center',
// //   padding: '30px',
// // });

// // const ImageContainer = styled('div')({
// //   display: 'flex',
// //   justifyContent: 'center',
// //   marginBottom: '20px',
// //   borderRadius: '8px',
// //   overflow: 'hidden',
// // });

// // const Image = styled('img')({
// //   width: '100%',
// //   height: 'auto',
// //   maxWidth: '500px',
// // });

// // const ButtonContainer = styled('div')({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   marginTop: '20px',
// // });

// // const StyledButton = styled(Link)({
// //   textDecoration: 'none',
// //   margin: '10px',
// //   padding: '10px 20px',
// //   color: '#fff',
// //   backgroundColor: '#00bcd4',
// //   borderRadius: '8px',
// //   fontWeight: 'bold',
// //   fontSize: '16px',
// //   textTransform: 'uppercase',
// //   transition: 'background-color 0.3s, transform 0.3s', // Smooth transition
// //   '&:hover': {
// //     backgroundColor: '#0097a7',
// //     transform: 'scale(1.05)', 
// //   },
// //   '&:active': {
// //     backgroundColor: '#00796b', 
// //   },
// // });

// // const ProfileButton = styled(StyledButton)({
// //   backgroundColor: '#ff5722',
// //   '&:hover': {
// //     backgroundColor: '#e64a19',
// //   },
// // });
// // const Home = () => {
// //   const userId = 'some-user-id'; 

// //   return (
// //     <HomeContainer>
// //       <HeroContent>
// //         <Container maxWidth="md">
// //           <Typography variant="h3" align="center" color="#00bcd4" gutterBottom>
// //             Welcome to FitTrack Gym
// //           </Typography>
// //           <Typography variant="h5" align="center" color="#333" paragraph>
// //             Your journey to a healthier, stronger you starts here!
// //           </Typography>
// //           <Typography variant="body1" align="center" color="#666" paragraph>
// //             Explore our services to achieve your fitness goals with the best support and facilities.
// //           </Typography>
// //         </Container>
// //       </HeroContent>
// //       <ImageContainer>
// //         <Image src={GymImage} alt="Fit Gym" />
// //       </ImageContainer>
// //       <ButtonContainer>
// //         <StyledButton to="/goal-setting">Goal Setting</StyledButton>
// //         <StyledButton to="/nutrition-diet">Nutrition</StyledButton>
// //         <StyledButton to="/progress-tracking">Progress Tracking</StyledButton>
// //         <StyledButton to="/workout-plans">Workout Plans</StyledButton>
// //         <ProfileButton to={`/profile/${userId}`}>My Profile</ProfileButton>
// //       </ButtonContainer>
// //     </HomeContainer>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import GymImage from './Images/GymImage.jpeg'; 
// import GymPic from './Images/GymPic.jpeg'; 
// import './Home.css'; // Import the external CSS file

// const Home = () => {
//   const userId = 'some-user-id'; 

//   return (
//     <div className="home-container">
//       <div className="hero-content">
//         <h1 className="hero-title">Welcome to FitTrack Gym</h1>
//         <h2 className="hero-subtitle">Your journey to a healthier, stronger you starts here!</h2>
//         <p className="hero-description">
//           Explore our services to achieve your fitness goals with the best support and facilities.
//         </p>
//       </div>
//       {/* <div className="image-container">
//         <img src={GymImage} alt="Fit Gym" className="image" />
//       </div> */}
//       <div className="button-container">
//         <Link to="/goal-setting" className="styled-button">Goal Setting</Link>
//         <Link to="/nutrition-diet" className="styled-button">Nutrition</Link>
//         <Link to="/progress-tracking" className="styled-button">Progress Tracking</Link>
//         <Link to="/workout-plans" className="styled-button">Workout Plans</Link>
        
//         {/* <Link to={`/profile/${userId}`} className="profile-button">My Profile</Link> */}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the external CSS file
import GymImage from './Images/GymImage.jpeg';
const Home = () => {
  const userId = 'some-user-id'; 

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to FitTrack Gym</h1>
        <h2 className="hero-subtitle">Your journey to a healthier, stronger you starts here!</h2>
        <p className="hero-description">
          Explore our services to achieve your fitness goals with the best support and facilities.
        </p>
      </div>
      <div className="image-container">
        <img src={GymImage} alt="Fit Gym" className="image" />
      </div>
      <div className="button-container">
        <Link to="/goal-setting" className="styled-button">Goal Setting</Link>
        <Link to="/nutrition-diet" className="styled-button">Nutrition</Link>
        <Link to="/progress-tracking" className="styled-button">Progress Tracking</Link>
        <Link to="/workout-plans" className="styled-button">Workout Plans</Link>
      </div>
    </div>
  );
};

export default Home;
