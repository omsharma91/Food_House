import React from "react";
import "../../App";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Herosection() {
  return (
      <div className="hero">
        <div className="hero_content">
          <div className="d-flex flex-column gap-4 text-white w-75 mt-5 mb-0 p-5">
            <h3 className="fw-bold myheading">Crafted with Love, Served with Elegance</h3>
            <p className="fs-5">
              Indulge in a symphony of flavors where every dish is a tribute to
              Indian heritage, meticulously prepared using age-old recipes and
              premium ingredients — all in a setting that defines fine dining.
            </p>
          </div>
        </div>
        <div className="buttonss">
          <button className="w-25 bg-transparent text-white btn btn-success fs-4 hover-green">Our Menu</button>
          <button className="w-25 bg-transparent text-white btn btn-success fs-4 hover-green">Our Drinks</button>
        </div>
      </div>
  );
}
