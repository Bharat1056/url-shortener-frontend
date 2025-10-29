// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 via-white to-gray-100 text-center px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <FaExclamationTriangle className="text-6xl text-red-500 mb-4 drop-shadow-sm" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          {message ||
            "An unexpected error has occurred. Please try again later."}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-500 transition-all"
        >
          Go Back Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
