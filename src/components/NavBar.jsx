import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    ...(token ? [{ path: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-14 h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold italic text-2xl sm:text-3xl"
        >
          TinyPath
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ path: linkPath, label }) => (
            <li key={label}>
              <Link
                to={linkPath}
                className={`text-sm font-medium transition-colors duration-150 ${
                  path === linkPath
                    ? "text-white font-semibold"
                    : "text-indigo-100 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          {!token ? (
            <Link
              to="/register"
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all"
            >
              Sign Up
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all"
            >
              Log Out
            </button>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden bg-indigo-600 transition-all duration-200 overflow-hidden ${
          navbarOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-indigo-100">
          {navLinks.map(({ path: linkPath, label }) => (
            <li key={label}>
              <Link
                to={linkPath}
                onClick={() => setNavbarOpen(false)}
                className={`block text-base font-medium ${
                  path === linkPath
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          {!token ? (
            <Link
              to="/register"
              onClick={() => setNavbarOpen(false)}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all"
            >
              Sign Up
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setNavbarOpen(false);
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all"
            >
              Log Out
            </button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
