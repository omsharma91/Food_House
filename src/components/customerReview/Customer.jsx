import React, { useEffect, useState } from "react";
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
      <h1 className="text-center my-5 py-5">What Customers Say About Us?</h1>
      <div className="container">
        <div className="row justify-content-center">
          {reviews.map((review, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <div className="box bg-dark text-white p-4 rounded shadow w-100">
                <img src={review.img} alt="customer" className="img-fluid rounded-circle mb-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                <div className="text-center">
                  <div className="mb-2 text-warning">
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
      </div>
    </>
  );
}
