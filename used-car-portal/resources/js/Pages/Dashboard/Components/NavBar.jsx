import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia"; // Import Inertia for API calls
import { usePage,Link } from "@inertiajs/react"; // Import Inertia's Link for navigation
import logo from "../../../../assets/logo.png";

const Navbar = ({ userName }) => {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        Inertia.post("/logout", {}, {
            onSuccess: () => {
                console.log("Logged out successfully");
            },
            onError: (error) => {
                alert("Failed to logout. Please try again.");
                console.error("Error during logout:", error);
            },
        });
    };

    return (
        <nav className="bg-primary-200 shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                {/* Logo */}
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
                                            href="/authHome"
                                            className="block hover:text-secondary-600 transition"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/authResearch"
                                            className="block hover:text-secondary-600 transition"
                                        >
                                            Research
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/authAbout"
                                            className="block hover:text-secondary-600 transition"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/authContact"
                                            className="block hover:text-secondary-600 transition"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>

                {/* User Info with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center space-x-2 focus:outline-none"
                        aria-expanded={dropdownOpen}
                    >
                        <span className="text-gray-700 font-semibold font-roboto">
                        {auth.user.full_name || "Guest"}
                        </span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${
                                dropdownOpen ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                            <ul className="py-1 text-sm text-gray-700">
                            <li>
                                <Link
                                    href="/user-dashboard"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href="/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

