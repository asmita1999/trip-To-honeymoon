
// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">TriptoHoneymoon</h2>
          <p className="text-white">
            TriptoHoneymoon is a travel startup by passionate creators working to redefine how honeymoon planning and wedding travel is done — digitally and delightfully.
          </p>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Policy</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="Terms-to-use">Terms of Use</Link></li>
            {/* <li><Link to="/shipping-policy">Return, Shipping & Cancellation</Link></li> */}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/contactUs">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2"><MdPhone /> +91-8005993442</li>
            <li className="flex items-center gap-2"><MdEmail /> support@triptohoneymoon.in</li>
          </ul>
          {/* <div className="mt-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
          </div> */}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-orange-700 my-6"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p>© {new Date().getFullYear()} TriptoHoneymoon. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Follow Us</span>
         <a
         href="http://facebook.com/profile.php?id=61551720045200"
         target="_blank"
         rel="noreferrer"
          >
            <FaFacebookF className="text-white hover:text-orange-600 cursor-pointer" />
          </a>
          <a
              href="https://instagram.com/triptohoneymoon_official"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-white hover:text-orange-600 cursor-pointer text-2xl" />
            </a>
          
          
          <a
            href="https://youtube.com/@trip2honeymoon_official?si=AJEgM_rEtIDQa0Hk"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-white hover:text-orange-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

