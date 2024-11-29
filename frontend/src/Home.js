import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the external CSS file
import GymImage from "./Images/GymImage.jpeg";
const Home = () => {
  const userId = "some-user-id";

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to FitTrack Gym</h1>
        <h2 className="hero-subtitle">
          Your journey to a healthier, stronger you starts here!
        </h2>
        <p className="hero-description">
          Explore our services to achieve your fitness goals with the best
          support and facilities.
        </p>
      </div>
      <div className="image-container">
        <img src={GymImage} alt="Fit Gym" className="image" />
      </div>
      <div className="button-container">
        <Link to="/progress-tracking" className="styled-button">
          Progress Tracking
        </Link>
        <Link to="/goal-setting" className="styled-button">
          Goal Setting
        </Link>
        <Link to="/nutrition-diet" className="styled-button">
          Nutrition
        </Link>
        <Link to="/workout-plans" className="styled-button">
          Workout Plans
        </Link>
      </div>
    </div>
  );
};

export default Home;
