import React, { useState } from "react";
import MyContainerLayout from "./MyContainerLayout";
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../Contexts/useAuth";
import { FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();
  const Navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  const handleLogout = async () => {
    await logout();
    Navigate("/");
    setMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainerLayout className="flex justify-between items-center py-3 px-3 relative">
        {/* logo */}
        <Link className="text-2xl md:text-3xl font-bold">SkillSwap</Link>
        {/* desktop nav */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-purple-500" : "")}
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              MyProfile
            </NavLink>
          )}
        </ul>
        {/* right */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* desktop profile & signout */}
              <div className="hidden md:flex items-center gap-4">
                <div className="relative flex flex-col items-center">
                  <img
                    src={
                      user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"
                    }
                    alt="avatar"
                    onMouseEnter={() => setShowName(true)}
                    onMouseLeave={() => setShowName(false)}
                    className="w-10 h-10 rounded-full border cursor-pointer"
                  />
                  {showName && (
                    <span className="absolute -top-4 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                      {user.displayName || "User Name"}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm border-red-500 text-red-500"
                >
                  Sign Out
                </button>
              </div>
              {/* mobile and tablet menubar */}
              <div className="md:hidden relative flex items-center gap-4">
                <img
                  src={
                    user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
                {menuOpen && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Menu</h2>
                      <FaTimes
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      />
                    </div>
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `btn ${
                          isActive
                            ? "bg-green-500 text-white border-none"
                            : "btn-outline"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `btn ${
                          isActive
                            ? "bg-green-500 text-white border-none"
                            : "btn-outline"
                        }`
                      }
                    >
                      MyProfile
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="text-red-500 text-center border border-red-500 py-2"
                    >
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* desktop signin and signup */}
              <div className="hidden md:flex gap-x-2">
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
              {/* mobile and tablet menu */}
              <div className="md:hidden relative">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
                {menuOpen && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Menu</h2>
                      <FaTimes
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      />
                    </div>
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `btn ${
                          isActive
                            ? "bg-green-500 text-white border-none"
                            : "btn-outline"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/Signin"
                      onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
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
                  </motion.div>
                )}
              </div>
            </>
          )}
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default Navbar;
