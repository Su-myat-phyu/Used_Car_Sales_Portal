import CarDetailModal from "./CarDetailModal";
import React, {useState } from "react";

const CarListingSection = ({ cars }) => {
    const [selectedCar, setSelectedCar] = useState(null);

    const handleViewDetails = (car) => {
        setSelectedCar(car);
    };

    const closeModal = () => {
        setSelectedCar(null);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Available Cars
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.length > 0 ? (
                        cars.map((car) => (
                            <div
                                key={car.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                {car.images && car.images.length > 0 ? (
                                    <img
                                        src={car.images[0]} // Display the first image
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
                                        Year: {car.registration_year || car.year}
                                    </p>
                                    <p className="text-accent-500 font-semibold text-lg">
                                        Price: ${Number(car.price).toLocaleString() || "N/A"}
                                    </p>

                                    
                                    <button
                                        onClick={() => handleViewDetails(car)}
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
            </div>

            {/* Modal */}
            {selectedCar && (
                <CarDetailModal car={selectedCar} onClose={closeModal} />
            )}
        </section>
    );
};

export default CarListingSection;
