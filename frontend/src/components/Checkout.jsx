import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-secondary text-center mb-6">
        Checkout
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <span className="text-secondary">{item.name}</span>
                <span className="text-primary font-bold">
                  {item.price} x {item.quantity}
                </span>
              </div>
            ))}
            <select className="w-full p-2 mb-4 border rounded">
              <option>Select Pickup Time</option>
              <option>1 Hour from Now</option>
              <option>1.5 Hours from Now</option>
            </select>
            <button className="bg-primary text-white px-4 py-2 rounded w-full">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
