import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 flex justify-between items-center">
      {/* nav left side (logo) */}
      <div>
        <a className="text-2xl md:text-3xl font-bold p-1">Sunflower</a>
      </div>
      {/* middle Home */}
      <div>
        <a className="text-md md:text-xl hover:underline p-1">Home</a>
      </div>
      {/* right side Login & Signup */}
      <div className="gap-2 flex">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
