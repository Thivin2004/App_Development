import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
    setShowContainer(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/Logins/create",
        { email, password }
      );

      if (response.status === 201) {
        localStorage.setItem("loggedInUser", email);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage("Email already exists.");
        } else if (error.response.status === 400) {
          setErrorMessage("Invalid input. Please check your details.");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    alert("Logged out successfully");
  };

  const handleSignUpRedirect = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`pageContainer ${showContainer ? "" : "hidden"}`}>
      <div className="container-login">
        {isLoggedIn ? (
          <div className="loggedInContainer">
            <p>You are logged in as {localStorage.getItem("loggedInUser")}</p>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="heading">Login</h2>
            <form onSubmit={handleLogin} className="form">
              <div className="formGroup">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="formGroup">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faLock} className="icon" />
                </div>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  required
                />
                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEye : faEyeSlash}
                  className="togglePassword"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="rememberMeContainer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="rememberMeCheckbox"
                />
                <label>Remember Me</label>
              </div>
              {errorMessage && (
                <div className="errorMessage">{errorMessage}</div>
              )}
              <button type="submit" className="button" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="orContainer">
              <p className="orText">OR</p>
            </div>
            <p className="forgotPasswordLink" onClick={handleForgotPassword}>
              Forgot Password?
            </p>
            <div className="signUpContainer">
              <p className="signUpText">
                Don't have an account?{" "}
                <span className="signUpLink" onClick={handleSignUpRedirect}>
                  Create a new account
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
