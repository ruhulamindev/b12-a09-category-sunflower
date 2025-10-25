import React, { useState } from "react";
import MyContainerLayout from "../Components/MyContainerLayout";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useAuth } from "../Contexts/useAuth";

const Signup = () => {
  const { signupUser, googleSignin } = useAuth();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from?.pathname || "/";

  const handleSignup = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photoURL?.value;
    const password = e.target.password?.value;

    
    if (!fullName) {
      toast.error("Please enter your full name");
      return;
    }
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!photoURL) {
      toast.error("Please provide a photo URL");
      return;
    }
    
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 digit");
      return;
    }
    
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    await signupUser(email, password, fullName, photoURL);
    navigate(redirectTo, { replace: true });
  };
  
    const handleGoogleSignin = async () => {
      try {
        await googleSignin();
        navigate(redirectTo, { replace: true });
      } catch (error) {
        toast.error(error.message);
      }
    };

  return (
    <div className="min-h-md flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 p-6">
      <MyContainerLayout>
        {/* autofill fixed korar jonno */}
        <style>
          {`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #000 !important;
      }
    `}
        </style>
        <div className="w-full mx-auto max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-600 font-medium">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 transform translate-y-2 cursor-pointer text-gray-600 z-10 bg-white w-7"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button className="btn btn-primary w-full">Sign Up</button>
          </form>
           <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* google signup button */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign in with Google
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/Signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default Signup;
