import React from "react";
import carBanner from "../../../../../assets/carBanner.jpg";

const CarListingHero = () => {
    return (
        <section className="relative bg-gradient-to-b from-primary-700 to-primary-500 text-white py-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: `url(${carBanner})`,
                }}
            ></div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Title */}
                <h1 className="text-5xl font-bold mb-4">Find Your Perfect Ride</h1>
                {/* Subtitle */}
                <p className="text-lg mb-8">
                    Explore a wide range of used cars at unbeatable prices.
                </p>

                {/* Search Bar */}
                <form className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Make Filter */}
                    <select
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Make
                        </option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="BMW">BMW</option>
                    </select>

                    {/* Model Filter */}
                    <select
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Model
                        </option>
                        <option value="Camry">Camry</option>
                        <option value="Civic">Civic</option>
                        <option value="Mustang">Mustang</option>
                        <option value="X5">X5</option>
                    </select>

                    {/* Year Filter */}
                    <select
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Year
                        </option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>

                    {/* Price Range Filter */}
                    <select
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Price Range
                        </option>
                        <option value="0-10000">$0 - $10,000</option>
                        <option value="10000-20000">$10,000 - $20,000</option>
                        <option value="20000-30000">$20,000 - $30,000</option>
                        <option value="30000-50000">$30,000 - $50,000</option>
                    </select>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="bg-primary-700 text-white rounded-md py-3 px-6 hover:bg-primary-600 transition"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CarListingHero;
