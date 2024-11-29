import React from "react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Classes.css';

export default function Classes() {
  let navigate = useNavigate();
  const { classes } = useSelector((state) => state.classes);

  return (
    <div>
      <div className="classes-container">
        <h1>Our Classes</h1>
        <div className="classes-grid">
          {classes?.map((item) => (
            <div
              style={{ backgroundImage: `url("${item.photo}")` }}
              className="class-card"
              key={item.key}
              onClick={() => navigate(`/class/${item.key}`)}
            >
              <h5 className="class-title">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
