import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGetUserID } from "../hooks/useUserID";

import * as tf from "@tensorflow/tfjs";

const BuyFood = () => {
  const { id } = useParams();
  const [foodItem, setFooditem] = useState("");
  const [count, setCount] = useState(1);
  //const [user, setUser] = useState(null);
  const userID = useGetUserID();

  // model part
  const [prediction, setPrediction] = useState(
    "press generate health report button to get health report"
  );
  const [model, setModel] = useState("");

  // useEffect(() => {
  //   const getLoggedInUser = async () => {
  //     try {
  //       const response = await axios.get(`/users/${userID}`);
  //       console.log(response.data);
  //       setUser(response.data);
  //       console.log(user);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getLoggedInUser();
  // }, [userID, user]);

  useEffect(() => {
    fetch(`/foods/${id}`).then((response) => {
      response.json().then((foodInfo) => {
        setFooditem(foodInfo);
      });
    });
    // eslint-disable-next-line
  }, []);

  const loadModel = async () => {
    const model = await tf.loadLayersModel(
      "https://raw.githubusercontent.com/Sathmikasenadheera01/mltesting/master/zodoofoodclassification_model_tfjs/model.json"
    );
    setModel(model);
  };

  useEffect(() => {
    loadModel();
    // eslint-disable-next-line
  }, []);

  const predict = async (img) => {
    const foodList = [
      "apple_pie",
      "cheesecake",
      "chicken_curry",
      "chicken_wings",
      "chocolate_cake",
      "chocolate_mousse",
      "club_sandwich",
      "donuts",
      "fish_and_chips",
      "french_fries",
      "french_toast",
      "fried_rice",
      "frozen_yogurt",
      "garlic_bread",
      "greek_salad",
      "hamburger",
      "hot_dog",
      "ice_cream",
      "lasagna",
      "macaroni_and_cheese",
      "omelette",
      "pancakes",
      "pizza",
      "ramen",
      "samosa",
      "shrimp_and_grits",
      "spaghetti_carbonara",
      "spring_rolls",
      "steak",
      "strawberry_shortcake",
      "sushi",
      "tacos",
      "waffles",
    ];

    const tensor = tf.browser
      .fromPixels(img)
      .resizeNearestNeighbor([299, 299])
      .toFloat()
      .div(tf.scalar(255))
      .expandDims();

    const predictions = await model.predict(tensor).array();
    if (Math.max(...predictions[0]) < 0.99) {
      setPrediction("");
    } else {
      var predictedClassIndex = predictions[0].indexOf(
        Math.max(...predictions[0])
      );
      console.log(predictedClassIndex);
      console.log(foodList[predictedClassIndex]);
      const predictedFood = foodList[predictedClassIndex];
      const finalPrediction = predictedFood.replace("_", " ");
      setPrediction(finalPrediction);
    }
  };

  // image preprocessing
  const loadImage = async (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        resolve(img);
      };
      img.onerror = reject;
      img.src = imageUrl;
    });
  };

  const showNutritions = async () => {
    const image = await loadImage(foodItem.imageURL);
    predict(image);
  };

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
            <button className="px-4 py-2 rounded-[5px] font-primary bg-primaryGreen text-white font-medium" onClick={showNutritions}>
              Generate Health Report
            </button>
          </div>
        </div>
      </section>

      {/* nutrition report */}
      <section className="md:flex items-start justify-start my-20 bg-secondaryGreen px-4 py-3 rounded-md gap-10">
        <div className="basis-1/2">
          <h1 className="font-bold text-black font-secondary text-xl">
            Zoodoo Nutrition report
          </h1>
          <p className="font-primary text-gray-700 font-medium text-[15px]">
            our machine learning model identified this food as
          </p>
          <p className="bg-primaryGreen rounded-md p-3 text-white font-primary my-2">
            {prediction
              ? prediction
              : "cannot identify selected food correctly. we are sorry!"}
          </p>
        </div>

        <div>
          <h1 className="font-bold text-gray-700 font-secondary text-xl">
            Nutritional Values of this food
          </h1>
        </div>
      </section>
    </div>
  );
};

export default BuyFood;
