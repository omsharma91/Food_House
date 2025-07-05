import React from "react";
import "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Herosection.css"; 

export default function Herosection() {
  return (
    <div className="hero hero_content d-flex flex-column justify-content-center align-items-center text-white text-center px-3">
      <div className="w-100 w-md-75 mt-4 px-0 px-md-5">
        <h3 className="fw-bold myheading mb-4">
          Crafted with Love, Served with Elegance
        </h3>
        <p className="fs-6 fs-md-5">
          Indulge in a symphony of flavors where every dish is a tribute to
          Indian heritage, meticulously prepared using age-old recipes and
          premium ingredients — all in a setting that defines fine dining.
        </p>
      </div>

      <div className="buttonss d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-4 w-100">
        <button className="w-100 w-sm-50 w-md-25 bg-transparent text-white btn btn-success fs-5 hover-green">
          Our Menu
        </button>
        <button className="w-100 w-sm-50 w-md-25 bg-transparent text-white btn btn-success fs-5 hover-green">
          Our Drinks
        </button>
      </div>
    </div>
  );
}
