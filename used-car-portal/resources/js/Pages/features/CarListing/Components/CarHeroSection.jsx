import React from "react";
import carBanner from "../../../../../assets/carBanner.jpg";

const CarHeroSection = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <section className="relative bg-gradient-to-b from-primary-700 to-primary-500 text-white py-24">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: `url(${carBanner})`,
                }}
            ></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">Find Your Perfect Ride</h1>
                <p className="text-lg mb-8">
                    Explore a wide range of used cars at unbeatable prices.
                </p>

                <form className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
                    <select
                        name="make"
                        value={filters.make}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    >
                        <option value="">Make</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="BMW">BMW</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Lexus">Lexus</option>
                    </select>
                    <select
                        name="model"
                        value={filters.model}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    >
                        <option value="">Model</option>
                        <option value="Camry">Camry</option>
                        <option value="Civic">Civic</option>
                        <option value="Mustang">Mustang</option>
                        <option value="3 Series">3 Series</option>
                        <option value="Model 3">Model 3</option>
                        <option value="Benz C200">Benz C200</option>
                        <option value="Q5">Q5</option>
                        <option value="Silverado">Silverado</option>
                        <option value="Wrangler">Wrangler</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="XC90">XC90</option>
                        <option value="RX 350">RX 350</option>
                    </select>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={filters.year}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    />
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    />
                </form>
            </div>
        </section>
    );
};

export default CarHeroSection;
