import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [pnr, setPnr] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { pnr, password });
  };

  return (
    <div className="bg-[#ffe5ec] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header with Wave */}
        <div className="relative">
          <div className="bg-[#f87171] pt-8 pb-6 text-white z-10 relative">
            <h2 className="text-2xl font-bold mb-1 ml-5">Login</h2>
            <p className="text-lg ml-5">
              Hungry again? <br />
              You know the drill.
            </p>
          </div>
          <svg
            className="w-full h-12 transform rotate-180"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.91,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              fill="#f87171"
            />
          </svg>
        </div>

        {/* Login Form */}
        <form
          className="p-8 space-y-4 -mt-6 relative z-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PNR Number
            </label>
            <input
              type="text"
              value={pnr}
              onChange={(e) => setPnr(e.target.value)}
              placeholder="Enter your PNR"
              className="w-full border border-[#f8c8dc] px-4 py-2 rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-[#f8c8dc] px-4 py-2 rounded focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" /> Remember Me
            </label>
            <a href="#" className="text-[#f87171]">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#f87171] text-white font-bold py-2 px-4 rounded hover:bg-[#fca5a5] transition"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an Account?{" "}
            <Link to="/register" className="text-[#f87171] font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
