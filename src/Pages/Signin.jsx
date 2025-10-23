import React from "react";
import MyContainerLayout from "../Components/MyContainerLayout";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-300 via-purple-200 to-pink-300 p-6">
      <MyContainerLayout>
        <div className="bg-white shadow-xl rounded-2xl w-full mx-auto max-w-md p-8">
          {/* title */}
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
            Login
          </h2>

          {/* form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* forget password */}
            <div className="text-right">
              <Link
                to="/forget-password"
                className="text-sm text-purple-600 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            {/* login button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* google login button */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
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
