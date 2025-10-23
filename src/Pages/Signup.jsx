import React from "react";
import MyContainerLayout from "../Components/MyContainerLayout";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    if (password.length < 6){
      toast.error("Password should be at least 6 digit");
      return;
    }
     
    createUserWithEmailAndPassword (auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Signup successfully!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-200 via-blue-200 to-purple-300">
      <MyContainerLayout>
        <div className="w-full mx-auto max-w-5xl bg-white/70 backdrop-blur-md rounded-xl shadow-lg grid md:grid-cols-2 gap-8 p-8">
          {/* left section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Join Us Today
            </h1>
            <p className="text-gray-600 text-lg">
              Create your account and start exploring amazing features.
            </p>
          </div>

          {/* right section (form) */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
              Sign Up
            </h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary w-full">Register</button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/Signin" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default Signup;
