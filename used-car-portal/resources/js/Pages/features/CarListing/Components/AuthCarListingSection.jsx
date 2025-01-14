import React, { useState } from "react";

const AuthCarListingSection = ({ cars, handleSubmitBid }) => {
    const [biddingAmounts, setBiddingAmounts] = useState({}); // Store bid amounts per car

    const handleInputChange = (carId, value) => {
        setBiddingAmounts({
            ...biddingAmounts,
            [carId]: value,
        });
    };

    const handleBidSubmit = (carId) => {
        const bidAmount = biddingAmounts[carId];
        if (bidAmount) {
            handleSubmitBid(carId, bidAmount); // Call the handler from props
            alert(`Bid submitted: $${bidAmount} for Car ID: ${carId}`);
            setBiddingAmounts({
                ...biddingAmounts,
                [carId]: "", // Reset the bid amount field for that car
            });
        } else {
            alert("Please enter a bid amount before submitting.");
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
                                {/* Car Image */}
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

                                {/* Car Details */}
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
                                    

                                    {/* Show Bidding Form for all cars */}
                                    <div className="mt-4">
                                        <input
                                            type="number"
                                            placeholder="Enter your bid"
                                            className="border border-gray-300 py-2 px-4 rounded-lg w-full mb-2"
                                            value={biddingAmounts[car.id] || ""}
                                            onChange={(e) =>
                                                handleInputChange(car.id, e.target.value)
                                            }
                                        />
                                        <button
                                            onClick={() => handleBidSubmit(car.id)}
                                            className="bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition"
                                        >
                                            Submit Bid
                                        </button>
                                    </div>

                                    {/* View Details */}
                                    <button
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
        </section>
    );
};

export default AuthCarListingSection;
