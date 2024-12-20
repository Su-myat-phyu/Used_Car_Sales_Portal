import React from "react";
import { Link } from '@inertiajs/react'; // Assuming React Router is used for navigation
import logo from "../../../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-primary-400 text-secondary-100 font-roboto">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src={logo} // Replace with your actual logo path
                        alt="Cardiana Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-secondary-900 font-medium text-lg">
                    <li>
                        <Link to="/" className="hover:text-secondary-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/research" className="hover:text-secondary-600">
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-secondary-600">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-secondary-600">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Register and Login Buttons */}
                <div className="flex space-x-4">
                    <Link
                        to="/register"
                        className="bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-400 transition"
                    >
                        Register
                    </Link>
                    <Link
                        to="/login"
                        className="bg-accent-500 text-white py-2 px-4 rounded-lg hover:bg-accent-400 transition"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
