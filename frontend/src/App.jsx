import React, { useState, useContext, createContext } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";

// Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, { ...item, quantity: 1 }]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Navbar Component
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-primary p-8 w-full z-10 sticky top-0">
      {" "}
      {/* Sticky positioning at the top */}
      <div className="container mx-auto flex justify-between items-center max-w-sm">
        {" "}
        {/* Constrained to match mobile layout */}
        <Link to="/" className="text-white text-xl font-bold">
          FOODEEZ
        </Link>
        <Link to="/cart" className="text-white">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

// CanteenCard Component
const CanteenCard = ({ id, name, description }) => (
  <Link to={`/canteen/${id}`}>
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between w-full h-24">
      <div>
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

// Home Component
const Home = () => {
  const canteens = [
    { id: 1, name: "Canteen 1", description: "Quick bites" },
    { id: 2, name: "Canteen 2", description: "Healthy options" },
    { id: 3, name: "Canteen 3", description: "Local flavors" },
    { id: 4, name: "Canteen 4", description: "Fast food" },
    { id: 5, name: "Canteen 5", description: "Special deals" },
  ];
  return (
    <div className="bg-background min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">
        Select a Canteen
      </h1>
      <div className="space-y-4">
        {canteens.map((canteen) => (
          <CanteenCard
            key={canteen.id}
            id={canteen.id}
            name={canteen.name}
            description={canteen.description}
          />
        ))}
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ name, price, description }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-bold text-secondary">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-primary font-bold">{price}</p>
      </div>
      <button
        onClick={() => addToCart({ name, price, description })}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

// CanteenMenu Component
const CanteenMenu = () => {
  const { id } = useParams();
  const menuItems = [
    { name: "Burger", price: "$5.00", description: "Classic beef burger" },
    { name: "Salad", price: "$4.00", description: "Fresh garden salad" },
    { name: "Pizza", price: "$6.50", description: "Spicy rossa pizza" },
  ];
  return (
    <div className="bg-background min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">
        Canteen {id} Menu
      </h1>
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

// Cart Component
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="bg-background min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-secondary">
                  {item.name}
                </h3>
                <p className="text-primary font-bold">
                  {item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <Link
            to="/checkout"
            className="block bg-green-500 text-white px-4 py-2 rounded mt-4 text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

// Checkout Component
const Checkout = () => (
  <div className="bg-background min-h-screen p-8">
    <h1 className="text-3xl font-bold text-center text-secondary mb-8">
      Checkout
    </h1>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-secondary mb-4">
        Order Summary: (Items will be listed here)
      </p>
      <select className="w-full p-2 mb-4 border rounded">
        <option>Select Pickup Time</option>
        <option>1 Hour from Now</option>
        <option>1.5 Hours from Now</option>
      </select>
      <button className="bg-primary text-white px-4 py-2 rounded w-full">
        Place Order
      </button>
    </div>
  </div>
);

// App Component
const App = () => (
  <div className="fixed inset-0 bg-pastelYellow backdrop-blur-sm min-h-screen">
    <CartProvider>
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <div className="max-w-sm w-full bg-transparent p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/canteen/:id" element={<CanteenMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  </div>
);

export default App;
