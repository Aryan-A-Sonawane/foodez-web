import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCanteenById } from "../utils/api";
import { CartContext } from "../context/CartContext";

const CanteenPage = () => {
  const { id } = useParams();
  const [canteen, setCanteen] = useState(null);
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    getCanteenById(parseInt(id)).then((data) => setCanteen(data));
  }, [id]);

  if (!canteen)
    return <div className="text-center text-secondary">Loading...</div>;

  return (
    <div className="bg-background p-8">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">
        {canteen.name} Menu
      </h1>
      <div className="space-y-4">
        {canteen.menuItems.map((item) => {
          const inCart = cart.find(
            (c) => c.name === item.name && c.canteenId === canteen.id
          );
          const index = cart.findIndex(
            (c) => c.name === item.name && c.canteenId === canteen.id
          );
          return (
            <div
              key={item.name}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-secondary">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
              {inCart ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="bg-primary text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{inCart.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="bg-primary text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart({ ...item, canteenId: canteen.id })}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CanteenPage;
