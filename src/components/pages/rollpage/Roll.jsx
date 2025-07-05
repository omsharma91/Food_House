import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../assets/feature/slices";

export default function Productcard({ brand }) {
  const [filter, setFilter] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(true);

  const dispatch = useDispatch();

  const productData = useSelector(
    (state) => state.productData.allProductData ?? []
  );

  const filteredProducts = productData.filter(
    (dish) =>
      dish.category?.toLowerCase() === brand?.toLowerCase() &&
      (!minPrice || dish.price >= Number(minPrice)) &&
      (!maxPrice || dish.price <= Number(maxPrice)) &&
      (!inStockOnly || dish.stock > 0)
  );

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">{`Delicious ${brand} for you`}</h1>

      <div className="d-flex gap-3 mb-3 flex-wrap">
        <button
          onClick={() => setFilter((prev) => !prev)}
          className="btn btn-outline-secondary"
        >
          <i className="fa-solid fa-filter me-2"></i> {filter ? "Hide Filter" : "Show Filter"}
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fa-solid fa-sort me-2"></i> Sort By
        </button>
      </div>

      {filter && (
        <div className="card p-3 mb-4 shadow-sm" style={{ maxWidth: "300px" }}>
          <h5 className="mb-3">Filter Options</h5>
          <div className="mb-3">
            <label htmlFor="minPrice" className="form-label">Min Price</label>
            <input
              type="number"
              id="minPrice"
              className="form-control"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maxPrice" className="form-label">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              className="form-control"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
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
                setInStockOnly(true);
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
      )}

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((dish, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 p-3 border shadow-sm">
                <img
                  src={`/${dish.image}`}
                  alt={dish.name}
                  className="img-fluid mb-2"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <p><strong>Name:</strong> {dish.name}</p>
                <p><strong>In Stock:</strong> {dish.stock}</p>
                <p><strong>Price:</strong> Rs {dish.price}</p>
                <div className="d-flex justify-content-between mb-2">
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
                  className="btn btn-success w-100"
                  onClick={() => {
                    dispatch(addToCart(dish))
                    alert("added to cart")
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found for this brand or filter.</p>
        )}
      </div>
    </div>
  );
}
