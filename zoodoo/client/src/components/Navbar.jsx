import React from "react";
// import { useState } from "react";
import Button from "../components/Button";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        {/* logo */}
        <div>
          <h1 className="font-secondary text-primaryGreen font-semibold text-2xl">
            ZOODO
          </h1>
        </div>

        {/* menu items */}
        <div>
          <ul className="list-none sm:flex hidden gap-4 items-center font-primary font-semibold">
            <Link to="/">
              <li> Home </li>
            </Link>
            <Link to="/Shop">
              <li> Shop </li>
            </Link>
            <Link to="/">
              <li> About </li>
            </Link>
            <Link to="/">
              <li> Contact </li>
            </Link>

            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primaryGreen" : "text-black"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}
          </ul>
        </div>

        {/* buttons */}
        <div className="flex gap-2 items-center justify-between">
          <Link to="../pages/SignUp">
            <Button
              text="Sign Up/ Sign In"
              bgColor="bg-primaryGreen"
              textColor="text-white"
            />
          </Link>

          <FaShoppingCart size={20} />
          <Link to="../pages/Profile">
            <FaUser size={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
