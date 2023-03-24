import React from "react";
import { useGetUserID } from "../hooks/useUserID";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";

const Profile = () => {
  const userID = useGetUserID();
  const [user, setUser] = useState("");
  const [bmi, setBmi] = useState();
  const [healthStatus, setHealthStatus] = useState("");

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${userID}`
        );
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const calculateBMI = () => {
      let height = user.height / 100;
      let weight = user.weight;
      let bmiValue = weight / (height * height);
      bmiValue = bmiValue.toFixed(2);
      setBmi(bmiValue);

      if (bmiValue >= 18.0 && bmiValue <= 25.0) {
        setHealthStatus("Healthy");
      } else if (bmiValue > 25.0 && bmiValue < 30.0) {
        setHealthStatus("Over Weight");
      } else if (bmiValue >= 30.0) {
        setHealthStatus("Obesity");
      }
    };

    getLoggedInUser();
    calculateBMI();
  }, [userID, user]);

  return (
    <div className="">
      {/* user information div */}
      <div className="bg-secondaryGreen border border-primaryGreen rounded-md p-8 my-8 flex justify-between">
        {/* user info */}
        <div>
          <div className="flex">
            <h2 className="font-primary font-bold text-base">Name: &nbsp;</h2>
            <span className="text-gray-700 font-primary">
              {user.firstName + " " + user.lastName}
            </span>
          </div>
          <div className="flex mt-2">
            <h2 className="font-primary font-bold text-base">Age: &nbsp;</h2>
            <span className="text-gray-700 font-primary">
              {user.age} years old
            </span>
          </div>
          <div className="flex mt-2">
            <h2 className="font-primary font-bold text-base">Height: &nbsp;</h2>
            <span className="text-gray-700 font-primary">
              {user.height + "cm"}
            </span>
          </div>
          <div className="flex mt-2">
            <h2 className="font-primary font-bold text-base">Weight: &nbsp;</h2>
            <span className="text-gray-700 font-primary">
              {user.weight + "kg"}
            </span>
          </div>
        </div>

        {/* bmi div */}
        <div>
          <h4 className="font-primary text-gray-800 text-xl font-bold mb-3">
            Your BMI Value
          </h4>
          <p className="p-2 bg-primaryGreen text-white font-medium text-center font-primary rounded-md">
            {healthStatus}
          </p>
          <div className="p-4 bg-green-900 rounded-md text-white text-center mt-3">
            <p className="font-primary font-semibold text-lg">{bmi}</p>
          </div>
        </div>
      </div>

      {/* food history */}

      <div>
        <h2 className="font-secondary text-lg text-primaryGreen mb-2 font-bold">
          Your Diet History
        </h2>
        <div className="bg-slate-100 p-3 rounded-md flex gap-3 mb-3">
          {/* food image */}
          <div>
            <img
              src="https://res.cloudinary.com/dun7nbpup/image/upload/v1679639829/zoodoo/food_2_gnox0b.jpg"
              alt=""
              className="w-24 rounded-md"
            />
          </div>
          {/* food name */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 font-primary">
              Fried Rice
            </h3>
            <p className="font-primary text-gray-800 text-[14px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              sint.
            </p>
            {/* nutrition info */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">242 calories</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">18g Fat</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">3g Carbs</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">16g Protein</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-3 rounded-md flex gap-3 mb-3">
          {/* food image */}
          <div>
            <img
              src="https://res.cloudinary.com/dun7nbpup/image/upload/v1679639829/zoodoo/food_2_gnox0b.jpg"
              alt=""
              className="w-24 rounded-md"
            />
          </div>
          {/* food name */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 font-primary">
              Fried Rice
            </h3>
            <p className="font-primary text-gray-800 text-[14px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              sint.
            </p>
            {/* nutrition info */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">242 calories</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">18g Fat</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">3g Carbs</p>
              </div>

              <div className="flex gap-1 items-center">
                <FaFire size={20} className="text-gray-800" />
                <p className="font-primary text-gray-500">16g Protein</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
