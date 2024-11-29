import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "Rs.999/month",
    description: "Access to all gym facilities",
    features: [
      "Access to gym equipment",
      "Free fitness assessment",
      "Basic group classes",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "Rs.1500/month",
    description: "Includes basic plan + 5 classes per month",
    features: [
      "All Basic Plan features",
      "5 additional group classes per month",
      "Access to specialized equipment",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "Rs.2500/month",
    description: "All features + personal trainer sessions",
    features: [
      "All Standard Plan features",
      "1 personal trainer session per week",
      "Access to premium classes",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handlePayNowClick = (price) => {
    const amount = price;
    navigate(`/payment`, { state: { amount } });
  };

  return (
    <Container>
      <section className="pricing-intro text-center my-5">
        <h1>Our Pricing Plans</h1>
        <p>
          Choose a plan that best fits your needs and start your fitness journey
          with us today!
        </p>
      </section>
      <div className="pricing-container d-flex justify-content-between my-5">
        {plans.map((plan) => (
          <div key={plan.id} className="pricing-card mx-1 d-block text-white">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.description}</p>
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="btn btn-primary mt-3"
              onClick={() => handlePayNowClick(plan.price)}
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pricing;
