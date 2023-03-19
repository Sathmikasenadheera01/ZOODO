import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import signupImg from "../images/signup.jpg";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.status === 400) {
      setError(data.message);
    } else {
      navigate("../pages/Profile");
    }
  };

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
          <form onSubmit={handleSubmit}>
            {/* heading row */}
            <div>
              <h2 className="font-secondary font-bold text-2xl text-center lg:text-left">
                Welcome Back - Log In
              </h2>
              <p className="font-primary text-[16px] text-center lg:text-left">
                Do Not Have an Account?{" "}
                <Link to="../pages/SignUp">
                  <span className="font-primary text-primaryGreen">
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>

            {/* form name row*/}

            <div className="mt-2 lg:mt-5">
              <input
                type="email"
                className="textBox"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-2 lg:mt-5">
              <input
                type="password"
                className="textBox"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* checkbox */}
            <div className="my-5 flex justify-between">
              <div>
                <input type="checkbox" />
                <span className="ml-3 font-primary">Remember me</span>
              </div>
              <div>
                <Link to="/">
                  <span className="font-primary text-primaryGreen cursor-pointer">
                    Forgot Password
                  </span>
                </Link>
              </div>
            </div>

            <Button
              text="Log In"
              bgColor="bg-primaryGreen"
              textColor="text-white"
            />
            {error && (
              <div className="bg-red-300 border border-red-700 rounded-md px-2 py-1 text-balck font-primary w-fit mt-2">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
