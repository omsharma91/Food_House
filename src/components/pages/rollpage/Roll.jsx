import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Roll() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("/Allproduct.json").then((response) => {
      setProductData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Delicious roll for you</h1>

      <div>
        <button className="p-1 w-6 bg-transparent">
          <i className="fa-solid fa-filter me-2"></i>
          Filter
        </button>
      </div>
      <div>
        <button className="p-1 w-6 bg-transparent">
          <i className="fa-solid fa-sort me-2"></i>
          Sort By
        </button>
      </div>

      <div>
        <h1 className="text-center m-5">Popular Deals</h1>
        <div className="card-container cont_margin">
          {productData
            .filter((dish) => dish.brand === "roll")
            .map((dish, index) => (
              <div
                key={index}
                className="d-flex flex-column justify-content-center m-3 p-3 border"
              >
                <img
                  src={`/${dish.img}`}
                  alt={dish.name}
                  className="img-fluid"
                />
                <p>
                  <strong>Name of Dish:</strong> {dish.name}
                </p>
                <p>
                  <strong>In Stock:</strong> {dish.stock}
                </p>
                <p>
                  <strong>Price:</strong> Rs {dish.price}
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <a href="#">Order Now</a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
