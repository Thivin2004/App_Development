import React from "react";
import "./Testimonials.css";
import img1 from "../../Images/Testimonialimage.jpg";
import img2 from "../../Images/Testimonialimage2.jpg";
import img3 from "../../Images/Testimonialimage3.jpg";
import img4 from "../../Images/Testimonialimage4.jpg";
import img5 from "../../Images/Testimonialimage5.jpeg";
import img6 from "../../Images/Testimonialimage6.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      image: img1,
      quote:
        "This gym has completely transformed my life! The trainers are knowledgeable, and the community is so supportive. I’ve never felt better.",
    },
    {
      name: "Jane Smith",
      title: "Marketing Specialist",
      image: img2,
      quote:
        "I love the variety of workout plans available here. The yoga classes are my favorite, and I’ve seen great results in my flexibility and strength.",
    },
    {
      name: "Mike Johnson",
      title: "Entrepreneur",
      image: img3,
      quote:
        "The personal trainers here are top-notch! They push me to my limits, and I’ve achieved fitness goals I never thought possible.",
    },
    {
      name: "Emily Davis",
      title: "Graphic Designer",
      image: img4,
      quote:
        "The atmosphere at this gym is amazing! The equipment is top quality, and I’ve made so many new friends. It’s become my second home.",
    },
    {
      name: "Chris Brown",
      title: "Accountant",
      image: img5,
      quote:
        "Thanks to the nutrition plans, I’ve lost 20 pounds in just 3 months. The support from the trainers and staff has been incredible.",
    },
    {
      name: "Sophia Wilson",
      title: "Student",
      image: img6,
      quote:
        "As a student, I needed a gym that offered flexibility with my schedule. This gym has it all – great classes, knowledgeable trainers, and a supportive environment.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="client-image"
          />
          <h3 className="client-name">{testimonial.name}</h3>
          <p className="client-title">{testimonial.title}</p>
          <p className="client-quote">"{testimonial.quote}"</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
