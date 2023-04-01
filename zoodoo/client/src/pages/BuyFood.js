import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGetUserID } from "../hooks/useUserID";
import axios from "axios";

const BuyFood = () => {
  const { id } = useParams();
  const [foodItem, setFooditem] = useState("");
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const userID = useGetUserID();

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await axios.get(`/users/${userID}`);
        console.log(response.data);
        setUser(response.data);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    };

    getLoggedInUser();
  }, [userID, user]);

  useEffect(() => {
    fetch(`/foods/${id}`).then((response) => {
      response.json().then((foodInfo) => {
        setFooditem(foodInfo);
      });
    });
  }, [id]);

  const minimizeCount = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const maximizeCount = () => {
    setCount(count + 1);
  };

  const handleBuyNow = () => {
    if (!userID) {
      alert("please login first");
    } else {
      alert("good");
    }
  };

  return (
    <div>
      {/* food display */}
      <section className="md:flex items-center justify-center my-20">
        {/* image div */}
        <div className="basis-1/2">
          <img src={foodItem.imageURL} alt="selected food" className="w-3/4" />
        </div>

        {/* food info*/}
        <div className="basis-1/2 font-primary">
          <div>
            <h2 className="font-secondary font-bold text-2xl text-black">
              {foodItem.name}
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              doloribus vero, deleniti provident iste explicabo.
            </p>
          </div>

          {/* price and qty */}
          <div className="flex items-center gap-20 mt-8">
            <h2 className="font-primary text-primaryGreen font-medium text-xl">
              Rs{foodItem.price * count}.00
            </h2>
            <div className="flex gap-6 items-center">
              <button
                className="px-4 py-2 bg-red-500 font-bold text-white text-2xl"
                onClick={minimizeCount}
              >
                -
              </button>
              <span className="px-4 py-3 bg-secondaryGreen text-black font-medium">
                {count}
              </span>
              <button
                className="px-4 py-2 bg-primaryGreen font-bold text-white text-2xl"
                onClick={maximizeCount}
              >
                +
              </button>
            </div>
          </div>

          {/* buy now and cart button */}
          <div className="flex items-center gap-4 mt-8">
            <button
              className="px-4 py-2 rounded-[5px] font-primary bg-primaryGreen text-white font-medium"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <FaShoppingCart
              size={20}
              className="cursor-pointer text-slate-800"
            />
          </div>

          {/* generate health report button */}
          <div className="mt-16">
            <button className="px-4 py-2 rounded-[5px] font-primary bg-primaryGreen text-white font-medium">
              Generate Health Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyFood;
