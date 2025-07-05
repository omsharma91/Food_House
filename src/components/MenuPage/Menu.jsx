import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../assets/feature/slices";

export default function Menu() {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state) => state.productData.allProductData ?? []
  );

  const categories = [
    { route: "/roll", img: "./Rolls.avif" },
    { route: "/pizza", img: "./Pizza.avif" },
    { route: "/cake", img: "./Cake.avif" },
    { route: "/burger", img: "./Burger.avif" },
    { route: "/biryani", img: "./Biryani.avif" },
    { route: "/north_indian", img: "./North Indian.avif" },
  ];

  return (
    <div className="container my-5">
      {/* Category Section */}
      <div className="row justify-content-center mb-5 g-3">
        {categories.map((cat, index) => (
          <div key={index} className="col-4 col-sm-2 text-center">
            <Link to={cat.route}>
              <button className="border-white rounded-circle bg-transparent">
                <img
                  src={cat.img}
                  alt=""
                  className="img-fluid rounded-circle border"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-center my-4">Popular Deals</h1>

      {/* Product Cards */}
      <div className="row">
        {productData.map((product, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
          >
            <div className="card flex-fill p-3 shadow-sm h-100">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="img-fluid rounded mb-2"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <p>
                <strong>Name of Dish:</strong> {product.name}
              </p>
              <p>
                <strong>In Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <p>
                <strong>Price:</strong> Rs {product.price}
              </p>
              <div className="d-flex justify-content-between mb-2 text-warning">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-regular fa-star"></i>
                ))}
              </div>
              <button
                className="btn btn-success w-100"
                onClick={() => {
                  dispatch(addToCart(product))
                  alert("added to cart")
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
