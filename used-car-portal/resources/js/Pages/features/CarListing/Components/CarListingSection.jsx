import React, { useEffect, useState } from "react";
import axios from "axios";

const CarListingSection = ({ cars }) => {

    const toggleBiddingStatus = async (carId, currentStatus) => {
        try {
            const newStatus = currentStatus === "active" ? "inactive" : "active";
            await axios.patch(`/cars/${carId}/update-bidding-status`, { bidding_status: newStatus });
            setCars((prevCars) =>
                prevCars.map((car) =>
                    car.id === carId ? { ...car, bidding_status: newStatus } : car
                )
            );
        } catch (error) {
            console.error("Failed to update bidding status:", error);
        }
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
                                        src={car.images[0]}
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
                                    <p className="text-gray-600">Year: {car.year}</p>
                                    <p className="text-accent-500 font-semibold text-lg">
                                        Price: ${Number(car.price).toLocaleString()}
                                    </p>
                                    <p className="text-blue-600 font-medium text-lg">
                                        Bidding Price: ${Number(car.biddingPrice).toLocaleString()}
                                    </p>
                                    <button
                                            onClick={() => handleViewDetails(car.id)}
                                            className="mt-4 bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition"
                                        >
                                            View Details
                                        </button>

                                        <button
                                            onClick={() => toggleBiddingStatus(car.id, car.bidding_status)}
                                            className={`mt-2 px-4 py-2 rounded ${
                                                car.bidding_status === "active" ? "bg-red-600 text-white" : "bg-green-600 text-white"
                                            }`}
                                        >
                                            {car.bidding_status === "active" ? "Deactivate Bidding" : "Activate Bidding"}
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
        </section>
    );
};
export default CarListingSection;