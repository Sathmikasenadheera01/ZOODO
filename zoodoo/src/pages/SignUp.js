import React from "react";

import signupImg from "../images/signup.jpg";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const SignUp = () => {
  return (
    <div>
      {/* <div className="px-4 md:px-12 lg:px-36 max-w-screen-xl 2xl:px-0 mx-auto"> */}
      {/* main div */}
      <div className="flex-row lg:flex justify-center items-center mt-12 mb-24">
        <div className="basis-1/3 overflow-hidden">
          <img
            src={signupImg}
            alt="food dish"
            className="rounded-l-lg h-auto w-full self-stretch hidden lg:block"
          />
        </div>
        <div className="basis-2/3 px-10 py-8">
          {/* heading row */}
          <div>
            <h2 className="font-secondary font-bold text-2xl text-center lg:text-left">
              Create an Account
            </h2>
            <p className="font-primary text-[16px] text-center lg:text-left">
              Already have an Account?{" "}
              <Link to="../pages/LogIn">
                <span className="font-primary text-primaryGreen">Log In</span>
              </Link>
            </p>
          </div>

          {/* form name row*/}
          <div className="flex-row lg:flex gap-5 items-center mt-2 lg:mt-5">
            <TextBox fieldName="First Name" type="text" />
            <TextBox fieldName="Last Name" type="text" />
          </div>
          <div className="mt-2 lg:mt-5">
            <TextBox fieldName="E-mail Address" type="text" />
          </div>
          <div className="flex-row lg:flex gap-5 items-center mt-2 lg:mt-5">
            <TextBox fieldName="Age" type="text" />
            <TextBox fieldName="Height (cm)" type="text" />
            <TextBox fieldName="Weight (kg)" type="text" />
          </div>
          <div className="flex-row lg:flex gap-5 items-center mt-2 lg:mt-5">
            <TextBox fieldName="Create Password" type="password" />
            <TextBox fieldName="Confirm Password" type="password" />
          </div>

          {/* checkbox */}
          <div className="my-5">
            <div>
              <input type="checkbox" />
              <span className="ml-3 font-primary">
                I would like to receive marketing e-mails from zoodoo
              </span>
            </div>
            <div>
              <input type="checkbox" />
              <span className="ml-3 font-primary">
                By Signing up, I agree to the
                <span className="font-primary text-primaryGreen">
                  &nbsp; privacy policy &nbsp;
                </span>
                and
                <span className="font-primary text-primaryGreen">
                  &nbsp; terms of service &nbsp;
                </span>
              </span>
            </div>
          </div>

          <Button
            text="Create New Account"
            bgColor="bg-primaryGreen"
            textColor="text-white"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
