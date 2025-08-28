import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo1.jpg';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-900 font-semibold border-b-2 border-red-600 pb-1'
      : 'text-gray-700 hover:text-blue-900 transition block';

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" onClick={() => setOpen(false)} className="flex-shrink-0">
            <img src={ logo } alt="TripToHoneymoon Logo" className="h-8" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/aboutUs" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/domestic" className={navLinkClass}>Domestic</NavLink>
            <NavLink to="/international" className={navLinkClass}>International</NavLink>
            <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
            <NavLink to="/contactUs" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/login" className="text-blue-900 underline text-sm font-semibold">Login</NavLink>
            <NavLink to="/register">
              <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition focus:outline-none">
                Register
              </button>
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 hover:text-blue-900 focus:outline-none">
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-lg space-y-3">
          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/aboutUs" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink>
          <NavLink to="/domestic" onClick={() => setOpen(false)} className={navLinkClass}>Domestic</NavLink>
          <NavLink to="/international" onClick={() => setOpen(false)} className={navLinkClass}>International</NavLink>
          <NavLink to="/blogs" onClick={() => setOpen(false)} className={navLinkClass}>Blogs</NavLink>
          <NavLink to="/contactUs" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

          <div className="border-t pt-3">
            <NavLink to="/login" onClick={() => setOpen(false)} className="block text-blue-900 underline font-semibold">
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
