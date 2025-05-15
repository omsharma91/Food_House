import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Customer() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    axios.get("/Productdata/customerReview.json").then((response) => {
      setReview(response.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-center m-5 p-5">What Customer Say About Us ?</h1>
      <div className="d-flex justify-content-center customer">
        {reviews.map((review, index) => (
          <div key={index} className="w-50 ">
            <div className="box bg-dark text-white m-5 pb-5 w-75">
              <img src={review.img} alt="" />
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>{review.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
