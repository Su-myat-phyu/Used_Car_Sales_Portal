import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia"; // Import Inertia for API calls
import { Link } from "@inertiajs/react"; // Import Inertia's Link for navigation
import logo from "../../../../assets/logo.png";

const Navbar = ({ userName }) => {
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
        <nav className="bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Cardiana Logo"
                        className="h-16 w-auto"
                    />
                </div>

                {/* User Info with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center space-x-2 focus:outline-none"
                        aria-expanded={dropdownOpen}
                    >
                        <span className="text-gray-700 font-semibold">
                            {userName || "Guest"}
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
                                        href="/user/profile-information"
                                        method="get" // Ensure a GET request
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

