import React from "react";
import Button from "./Button";

import { FaShoppingCart } from "react-icons/fa";

const card = (props) => {
  return (
    <div className="w-40 rounded-md shadow-xl pb-4">
      {/* image */}
      <div className="overflow-hidden">
        <img src={props.foodImage} alt="food" className="rounded-t-md" />
      </div>

      {/* content */}
      <div>
        <h2 className="font-primary font-semibold text-[18px] text-black leading-0">
          {props.foodName}
        </h2>
        <p className="font-primary font-normal text-[16px] text-slate-900">
          {props.price}
        </p>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between mt-2">
        <Button
          text="Buy Now"
          bgColor="bg-primaryGreen"
          textColor="text-white"
        />
        <FaShoppingCart size={20} />
      </div>
    </div>
  );
};

export default card;
