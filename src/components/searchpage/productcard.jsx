import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/feature/slices";

export default function Searchcard({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={products.image || "/placeholder.png"}
        alt={products.name}
        className="card-img-top"
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{products.name}</h5>
          <p className="card-text mb-1">In Stock: {products.stock}</p>
          <p className="card-text">Price: ₹{products.price}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-warning">
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </div>
          <button
            onClick={() => dispatch(addToCart(products))}
            className="btn btn-outline-primary btn-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
