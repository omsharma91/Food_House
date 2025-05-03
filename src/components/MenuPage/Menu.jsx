import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menu() {
  const [productDatas, setProductData] = useState([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    axios.get("/Allproduct.json").then((response) => {
      setProductData(response.data);
    });
  }, []);
  return (
    <>
      <div className="d-flex m-4 gap-4 justify-content-start">
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Rolls.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Pizza.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Cake.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Burger.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Biryani.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./North Indian.avif" alt="" className="w-75" />
          </button>
        </Link>
      </div>
      <h1 className="text-center m-5">Popular Deals </h1>
      <div className="card-container cont_margin">
        {productDatas.map((product, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-center m-3 p-3 border"
          >
            <img
              src={`/${product.img}`}
              alt={product.name}
              className="img-fluid
            "
            />
            <p>
              <strong>Name of Dish : </strong>
              {product.name}
            </p>
            <p>
              <strong>In Stock : </strong>
              {product.stock}
            </p>
            <p>
              <strong>Price : </strong>
              {`Rs ${product.price}`}
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
            <button className="btn btn-success m-3">Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
