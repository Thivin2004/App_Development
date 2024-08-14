import React, { useState } from "react";
import "./PersonalTrainer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import PT from "../Images/Personal_Trainers/PT.jpeg";
import PT2 from "../Images/Personal_Trainers/PT2.jpeg";
import PT3 from "../Images/Personal_Trainers/PT3.jpeg";
import PT4 from "../Images/Personal_Trainers/PT4.jpeg";
import PT5 from "../Images/Personal_Trainers/PT5.jpeg";
import PT6 from "../Images/Personal_Trainers/PT6.jpeg"; 
import PT7 from "../Images/Personal_Trainers/PT7.jpeg"; 
import PT8 from "../Images/Personal_Trainers/PT8.jpeg"; 

const trainers = [
  {
    name: "John Doe",
    specialty: "Strength Training",
    experience: "10 years",
    bio: "John is a certified strength coach with a passion for helping people reach their full potential. His personalized training plans focus on muscle growth and overall fitness improvement.",
    image: PT,
    social: {
      facebook: "https://facebook.com/john-doe",
      twitter: "https://twitter.com/john-doe",
      instagram: "https://instagram.com/john-doe",
    },
  },
  {
    name: "Jane Smith",
    specialty: "Yoga and Flexibility",
    experience: "8 years",
    bio: "Jane is an expert yoga instructor specializing in flexibility and mindfulness. She offers personalized sessions to help clients achieve both mental and physical balance.",
    image: PT2,
    social: {
      facebook: "https://facebook.com/jane-smith",
      twitter: "https://twitter.com/jane-smith",
      instagram: "https://instagram.com/jane-smith",
    },
  },
  {
    name: "Mike Johnson",
    specialty: "Cardio Training",
    experience: "7 years",
    bio: "Mike is known for his high-intensity cardio workouts that improve cardiovascular health and stamina. His dynamic sessions are perfect for those looking to boost their endurance and lose weight.",
    image: PT3,
    social: {
      facebook: "https://facebook.com/mike-johnson",
      twitter: "https://twitter.com/mike-johnson",
      instagram: "https://instagram.com/mike-johnson",
    },
  },
  {
    name: "Emma Brown",
    specialty: "Pilates and Core",
    experience: "6 years",
    bio: "Emma is a Pilates specialist focusing on core strength and stability. Her sessions help clients build a strong foundation and enhance overall body control.",
    image: PT4,
    social: {
      facebook: "https://facebook.com/emma-brown",
      twitter: "https://twitter.com/emma-brown",
      instagram: "https://instagram.com/emma-brown",
    },
  },
  {
    name: "Liam Davis",
    specialty: "CrossFit",
    experience: "5 years",
    bio: "Liam is a CrossFit coach who combines functional training with strength-building techniques. His high-energy workouts are designed to challenge and transform your fitness levels.",
    image: PT5,
    social: {
      facebook: "https://facebook.com/liam-davis",
      twitter: "https://twitter.com/liam-davis",
      instagram: "https://instagram.com/liam-davis",
    },
  },
  {
    name: "Sophia Lee",
    specialty: "Nutrition and Wellness",
    experience: "9 years",
    bio: "Sophia is a nutritionist who focuses on integrating healthy eating habits with fitness routines. She offers personalized diet plans to complement your training goals.",
    image: PT6,
    social: {
      facebook: "https://facebook.com/sophia-lee",
      twitter: "https://twitter.com/sophia-lee",
      instagram: "https://instagram.com/sophia-lee",
    },
  },
  {
    name: "Ethan Wright",
    specialty: "Sports Conditioning",
    experience: "7 years",
    bio: "Ethan specializes in sports conditioning, helping athletes enhance their performance and reduce injury risk. His training methods are tailored to the specific needs of various sports.",
    image: PT7,
    social: {
      facebook: "https://facebook.com/ethan-wright",
      twitter: "https://twitter.com/ethan-wright",
      instagram: "https://instagram.com/ethan-wright",
    },
  },
  {
    name: "Olivia Martinez",
    specialty: "Kickboxing",
    experience: "6 years",
    bio: "Olivia is a kickboxing instructor who combines combat training with fitness to help clients build strength and agility. Her high-energy classes are both challenging and rewarding.",
    image: PT8,
    social: {
      facebook: "https://facebook.com/olivia-martinez",
      twitter: "https://twitter.com/olivia-martinez",
      instagram: "https://instagram.com/olivia-martinez",
    },
  },
];

const PersonalTrainer = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const handleFilterChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const filteredTrainers = trainers.filter(
    (trainer) =>
      selectedSpecialty === "All" || trainer.specialty === selectedSpecialty
  );

  return (
    <div className="personal-trainer-container">
      <h2 className="personal-trainer-title">Meet Our Elite Trainers</h2>
      <div className="filter-container">
        <label htmlFor="specialty-filter" className="filter-label">
          Filter by Specialty:
        </label>
        <select
          id="specialty-filter"
          value={selectedSpecialty}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Strength Training">Strength Training</option>
          <option value="Yoga and Flexibility">Yoga and Flexibility</option>
          <option value="Cardio Training">Cardio Training</option>
          <option value="Pilates and Core">Pilates and Core</option>
          <option value="CrossFit">CrossFit</option>
          <option value="Nutrition and Wellness">Nutrition and Wellness</option>
          <option value="Sports Conditioning">Sports Conditioning</option>
          <option value="Kickboxing">Kickboxing</option> {/* Added new specialty */}
        </select>
      </div>
      <div className="trainers-grid">
        {filteredTrainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="trainer-image"
            />
            <h3 className="trainer-name">{trainer.name}</h3>
            <p className="trainer-specialty">{trainer.specialty}</p>
            <p className="trainer-experience">
              {trainer.experience} of Experience
            </p>
            <p className="trainer-bio">{trainer.bio}</p>
            <div className="trainer-social">
              <a
                href={trainer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="trainer-social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href={trainer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="trainer-social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href={trainer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="trainer-social-icon"
              >
                <FaInstagram />
              </a>
            </div>
            <button className="contact-button">Contact {trainer.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTrainer;
