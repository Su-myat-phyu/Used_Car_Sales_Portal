import React, { useState } from "react";

const UserActivityOverview = () => {
    // Dummy data for cars posted for sale
    const [carsForSale, setCarsForSale] = useState([
        {
            id: 1,
            make: "Toyota",
            model: "Camry",
            year: 2021,
            price: "$20,000",
        },
        {
            id: 2,
            make: "Honda",
            model: "Civic",
            year: 2020,
            price: "$18,000",
        },
    ]);

    // Dummy data for active bids
    const [activeBids, setActiveBids] = useState([
        {
            id: 1,
            car: "Ford Mustang",
            bidAmount: "$25,000",
        },
        {
            id: 2,
            car: "BMW 3 Series",
            bidAmount: "$30,000",
        },
    ]);

    // Handlers for actions
    const handleEditCar = (carId) => {
        alert(`Edit car with ID: ${carId}`);
    };

    const handleDeleteCar = (carId) => {
        setCarsForSale((prevCars) => prevCars.filter((car) => car.id !== carId));
        alert(`Deleted car with ID: ${carId}`);
    };

    const handleViewCar = (carId) => {
        alert(`View car with ID: ${carId}`);
    };

    const handleViewBid = (bidId) => {
        alert(`View bid with ID: ${bidId}`);
    };

    return (
        <section className="container mx-auto px-6 py-12">
            {/* Cars Posted for Sale */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Cars Posted for Sale</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    {carsForSale.length > 0 ? (
                        <ul className="space-y-4">
                            {carsForSale.map((car) => (
                                <li
                                    key={car.id}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <div>
                                        <h3 className="font-bold">
                                            {car.make} {car.model} ({car.year})
                                        </h3>
                                        <p className="text-gray-600">{car.price}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEditCar(car.id)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCar(car.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleViewCar(car.id)}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                                        >
                                            View
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No cars posted for sale.</p>
                    )}
                </div>
            </div>

            {/* Active Bids */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Active Bids</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    {activeBids.length > 0 ? (
                        <ul className="space-y-4">
                            {activeBids.map((bid) => (
                                <li
                                    key={bid.id}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <div>
                                        <h3 className="font-bold">{bid.car}</h3>
                                        <p className="text-gray-600">Bid Amount: {bid.bidAmount}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleViewBid(bid.id)}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                                        >
                                            View
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No active bids placed.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default UserActivityOverview;
