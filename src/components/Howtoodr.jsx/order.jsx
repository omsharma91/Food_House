import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Order() {
  return (
    <div className="p-5">
      <h1 className="text-center">How to order food from our restruent ?</h1>
      <div className="d-flex justify-content-evenly text-center  gap-5 m-5">
        <div className="border p-3 shadow-lg">
          <h1 className="fs-5 p-2 fw-bold">Get Seated and Explore the Menu</h1>
          <p>
            When you enter the restaurant, wait for the host to seat you or
            choose a table if it's self-service. Once seated, take your time to
            read the menu carefully. Look at the food options, drinks, and any
            specials. If you are unsure about any dish, you can ask the waiter
            for recommendations or details.
          </p>
        </div>
        <div className="border p-3 shadow-lg">
          <h3 className="fs-5 p-2 fw-bold">Place Your Order Politely</h3>
          <p>
            Once you have decided what you want to eat and drink, catch the
            waiter's attention politely by making eye contact or raising your
            hand slightly. When the waiter comes, clearly tell them your order.
            Mention any specific instructions, like if you want something less
            spicy or if you have any dietary preferences (like vegetarian,
            gluten-free, etc.).
          </p>
        </div>
        <div className="border p-3 shadow-lg">
          <h1 className="fs-5 p-2 fw-bold"> Receive and Review Your Food</h1>
          <p>
            When the food is served, quickly check to make sure everything you
            ordered is there and looks right. If something is missing or wrong,
            inform the waiter politely. Otherwise, say thank you and enjoy your
            meal!
          </p>
        </div>
      </div>
    </div>
  );
}
