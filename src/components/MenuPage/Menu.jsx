import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/feature/slices";

export default function Menu() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.productData.allProductData ?? [])

  // const handelcart = (product)=>{
  //   dispatch(addToCart(product))
  // }

  return (
    <>
      <div className="d-flex m-4 gap-4 justify-content-start">
        <Link to={'/roll'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Rolls.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link to={'/pizza'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Pizza.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link to={'/cake'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Cake.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link to={'/burger'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Burger.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link to={'/biryani'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./Biryani.avif" alt="" className="w-75" />
          </button>
        </Link>
        <Link to={'/north_indian'}>
          <button className="border-white rounded-circle bg-transparent">
            <img src="./North Indian.avif" alt="" className="w-75" />
          </button>
        </Link>
      </div>
      <h1 className="text-center m-5">Popular Deals </h1>
      <div className="card-container cont_margin">
        {productData.map((product, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-center m-3 p-3 border"
          >
            <img
              src={`/${product.image}`}
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
              <strong>quantity : </strong>
              {product.quantity}
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
            <button className="btn btn-success m-3" onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
