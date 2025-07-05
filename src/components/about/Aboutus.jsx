import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutus.css"; 

export default function Aboutus() {
  const navigate = useNavigate();
  
  function handelMenu() {
    navigate('/menu');
  }

  return (
    <div className="aboutus text-light d-flex flex-column align-items-center justify-content-center p-4">
      <h1 className="text-center mb-4">About Us.</h1>
      <div className="text-info w-100 w-md-75 w-lg-50 mb-4">
        <p>
          Welcome to food house – where passion meets purpose. We're
          a team of creative minds and tech enthusiasts dedicated to building
          innovative solutions that simplify lives and deliver value.
        </p>
        <p>
          Since our inception, we've been driven by one goal: to make quality
          products and services accessible to everyone. Whether it's through
          design, development, or content, we believe in creating with heart
          and precision.
        </p>
        <p>
          Our journey started with a simple idea and grew into a platform
          trusted by users from around the world. We're proud of what we've
          built, and even more excited about what's coming next.
        </p>             
        <p>
          Thank you for being part of our story. Let's build something amazing
          together.
        </p>
      </div>
      <button onClick={handelMenu} className="btn btn-success px-4 py-2">
        Our Menu
      </button>
    </div>
  );
}
