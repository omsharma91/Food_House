import React from "react";

export default function Footer() {
  return (
    <div className="d-flex justify-content-between gap-5  bg-dark text-white p-5">
      <div className="text-justify w-25 ">
        <h3 className="fs-2 mb-4">Food__House</h3>
        <p className="fs-6">
          FoodHouse is a place where flavors meet feelings. Every dish is
          prepared with love, using fresh ingredients to bring you the warmth of
          a home-cooked meal. Whether you're craving a hearty breakfast, a quick
          lunch, or a cozy dinner, FoodHouse promises comfort in every bite.
        </p>
      </div>
      <div>
        <ul className="list-unstyled">
          <p>Quick Link</p>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Food</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <ul className="list-unstyled">
          <p>Quick Link</p>
          <li>FAQS</li>
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms && Condition</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <ul className="list-unstyled">
          <p>Contact Us</p>
          <li>Amsing jorabat , Guwahati , Kamrup Metro , Assam , India</li>
          <li>+918812839964</li>
          <li>oms570480@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
