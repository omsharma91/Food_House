import React from "react";
import { useSelector } from "react-redux";
import { decreaseQty,increaseQty,removeItem } from "../../assets/feature/slices";
import { useDispatch } from "react-redux";

export default function Cart(){
  const dispatch = useDispatch()
  const cartData = useSelector((state)=>state.productData.cartData ?? [])
console.log(cartData);
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartData.length === 0 ? (
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
              {cartData.map(({ id, name, price, quantity }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => dispatch(decreaseQty(id))}
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() => dispatch(increaseQty(id))}
                    >
                      +
                    </button>
                  </td>
                  <td>{price * quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch(removeItem(id))}
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
