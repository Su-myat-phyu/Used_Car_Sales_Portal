import React from "react";
import { Link } from "@inertiajs/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons
import logo from "../../../assets/logo.png";

const AuthFooter = () => {
    return (
        <footer className="bg-primary-200 text-secondary-100 font-roboto">
            <div className="container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section: Logo and Social Media Icons */}
                <div className="flex flex-col items-start space-y-4">
                    {/* Logo */}
                    <img
                        src={logo} // Replace with your actual logo path
                        alt="Cardiana Logo"
                        className="h-20 w-auto"
                    />
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-900 hover:text-secondary-600 transition"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-900 hover:text-secondary-600 transition"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-900 hover:text-secondary-600 transition"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Center Section: Quick Links */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-lg font-bold text-secondary-900">Quick Links</h3>
                    <ul className="space-y-2 text-secondary-900">
                        <li>
                            <Link href="/authHome" className="hover:text-secondary-600 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/authResearch" className="hover:text-secondary-600 transition">
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link href="/authAbout" className="hover:text-secondary-600 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/authContact" className="hover:text-secondary-600 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section: All Rights Reserved */}
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm text-secondary-900 text-center md:text-right">
                        © {new Date().getFullYear()} Cardiana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default AuthFooter;
