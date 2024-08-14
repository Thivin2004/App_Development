// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
// import "./Register.css"; // Import the CSS file

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       setError("All fields are required");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     // Store user details in local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = users.find((user) => user.email === email);
//     if (existingUser) {
//       setError("Email already registered");
//       return;
//     }

//     const newUser = { firstName, lastName, email, password };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));

//     // Redirect to login page on successful registration
//     navigate("/login");
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="page-container">
//       <div className="container">
//         <h2 className="heading">Register</h2>
//         <form onSubmit={handleRegister} className="form">
//           <div className="form-group">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faUser} className="icon" />
//             </div>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//               className="input"
//             />
//           </div>
//           <div className="form-group">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faUser} className="icon" />
//             </div>
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//               className="input"
//             />
//           </div>
//           <div className="form-group">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faEnvelope} className="icon" />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="input"
//             />
//           </div>
//           <div className="form-group">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faLock} className="icon" />
//             </div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="input"
//             />
//           </div>
//           <div className="form-group">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faLock} className="icon" />
//             </div>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="input"
//             />
//           </div>
//           {error && <p className="error">{error}</p>}
//           <button type="submit" className="button">
//             Sign Up
//           </button>
//           <div className="or-container">
//             <span className="or-text">--------or--------</span>
//           </div>
//           <div className="login-container">
//             <span className="login-text">
//               Already have an account?{" "}
//               <span onClick={handleLoginRedirect} className="login-link">
//                 Login
//               </span>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Register.css"; // Import the CSS file

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
        // Registration successful
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
    <div className="page-container">
      <div className="container-reg">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleRegister} className="form">
          <div className="form-group">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <div className="icon-container">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">
            Sign Up
          </button>
          <div className="or-container">
            <span className="or-text">--------or--------</span>
          </div>
          <div className="login-container">
            <span className="login-text">
              Already have an account?{" "}
              <span onClick={handleLoginRedirect} className="login-link">
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
