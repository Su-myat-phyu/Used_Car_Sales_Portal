import React from "react";
import { usePage } from '@inertiajs/react';

const CallToActionSection = () => {
    const { url } = usePage();

    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">
                    Looking to Sell Your Car?
                </h2>

                {/* Subtitle */}
                <p className="text-lg mb-8">
                    Post your car today and connect with buyers instantly.
                </p>

                {/* CTA Button */}
                <a
                    href="/register"
                    className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
                >
                    Post Your Car Now
                </a>
            </div>
        </section>
    );
};

export default CallToActionSection;
