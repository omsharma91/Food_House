import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Productcard({brand}) {

  const productData = useSelector((state) => state.productData.allProductData ?? []);
  
  return (

    <div>
      <h1 className="text-center m-3">{`Delicious ${brand} for you`}</h1>
      <div className="d-flex gap-2 m-2">
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
      </div>

      <div>
        <div className="card-container m-5">
          {productData
            .filter((dish) => dish.category === `${brand}`)
            .map((dish, index) => (
              <div
                key={index}
                className="d-flex flex-column justify-content-center m-3 p-3 border"
              >
                <img
                  src={`/${dish.image}`}
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
