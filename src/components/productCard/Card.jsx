import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Card() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get("/product.json").then((response) => {
      setDishes(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center m-5">Popular Deals </h1>
      <div className="card-container cont_margin">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-center m-3 p-3 border"
          >
            <img
              src={`/${dish.img}`}
              alt={dish.name}
              className="img-fluid
            "
            />
            <p>
              <strong>Name of Dish : </strong>
              {dish.name}
            </p>
            <p>
              <strong>In Stock : </strong>
              {dish.stock}
            </p>
            <p>
              <strong>Price : </strong>
              {`Rs ${dish.price}`}
            </p>
            <div className="d-flex justify-content-between ">
              <div>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <a href="">Order Now</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
