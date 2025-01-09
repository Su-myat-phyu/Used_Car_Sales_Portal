import React, { useEffect, useState } from "react";
import carBanner from "../../../../../assets/carBanner.jpg";
import axios from "axios";

const CarHeroSection = ({ cars = [], onFilterChange }) => {
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        year: "",
        minPrice: "",
        maxPrice: "",
    });

    useEffect(() => {
        // Extract unique makes and models from the cars prop
        if (cars.length > 0) {
            const uniqueMakes = [...new Set(cars.map(car => car.make))];
            const uniqueModels = [...new Set(cars.map(car => car.model))];

            setMakes(uniqueMakes);
            setModels(uniqueModels);
        }
    }, [cars]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("/cars", {
                params: filters, 
            });
            onFilterChange(response.data.cars); 
        } catch (error) {
            console.error("Error filtering cars:", error);
        }
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

                <form
                    onSubmit={handleSearch}
 className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4"
                >
                    <select
                        name="make"
                        value={filters.make}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    >
                        <option value="">Make</option>
                        {makes.map((make) => (
                            <option key={make} value={make}>
                                {make}
                            </option>
                        ))}
                    </select>
                    <select
                        name="model"
                        value={filters.model}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-700"
                    >
                        <option value="">Model</option>
                        {models.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
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
                    <button
                        type="submit"
                        className="bg-primary-500 text-white rounded-md p-3 hover:bg-primary-600 transition duration-200"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CarHeroSection;