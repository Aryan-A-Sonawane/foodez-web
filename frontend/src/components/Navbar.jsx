import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-primary text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold">
          FOODEEZ
        </Link>
        <div className="space-x-6">
          <Link to="/cart" className="relative">
            Cart ({cart.length})
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-pastelYellow text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
