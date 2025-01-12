import React, { useEffect, useState } from "react";
import carBanner from "../../../../../assets/carBanner.jpg";
import axios from "axios";

const CarHeroSection = ({ onFilterChange }) => {
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [allCars, setAllCars] = useState([]); // Store all cars
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        year: "",
        minPrice: "",
        maxPrice: "",
    });

    // Fetch all cars to populate dropdowns and store all cars
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("/cars");
                const cars = response.data;

                setAllCars(cars); // Store all cars
                onFilterChange(cars); // Initially display all cars

                // Extract unique makes and models from cars
                const uniqueMakes = [...new Set(cars.map((car) => car.make))];
                const uniqueModels = [...new Set(cars.map((car) => car.model))];

                setMakes(uniqueMakes);
                setModels(uniqueModels);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);

        // Apply filtering immediately
        applyFilters(updatedFilters);
    };

    const applyFilters = (currentFilters) => {
        console.log("Filters:", currentFilters); // Log selected filters
        console.log("All Cars:", allCars); // Log all cars before filtering
    
        const filteredCars = allCars.filter((car) => {
            const matchesMake = currentFilters.make
                ? car.make === currentFilters.make
                : true;
            const matchesModel = currentFilters.model
                ? car.model === currentFilters.model
                : true;
            const matchesYear = currentFilters.year
                ? car.registration_year?.toString() === currentFilters.year
                : true;
            const matchesMinPrice = currentFilters.minPrice
                ? car.price >= Number(currentFilters.minPrice)
                : true;
            const matchesMaxPrice = currentFilters.maxPrice
                ? car.price <= Number(currentFilters.maxPrice)
                : true;
    
            return (
                matchesMake &&
                matchesModel &&
                matchesYear &&
                matchesMinPrice &&
                matchesMaxPrice
            );
        });
    
        console.log("Filtered Cars:", filteredCars); // Log filtered results
        onFilterChange(filteredCars); // Update displayed cars
    };

    const handleClearFilters = () => {
        const defaultFilters = {
            make: "",
            model: "",
            year: "",
            minPrice: "",
            maxPrice: "",
        };
        setFilters(defaultFilters);
        onFilterChange(allCars); // Reset to all cars
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
                        type="button"
                        onClick={handleClearFilters}
                        className="bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition duration-200"
                    >
                        Clear Filters
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CarHeroSection;
