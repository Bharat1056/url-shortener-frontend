import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">TinyPath</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; {new Date().getFullYear()} TinyPath. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a
            href="https://github.com/Bharat1056/"
            className="hover:text-gray-200"
          >
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/Bharat1056" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="in.com/in/bharat-panigrahi" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
