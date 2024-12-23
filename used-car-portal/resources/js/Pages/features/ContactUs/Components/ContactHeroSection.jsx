import React from "react";
import bannerImage1 from "../../../../../assets/bannerImage1.jpg"; // Replace with your actual image path

const ContactHeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[500px] flex items-center"
            style={{
                backgroundImage: `url(${bannerImage1})`, // Replace with the actual image URL
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    We’re Here to Help!
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl">
                    Have a question? Feel free to reach out to us anytime.
                </p>
            </div>
        </section>
    );
};

export default ContactHeroSection;
