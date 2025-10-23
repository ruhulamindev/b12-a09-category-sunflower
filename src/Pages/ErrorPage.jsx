import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <div className="flex flex-col items-center justify-center min-h-md bg-gray-300 p-8">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
