import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Productcard({ brand }) {
  const [filter, setFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(true);
  const dispatch = useDispatch();
  const productData = useSelector(
    (state) => state.productData.allProductData ?? []
  );
  console.log(productData);
  return (
    <div>
      <h1 className="text-center m-3">{`Delicious ${brand} for you`}</h1>
      <div className="d-flex gap-2 m-2">
        <div>
          {filter ? (
            <div className="card p-3 m-3 shadow" style={{ maxWidth: "300px" }}>
              <h5 className="mb-3">Filter Options</h5>
              <div className="mb-3">
                <label htmlFor="minPrice" className="form-label">
                  Min Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  className="form-control"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="maxPrice" className="form-label">
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  className="form-control"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inStockOnly"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="inStockOnly">
                  In Stock Only
                </label>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {
                    setMinPrice("");
                    setMaxPrice("");
                    setInStockOnly(false);
                  }}
                >
                  Clear
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => setFilter(false)}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setFilter(true)}
              className="p-1 w-6 bg-transparent"
            >
              <i className="fa-solid fa-filter me-2"></i>
              Filter
            </button>
          )}
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
            .filter(
              (dish) =>
                (!minPrice || dish.price >= minPrice) &&
                (!maxPrice || dish.price <= maxPrice)
            )
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
                <button
                  className="btn btn-success m-3"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
