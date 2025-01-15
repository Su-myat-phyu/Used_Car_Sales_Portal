import React, { useEffect, useState } from "react";
import axios from "axios";
import CarDetailModal from "../../features/CarListing/Components/CarDetailModal";

const UserActivityOverview = () => {
    const [carsForSale, setCarsForSale] = useState([]);
    const [bidsReceived, setBidsReceived] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCar, setSelectedCar] = useState(null);

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

        // Fetch bids received for user's cars
        const fetchBidsReceived = async () => {
            try {
                const response = await axios.get("/user/bids-received");
                console.log("Bids Received:", response.data); 
                setBidsReceived(response.data);
            } catch (err) {
                console.error("Error fetching bids received:", err.response || err.message);
                setError("Failed to fetch bids received.");
            }
        };

        fetchCarsForSale();
        fetchBidsReceived();
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

    const handleUpdateCar = async (updatedCar) => {
        try {
            const response = await axios.put(`/user/car/${updatedCar.id}`, updatedCar);
            setCarsForSale((prevCars) =>
                prevCars.map((car) => (car.id === updatedCar.id ? response.data : car))
            );
            alert("Car updated successfully");
            setSelectedCar(null);
        } catch (err) {
            alert("Failed to update car. Please try again.");
        }
    };

    const handleAcceptBid = async (bidId) => {
        try {
            await axios.post(`/user/bid/${bidId}/accept`);
            alert("Bid accepted successfully.");
            setBidsReceived((prevBids) => prevBids.filter((bid) => bid.id !== bidId));
        } catch (err) {
            alert("Failed to accept bid. Please try again.");
        }
    };

    const handleDeclineBid = async (bidId) => {
        try {
            await axios.post(`/user/bid/${bidId}/decline`);
            alert("Bid declined successfully.");
            setBidsReceived((prevBids) => prevBids.filter((bid) => bid.id !== bidId));
        } catch (err) {
            alert("Failed to decline bid. Please try again.");
        }
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
                                            onClick={() => setSelectedCar(car)}
                                            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCar(car.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                        >
                                            Deactivate
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
                
            {/* Update Car Modal */}
            {selectedCar && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Update Car Details</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateCar(selectedCar);
                            }}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="make"
                                placeholder="Car Make"
                                value={selectedCar.make}
                                onChange={(e) =>
                                    setSelectedCar({ ...selectedCar, make: e.target.value })
                                }
                                className="w-full border rounded-lg p-2"
                                required
                            />
                            <input
                                type="text"
                                name="model"
                                placeholder="Car Model"
                                value={selectedCar.model}
                                onChange={(e) =>
                                    setSelectedCar({ ...selectedCar, model: e.target.value })
                                }
                                className="w-full border rounded-lg p-2"
                                required
                            />
                            <input
                                type="number"
                                name="year"
                                placeholder="Year"
                                value={selectedCar.year}
                                onChange={(e) =>
                                    setSelectedCar({ ...selectedCar, year: e.target.value })
                                }
                                className="w-full border rounded-lg p-2"
                                required
                            />
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={selectedCar.price}
                                onChange={(e) =>
                                    setSelectedCar({ ...selectedCar, price: e.target.value })
                                }
                                className="w-full border rounded-lg p-2"
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={selectedCar.description}
                                onChange={(e) =>
                                    setSelectedCar({ ...selectedCar, description: e.target.value })
                                }
                                className="w-full border rounded-lg p-2"
                                rows={4}
                                required
                            ></textarea>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedCar(null)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Bids Received */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Bids Received</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    {bidsReceived.length > 0 ? (
                        <ul className="space-y-4">
                            {bidsReceived.map((bid) => (
                                <li
                                    key={bid.id}
                                    className="flex flex-col border-b pb-4"
                                >
                                    <div className="mb-2">
                                        <h3 className="font-bold">
                                            {bid.car.make} {bid.car.model} ({bid.car.year})
                                        </h3>
                                        <p className="text-gray-600">Bid Amount: ${bid.bid_amount.toLocaleString()}</p>
                                        <p className="text-gray-600">Bidder: {bid.user.full_name}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleAcceptBid(bid.id)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleDeclineBid(bid.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                        >
                                            Decline
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No bids received.</p>
                    )}
                </div>
            </div>
            
        </section>
    );
};

export default UserActivityOverview;
