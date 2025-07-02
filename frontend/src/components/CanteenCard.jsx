import React from "react";
import { Link } from "react-router-dom";

const CanteenCard = ({ canteen }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-auto max-h-80">
      <img src={canteen.imageUrl} alt={canteen.name} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col h-full">
        <h2 className="text-xl font-bold text-primary">{canteen.name}</h2>
        <p className="text-secondary text-sm line-clamp-2">{canteen.description}</p>
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
            canteen.status === "open" ? "bg-pastelGreen text-white" : "bg-pastelPink text-white"
          }`}
        >
          {canteen.status}
        </span>
        <p className="text-gray-600 text-sm mt-2">{canteen.menuItems.length} items</p>
        <Link
          to={`/canteen/${canteen.id}`}
          className="mt-auto bg-primary text-white px-4 py-2 rounded text-center block mt-4"
        >
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default CanteenCard;