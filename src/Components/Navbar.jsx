import React from "react";
import MyContainerLayout from "./MyContainerLayout";
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../Contexts/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    Navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainerLayout className="flex justify-between items-center">
        <div>
          <Link className="text-2xl md:text-3xl font-bold">SkillSwap</Link>
        </div>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <img
                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border"
              />
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm border-red-500 text-red-500"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="gap-2 flex">
            <NavLink
              to="/Signin"
              className={({ isActive }) =>
                `btn ${
                  isActive
                    ? "bg-green-500 text-white border-none"
                    : "btn-outline"
                }`
              }
            >
              Sign in
            </NavLink>
            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                `btn ${
                  isActive
                    ? "bg-green-500 text-white border-none"
                    : "btn-outline"
                }`
              }
            >
              Sign up
            </NavLink>
          </div>
        )}
      </MyContainerLayout>
    </div>
  );
};

export default Navbar;
