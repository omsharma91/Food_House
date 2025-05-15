// components/ProductCard.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Searchcard({ products }) {
  return (
    <div className="card h-100 p-3">
      <img
        src={products.image}
        alt={products.name}
        className="card-img-top"
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">In Stock: {products.stock}</p>
        <p className="card-text">Price: ₹{products.price}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-warning">
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </div>
          <a href="#" className="btn btn-outline-primary btn-sm">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
