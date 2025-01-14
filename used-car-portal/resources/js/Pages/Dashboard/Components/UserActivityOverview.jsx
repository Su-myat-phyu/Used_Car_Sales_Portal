import React, { useEffect, useState } from "react";
import axios from "axios";

const UserActivityOverview = () => {
    const [carsForSale, setCarsForSale] = useState([]);
    const [activeBids, setActiveBids] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user's cars for sale
        const fetchCarsForSale = async () => {
            try {
                const response = await axios.get("/user/cars-for-sale");
                setCarsForSale(response.data);
            } catch (err) {
                setError("Failed to fetch cars for sale.");
            }
        };

        // Fetch user's active bids
        const fetchActiveBids = async () => {
            try {
                const response = await axios.get("/cars/active-bids");
                setActiveBids(response.data);
            } catch (err) {
                setError("Failed to fetch active bids.");
            }
        };

        fetchCarsForSale();
        fetchActiveBids();
    }, []);

    const handleDeleteCar = async (carId) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            try {
                await axios.delete(`/user/car/${carId}`);
                setCarsForSale((prevCars) => prevCars.filter((car) => car.id !== carId));
                alert("Car deleted successfully");
            } catch (err) {
                alert("Failed to delete car. Please try again.");
            }
        }
    };
    const handleToggleBiddingStatus = async (carId, currentStatus) => {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        try {
            await axios.patch(`/cars/${carId}/update-bidding-status`, {
                bidding_status: newStatus,
            });
            setCarsForSale((prevCars) =>
                prevCars.map((car) =>
                    car.id === carId ? { ...car, bidding_status: newStatus } : car
                )
            );
        } catch (error) {
            alert("Failed to update bidding status. Please try again.");
            console.error(error);
        }
    };

    const handleViewCar = (carId) => {
        alert(`View car with ID: ${carId}`);
    };

    const handleViewBid = (id) => {
        alert(`View bid with ID: ${id}`);
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
                                        <p className="text-gray-600">${car.price.toLocaleString()}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleViewCar(car.id)}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCar(car.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleToggleBiddingStatus(car.id, car.bidding_status)}
                                            className={`px-4 py-2 rounded-md ${
                                                car.bidding_status === "active"
                                                    ? "bg-red-500 text-white"
                                                    : "bg-blue-500 text-white"
                                            }`}
                                        >
                                            {car.bidding_status === "active"
                                                ? "Deactivate Bids"
                                                : "Activate Bids"}
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
            {/*<div>
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
                    <h3 className="font-bold">
                        {bid.car.make} {bid.car.model} ({bid.car.year})
                    </h3>
                    <p className="text-gray-600">Bid Amount: ${bid.bidAmount.toLocaleString()}</p>
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
            </div>*/}
        </section>
    );
};

export default UserActivityOverview;