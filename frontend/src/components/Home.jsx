import React, { useEffect, useState } from "react";
import { getCanteens } from "../utils/api";
import CanteenCard from "./CanteenCard";

const Home = () => {
  const [canteens, setCanteens] = useState([]);

  useEffect(() => {
    getCanteens().then((data) => setCanteens(data));
  }, []);

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-secondary text-center mb-6">
        Select a Canteen
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {canteens.length > 0 ? (
          canteens.map((canteen) => (
            <CanteenCard key={canteen.id} canteen={canteen} />
          ))
        ) : (
          <p className="text-center text-gray-600">No canteens available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
