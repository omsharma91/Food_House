import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, allProduct } from "../../assets/feature/slices";
import axios from "axios";

export default function Card() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("./Productdata/allProduct.json").then((response) => {
      dispatch(allProduct(response.data));
    });
  }, [dispatch]);

  const productData = useSelector(
    (state) => state.productData.allProductData ?? []
  );

  return (
    <>
      <h1 className="text-center my-5">Popular Deals</h1>
      <div className="container">
        <div className="row justify-content-evenly">
          {productData.slice(0, 8).map((dish, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4"
            >
              <div className="border p-3 w-100 d-flex flex-column justify-content-between">
                <img
                  src={`/${dish.image}`}
                  alt={dish.name}
                  className="img-fluid mb-3"
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
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="text-warning">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <a href="#" onClick={()=>{
                    dispatch(addToCart(dish))
                    alert("added to cart")
                  }} className="text-decoration-none">
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
