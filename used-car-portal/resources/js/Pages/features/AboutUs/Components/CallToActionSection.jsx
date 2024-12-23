import React from "react";
import { Link } from "@inertiajs/react";

const CallToActionSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-secondary-500 via-primary-200 to-accent-700 text-white mb-10">
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey!</h2>

                {/* Subtitle */}
                <p className="text-lg font-medium mb-8">
                    Whether you want to buy or sell, we’re here to help.
                </p>

                {/* Buttons */}
                <div className="space-x-4">
                    <Link
                        to="/register"
                        className="bg-accent-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-primary-400 transition"
                    >
                        Register Now
                    </Link>
                    <Link
                        to="/research"
                        className="bg-primary-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-accent-500 transition"
                    >
                        Browse Cars
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
