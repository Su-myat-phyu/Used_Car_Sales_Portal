import React from "react";
import { Link } from '@inertiajs/react';

const IntroductionSection = () => {
    return (
        <section className="bg-primary-50 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                    <img
                        src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image path
                        alt="Introduction to Cardiana"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-primary-700 font-roboto">
                        Welcome to Cardiana
                    </h1>
                    <p className="text-secondary-900 text-lg leading-relaxed">
                        Cardiana is your go-to platform for buying, selling, and exploring used cars. 
                        With a user-friendly interface and secure features, we aim to provide a seamless 
                        experience for car enthusiasts, sellers, and buyers alike.
                    </p>
                    <Link
                        to="/research"
                        className="bg-accent-500 text-white py-3 px-6 rounded-lg text-lg mt-6 hover:bg-accent-400 transition inline-block"
                    >
                        Explore Cars
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default IntroductionSection;
