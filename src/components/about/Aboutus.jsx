import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate()
  function handelMenu(){
    navigate('/menu')
  }
  return (
    <div>
      <div className="aboutus ">
        <h1 className="text-light">About Us.</h1>
        <div className="w-50 m-3 text-info">
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
            trusted by users from around the world. Were proud of what we've
            built, and even more excited about whats coming next.
          </p>             
          <p>
            Thank you for being part of our story. Let's build something amazing
            together.
          </p>
        </div>
        <button onClick={handelMenu}>Our Menu</button>
      </div>
    </div>
  );
}
