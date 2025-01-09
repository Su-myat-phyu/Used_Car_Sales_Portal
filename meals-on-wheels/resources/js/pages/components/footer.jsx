import React from "react";
import logo from "../../../assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo - Left Aligned */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links - Centered */}
        <ul className="flex flex-col items-center space-y-4 text-center mb-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/meals" className="hover:underline">
              Get Meals
            </a>
          </li>
          <li>
            <a href="/donate" className="hover:underline">
              Donate
            </a>
          </li>
          <li>
            <a href="/register" className="hover:underline">
              Become a Volunteer
            </a>
          </li>
          <li>
            <a href="/certifications" className="hover:underline">
              Food Safety Certifications
            </a>
          </li>
        </ul>

        {/* Social Media Icons - Right Aligned */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.073C22 5.42 17.075 0 12 0 6.926 0 2 5.42 2 12.073c0 6.05 4.254 11.062 10 11.93v-8.45h-2.857v-3.48H12V8.963c0-2.81 1.653-4.38 4.186-4.38 1.215 0 2.486.217 2.486.217v2.708h-1.4c-1.38 0-1.81.855-1.81 1.73v2.085h3.087l-.495 3.48h-2.592v8.45c5.746-.868 10-5.88 10-11.93z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.643 4.937c-.835.37-1.73.62-2.671.733a4.69 4.69 0 002.057-2.591 9.372 9.372 0 01-2.957 1.13 4.655 4.655 0 00-7.92 4.243 13.194 13.194 0 01-9.55-4.841 4.607 4.607 0 001.44 6.182 4.68 4.68 0 01-2.104-.577v.06c0 2.262 1.613 4.154 3.75 4.584a4.707 4.707 0 01-2.096.08 4.662 4.662 0 004.35 3.227A9.352 9.352 0 010 19.543a13.202 13.202 0 007.175 2.103c8.6 0 13.307-7.124 13.307-13.307l-.016-.606a9.525 9.525 0 002.337-2.42z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.974.975 1.244 2.242 1.306 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.974-2.242 1.244-3.608 1.306-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.974-.975-1.244-2.242-1.306-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.974 2.242-1.244 3.608-1.306 1.266-.058 1.646-.069 4.85-.069zm0-2.163C8.775 0 8.338.013 7.052.07 5.762.128 4.601.387 3.579 1.409 2.558 2.43 2.299 3.591 2.241 4.881 2.184 6.167 2.171 6.605 2.171 12s.013 5.833.07 7.119c.058 1.29.317 2.451 1.338 3.472 1.022 1.022 2.183 1.281 3.473 1.338 1.286.058 1.724.07 7.119.07s5.833-.013 7.119-.07c1.29-.058 2.451-.317 3.472-1.338 1.022-1.022 1.281-2.183 1.338-3.473.058-1.286.07-1.724.07-7.119s-.013-5.833-.07-7.119c-.058-1.29-.317-2.451-1.338-3.472C19.338.387 18.177.128 16.887.07 15.601.013 15.163 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.162a4 4 0 100-8 4 4 0 000 8zm6.406-10.844a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
