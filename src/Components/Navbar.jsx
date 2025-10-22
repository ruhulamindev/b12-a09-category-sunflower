import React from "react";
import MyContainerLayout from "./MyContainerLayout";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainerLayout className="flex justify-between items-center">
        {/* nav left side (logo) */}
        <div>
          <Link className="text-2xl md:text-3xl font-bold">Sunflower</Link>
        </div>
        {/* middle-nav-link Home */}
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              Home{" "}
            </NavLink>
          </li>
        </ul>
        {/* right side Login & Signup */}
        <div className="gap-2 flex">
          <NavLink
            to="/Signin"
            className={({ isActive }) =>
              `btn ${
                isActive ? "bg-green-500 text-white border-none" : "btn-outline"
              }`
            }
          >
            Sign in
          </NavLink>

          <NavLink
            to="/Signup"
            className={({ isActive }) =>
              `btn ${
                isActive ? "bg-green-500 text-white border-none" : "btn-outline"
              }`
            }
          >
            Sign up
          </NavLink>
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default Navbar;
