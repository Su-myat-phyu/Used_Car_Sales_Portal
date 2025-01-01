import React from "react";
import { Link } from "@inertiajs/react"; // Inertia.js-specific Link component
import logo from "../../../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-primary-200 text-secondary-100 font-roboto">
            <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Cardiana Logo"
                        className="h-16 w-auto"
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="block lg:hidden">
                    <button
                        id="menu-toggle"
                        className="text-secondary-900 focus:outline-none"
                        onClick={() => {
                            const menu = document.getElementById("mobile-menu");
                            menu.classList.toggle("hidden");
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop and Mobile Navigation */}
                <ul
                    id="mobile-menu"
                    className="hidden lg:flex lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto mt-4 lg:mt-0 text-secondary-900 font-medium text-lg"
                >
                    <li>
                        <Link
                            href="/"
                            className="block hover:text-secondary-600 transition"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/research"
                            className="block hover:text-secondary-600 transition"
                        >
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block hover:text-secondary-600 transition"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="block hover:text-secondary-600 transition"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Register and Login Buttons */}
                <div className="hidden lg:flex space-x-4 mt-4 lg:mt-0">
                    <Link
                        href="/register"
                        className="bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-400 transition"
                    >
                        Register
                    </Link>
                    <Link
                        href="/login"
                        className="bg-accent-500 text-white py-2 px-4 rounded-lg hover:bg-accent-400 transition"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Buttons */}
                <div
                    id="mobile-buttons"
                    className="lg:hidden flex flex-col space-y-2 w-full mt-4 hidden"
                >
                    <Link
                        href="/register"
                        className="bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-400 transition text-center"
                    >
                        Register
                    </Link>
                    <Link
                        href="/login"
                        className="bg-accent-500 text-white py-2 px-4 rounded-lg hover:bg-accent-400 transition text-center"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
