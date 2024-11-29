import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Register.css"; // Import the updated CSS with unique class names

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/Sign/create",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError("Email already registered");
      } else {
        setError("An error occurred");
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="register-page-unique">
      <div className="register-container-unique">
        <h2 className="register-heading-unique">Create Your Account</h2>
        <form onSubmit={handleRegister} className="register-form-unique">
          <div className="form-group-unique">
            <div className="icon-container-unique">
              <FontAwesomeIcon icon={faUser} className="icon-unique" />
            </div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input-unique"
            />
          </div>

          <div className="form-group-unique">
            <div className="icon-container-unique">
              <FontAwesomeIcon icon={faUser} className="icon-unique" />
            </div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input-unique"
            />
          </div>

          <div className="form-group-unique">
            <div className="icon-container-unique">
              <FontAwesomeIcon icon={faEnvelope} className="icon-unique" />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-unique"
            />
          </div>

          <div className="form-group-unique">
            <div className="icon-container-unique">
              <FontAwesomeIcon icon={faLock} className="icon-unique" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-unique"
            />
          </div>

          <div className="form-group-unique">
            <div className="icon-container-unique">
              <FontAwesomeIcon icon={faLock} className="icon-unique" />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-unique"
            />
          </div>

          {error && <p className="error-message-unique">{error}</p>}

          <button type="submit" className="submit-button-unique">
            Sign Up
          </button>

          <div className="redirect-container-unique">
            <span className="redirect-text-unique">
              Already have an account?{" "}
              <span onClick={handleLoginRedirect} className="redirect-link-unique">
                Login
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
