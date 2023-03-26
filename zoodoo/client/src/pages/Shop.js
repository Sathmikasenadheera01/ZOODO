import React from "react";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Shop = () => {
  const [foods, setFoods] = useState();

  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:5000/foods");
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    // trending food items
    <div className="mt-16">
      <h4 className="font-primary font-bold text-2xl text-gray-700">
        Pick your favourite Food, We'll take care of you
      </h4>
      <div className="flex flex-wrap gap-6 items-center mb-8 mt-6 mx-auto">
        {foods &&
          foods.map((food) => (
            <Card
              key={food._id}
              foodImage={food.imageURL}
              foodName={food.name}
              price={food.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;
