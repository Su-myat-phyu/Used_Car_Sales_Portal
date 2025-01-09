import React, { useState } from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md font-sans text-lg">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-15 mr-2" />
          <h1 className="text-3xl font-bold text-primary-500 font-serif">
            Meals On Wheel
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-primary-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-6 absolute md:relative md:flex-row flex-col md:bg-transparent bg-white left-0 w-full md:w-auto md:items-center z-10`}
        >
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Donate", href: "/donate" },
            { label: "Get Meal", href: "/getmeal" },
            { label: "Services", href: "/services" },
          ].map((link) => (
            <li key={link.href} className="text-center md:text-left">
              <a
                href={link.href}
                className="block py-2 px-4 text-gray-600 hover:text-gray-700 font-serif"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-primary-500 px-5 py-2 text-white rounded hover:bg-primary-700 font-serif">
            Login
          </button>
          <button className="border-2 border-primary-500 px-5 py-2 rounded text-primary-500 hover:bg-primary-500 hover:text-white font-serif">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
