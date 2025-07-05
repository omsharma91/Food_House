import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="fs-2 mb-3">Food__House</h3>
            <p className="fs-6">
              FoodHouse is a place where flavors meet feelings. Every dish is
              prepared with love, using fresh ingredients to bring you the
              warmth of a home-cooked meal. Whether you're craving a hearty
              breakfast, a quick lunch, or a cozy dinner, FoodHouse promises
              comfort in every bite.
            </p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <p className="fw-bold">Quick Links</p>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Food</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <p className="fw-bold">Useful</p>
            <ul className="list-unstyled">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
            </ul>
          </div>          
          <div className="col-12 col-md-6 col-lg-5">
            <p className="fw-bold">Contact Us</p>
            <ul className="list-unstyled">
              <li>Amsing Jorabat, Guwahati, Kamrup Metro, Assam, India</li>
              <li>+91 8812839964</li>
              <li>oms570480@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
