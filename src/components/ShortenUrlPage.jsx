import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      const redirectTimer = setTimeout(() => {
        window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
      }, 500);
      return () => clearTimeout(redirectTimer);
    }
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-2xl font-semibold">Redirecting...</h1>
        <p className="text-gray-600 text-sm">
          Please wait while we take you to your destination.
        </p>
      </div>
    </div>
  );
};

export default ShortenUrlPage;
