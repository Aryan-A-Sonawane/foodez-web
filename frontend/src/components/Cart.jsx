import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-secondary text-center mb-6">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-secondary">
                  {item.name}
                </h3>
                <p className="text-primary font-bold">
                  {item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(index, -1)}
                  className="bg-primary text-white px-2 py-1 rounded min-w-[40px]"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, 1)}
                  className="bg-primary text-white px-2 py-1 rounded min-w-[40px]"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-pastelPink text-white px-2 py-1 rounded ml-2 min-w-[60px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <Link
            to="/checkout"
            className="block bg-pastelGreen text-white px-4 py-2 rounded mt-4 text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
