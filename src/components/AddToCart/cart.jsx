import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  decreaseQty,  increaseQty,  removeItem} from "../../assets/feature/slices";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.productData.cartData ?? []);

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cartData.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-dark">
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
                    <td>₹{price}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          onClick={() => dispatch(decreaseQty(id))}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary ms-2"
                          onClick={() => dispatch(increaseQty(id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₹{price * quantity}</td>
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
          </div>

          <div className="d-flex justify-content-between flex-wrap align-items-center mt-4 p-3 border rounded shadow-sm">
            <h4 className="mb-3 mb-md-0">Total Price: ₹{totalPrice}</h4>
            <button
              className="btn btn-success"
              onClick={() => alert("Proceeding to pay...")}
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}
