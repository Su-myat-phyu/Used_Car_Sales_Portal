import React, { useEffect, useState } from "react";
import axios from "axios";

const CarListingSection = ({ newCar }) => {
    const [cars, setCars] = useState([]);
<<<<<<< HEAD
    const [error, setError] = useState(null);
=======
    const [error, setError] = useState(null); // Add error state
>>>>>>> e9a2b57 (Successfully added car image and details)

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("/cars");
<<<<<<< HEAD
                setCars(response.data);
=======
                console.log("Fetched Cars:", response.data); // Check response structure
                setCars(response.data); // Assuming response.data is an array
>>>>>>> e9a2b57 (Successfully added car image and details)
            } catch (error) {
                setError("Failed to load cars. Please try again later.");
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);

    useEffect(() => {
        if (newCar) {
            setCars((prevCars) => [...prevCars, newCar]);
        }
    }, [newCar]);

    const handleViewDetails = (id) => {
        console.log(`View details for car ID: ${id}`);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Available Cars
                </h2>
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cars.length > 0 ? (
                            cars.map((car) => (
                                <div
                                    key={car.id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                                >
                                    {car.images && car.images.length > 0 ? (
                                        <img
<<<<<<< HEAD
                                            src={car.images[0]}
=======
                                            src={car.images[0]} // Display the first image
>>>>>>> e9a2b57 (Successfully added car image and details)
                                            alt={`${car.make} ${car.model}`}
                                            className="w-full h-48 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                            No Image Available
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {car.make} {car.model}
                                        </h3>
                                        <p className="text-gray-600">
<<<<<<< HEAD
                                            Year: {car.year}
                                        </p>
                                        <p className="text-accent-500 font-semibold text-lg">
                                            Price: ${Number(car.price).toLocaleString() || "N/A"}
                                        </p>
                                        <p className="text-blue-600 font-medium text-lg">
                                            Bidding Price: ${Number(car.biddingPrice).toLocaleString() || "N/A"}
=======
                                            Year: {car.registration_year || car.year}
                                        </p>
                                        <p className="text-accent-500 font-semibold text-lg">
                                            Price: $
                                            {Number(car.price).toLocaleString() || "N/A"}
                                        </p>
                                        <p className="text-blue-600 font-medium text-lg">
                                            Bidding Price: $
                                            {Number(car.biddingPrice).toLocaleString() || "N/A"}
>>>>>>> e9a2b57 (Successfully added car image and details)
                                        </p>
                                        <button
                                            onClick={() => handleViewDetails(car.id)}
                                            className="mt-4 bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-full">
                                No cars match your search criteria.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CarListingSection;