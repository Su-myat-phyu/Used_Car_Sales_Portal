import React from "react";

const CarDetailsModal = ({ car, onClose }) => {
    const handleSubmitBid = () => {
        // Redirect to login for bidding
        window.location.href = "/login";
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative">
            <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
        >
            ✕ Close
        </button>
                <div>
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
                    <h2 className="text-2xl font-bold">
                        {car.make} {car.model} ({car.year})
                    </h2>
                    <p className="text-gray-700 mb-4">{car.description}</p>
                    <p className="text-xl font-semibold text-accent-500">
                        Price: ${Number(car.price).toLocaleString()}
                    </p>

                    {/* Bidding Form */}
                    <h3 className="mt-6 text-lg font-bold">Place a Bid</h3>
                    <input
                                            type="number"
                                            placeholder="Enter your bid"
                                            className="border border-gray-300 py-2 px-4 rounded-lg w-full mb-2"/>
                    <button
                        onClick={handleSubmitBid}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                    >
                        Submit Bid
                    </button>

                    {/* Schedule Test Drive */}
                    <h3 className="mt-8 text-lg font-bold">Schedule Test Drive</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full border p-2 rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full border p-2 rounded-lg"
                        />
                        <input
                            type="date"
                            name="date"
                            className="w-full border p-2 rounded-lg"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            Schedule
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsModal;
