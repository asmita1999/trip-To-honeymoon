import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [domesticOpen, setDomesticOpen] = useState(false); // domestic dropdown desktop
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false); // domestic dropdown mobile

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-900 font-semibold border-b-2 border-red-600 pb-1"
      : "text-gray-700 hover:text-blue-900 transition block";

  const domesticDestinations = [
    { name: "Kerala", path: "/domestic/kerala" },
    { name: "Goa", path: "/domestic/goa" },
    { name: "Kashmir", path: "/domestic/kashmir" },
    { name: "Meghalaya", path: "/domestic/meghalaya" },
    { name: "Udaipur", path: "/domestic/udaipur" },
    { name: "Andaman", path: "/domestic/andaman" },
    { name: "Ladakh", path: "/domestic/ladakh" },
    { name: "North East", path: "/domestic/north-east" },
    { name: "Kedarnath", path: "/domestic/kedarnath" },
    { name: "Himachal", path: "/domestic/himachal" },
    { name: "Uttarakhand", path: "/domestic/uttarakhand" },
    { name: "Rajasthan", path: "/domestic/rajasthan" },
    { name: "Sikkim", path: "/domestic/sikkim" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="TripToHoneymoon Logo"
              className="h-8"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center relative">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/aboutUs" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Domestic Dropdown */}
            <div className="relative flex items-center gap-1">
              {/* Main Domestic link */}
              <NavLink
                to="/domestic"
                className={navLinkClass}
                onClick={() => setDomesticOpen(false)}
              >
                Domestic
              </NavLink>

              {/* Arrow button for dropdown */}
              <button
                onClick={() => setDomesticOpen(!domesticOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                ▾
              </button>

              {domesticOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg border z-50">
                  <ul className="flex flex-col max-h-96 overflow-y-auto">
                    {domesticDestinations.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDomesticOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink to="/international" className={navLinkClass}>
              International
            </NavLink>
            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>
            <NavLink to="/contactUs" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="text-blue-900 underline text-sm font-semibold"
            >
              Login
            </NavLink>
            <NavLink to="/register">
              <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition focus:outline-none">
                Register
              </button>
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-lg space-y-3">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            About Us
          </NavLink>

          {/* Mobile Domestic with expand */}
          <div>
            <div className="flex justify-between items-center">
              <NavLink
                to="/domestic"
                onClick={() => setOpen(false)}
                className="text-gray-700 font-semibold"
              >
                Domestic
              </NavLink>
              <button
                onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)}
                className="text-gray-700"
              >
                ▾
              </button>
            </div>
            {mobileDomesticOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                {domesticDestinations.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-gray-600 hover:text-blue-900"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/international"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            International
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contactUs"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          <div className="border-t pt-3">
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-blue-900 underline font-semibold"
            >
              Login
            </NavLink>
            <NavLink to="/register" onClick={() => setOpen(false)}>
              <button className="w-full bg-blue-900 text-white mt-2 px-4 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition focus:outline-none">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
