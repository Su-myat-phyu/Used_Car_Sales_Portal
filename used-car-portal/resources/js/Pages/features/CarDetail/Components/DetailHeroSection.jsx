import React from "react";

const DetailHeroSection = ({ car }) => {
    return (
        <section className="relative bg-gray-50">
            {/* Background Image */}
            <div className="relative">
                <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

            <div className="absolute inset-0 flex flex-col justify-end text-white p-6 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold">{car.title}</h1>
                <p className="text-2xl font-semibold mt-2">{car.price}</p>
                <p className="text-lg italic mt-4">{car.tagline}</p>
            </div>
        </section>
    );
};

export default DetailHeroSection;
