import React, { useState } from "react";

export default function Cart(){
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 120, quantity: 2 },
    { id: 2, name: "Pizza", price: 200, quantity: 1 },
    { id: 3, name: "Biryani", price: 180, quantity: 3 },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ id, name, price, quantity }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => decreaseQty(id)}
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() => increaseQty(id)}
                    >
                      +
                    </button>
                  </td>
                  <td>{price * quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4>Total Price: ₹{totalPrice}</h4>
          <button
            className="btn btn-success"
            onClick={() => alert("Proceeding to pay...")}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}
