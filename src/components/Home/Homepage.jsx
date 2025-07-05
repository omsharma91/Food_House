import React, { useEffect } from "react";
import Navbarr from "../navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Card from "../productCard/Card";
import Aboutus from "../about/Aboutus";
import Order from "../Howtoodr.jsx/order";
import Customer from "../customerReview/Customer";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../chatbot/Chatbot";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <Herosection />
      <Card/>
      <Aboutus />
      <Order /> 
      <Customer />
      <Chatbot/>
      <Footer />
    </div>
  );
}
