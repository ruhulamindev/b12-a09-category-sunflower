import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { auth } from "../Utils/firebase";
import { toast } from "react-toastify";
import MyContainerLayout from "../Components/MyContainerLayout";

const ForgotPassword = () => {
  const location  = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset email sent! Redirecting to Gmail...");
      window.open("https://mail.google.com", "_blank");
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <MyContainerLayout>
        <div className="bg-white shadow-xl rounded-2xl w-full mx-auto max-w-md p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
            Forgot Password
          </h2>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </MyContainerLayout>
    </div>
  );
};

export default ForgotPassword;
