import React, { useState } from "react";
import MyContainerLayout from "../Components/MyContainerLayout";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useAuth } from "../Contexts/useAuth";
import { toast } from "react-toastify";

const Signin = () => {
  const { signinUser, googleSignin } = useAuth();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from || "/";

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    await signinUser(email, password);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 p-6">
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
        <div className="bg-white shadow-xl rounded-2xl w-full mx-auto max-w-md p-8">
          {/* title */}
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
            Sign in
          </h2>

          {/* form */}
          <form onSubmit={handleSignin} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

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
            {/* forget password */}
            <div className="text-right">
              <Link
                to="/forget-password"
                state={{ email }}
                className="text-sm text-purple-600 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            {/* login button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition cursor-pointer"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* google login button */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign in with Google
          </button>

          {/* footer */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/Signup" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default Signin;
