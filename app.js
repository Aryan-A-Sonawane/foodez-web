import React, { useState, useContext, createContext } from 'react';
     import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
     import './App.css';

     // Cart Context
     const CartContext = createContext();

     const CartProvider = ({ children }) => {
       const [cart, setCart] = useState([]);
       const addToCart = (item) => setCart([...cart, { ...item, quantity: 1 }]);
       const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
       return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
     };

     // Navbar Component
     const Navbar = () => {
       const { cart } = useContext(CartContext);
       return (
         <nav className="bg-primary p-4">
           <div className="container mx-auto flex justify-between items-center">
             <Link to="/" className="text-white text-xl font-bold">Canteen Preorder</Link>
             <Link to="/cart" className="text-white">Cart ({cart.length})</Link>
           </div>
         </nav>
       );
     };

     // Home Component (simplified)
     const Home = () => (
       <div className="bg-background min-h-screen p-8">
         <h1 className="text-3xl font-bold text-center text-secondary mb-8">Select a Canteen</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[1, 2, 3, 4, 5].map((id) => (
             <Link key={id} to={/canteen/${id}}>
               <div className="bg-white shadow-md rounded-lg p-4 text-center">
                 <h2 className="text-xl font-bold text-primary">Canteen {id}</h2>
                 <p className="text-secondary">Quick bites</p>
               </div>
             </Link>
           ))}
         </div>
       </div>
     );

     // CanteenMenu Component (simplified)
     const CanteenMenu = () => {
       const { id } = useParams();
       const menuItems = [
         { name: 'Burger', price: '$5.00', description: 'Classic beef burger' },
         { name: 'Salad', price: '$4.00', description: 'Fresh garden salad' },
       ];
       const { addToCart } = useContext(CartContext);
       return (
         <div className="bg-background min-h-screen p-8">
           <h1 className="text-3xl font-bold text-center text-secondary mb-8">Canteen {id} Menu</h1>
           <div className="space-y-4">
             {menuItems.map((item, index) => (
               <div key={index} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-md">
                 <div>
                   <h3 className="text-lg font-bold text-secondary">{item.name}</h3>
                   <p className="text-sm text-gray-600">{item.description}</p>
                   <p className="text-primary font-bold">{item.price}</p>
                 </div>
                 <button onClick={() => addToCart(item)} className="bg-primary text-white px-4 py-2 rounded">Add to Cart</button>
               </div>
             ))}
           </div>
         </div>
       );
     };

     // Cart Component (simplified)
     const Cart = () => {
       const { cart, removeFromCart } = useContext(CartContext);
       return (
         <div className="bg-background min-h-screen p-8">
           <h1 className="text-3xl font-bold text-center text-secondary mb-8">Your Cart</h1>
           {cart.length === 0 ? (
             <p className="text-center text-gray-600">Your cart is empty.</p>
           ) : (
             cart.map((item, index) => (
               <div key={index} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-md">
                 <div>
                   <h3 className="text-lg font-bold text-secondary">{item.name}</h3>
                   <p className="text-primary font-bold">{item.price}</p>
                 </div>
                 <button onClick={() => removeFromCart(index)} className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
               </div>
             ))
           )}
         </div>
       );
     };

     // App Component
     const App = () => (
       <CartProvider>
         <Router>
           <Navbar />
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/canteen/:id" component={CanteenMenu} />
             <Route path="/cart" component={Cart} />
           </Switch>
         </Router>
       </CartProvider>
     );

     export default App;