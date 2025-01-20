import { React, useState } from "react";
import axios from "axios";

const CarDetailsModal = ({ car, onClose }) => {
    const [bidPrice, setBidPrice] = useState("");
    const [testDriveDetails, setTestDriveDetails] = useState({
        name: "", // Updated from "username" to "name"
        email: "",
        date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/test-drives", {
                car_id: car.id,
                ...testDriveDetails,
                bid_price: bidPrice,
            })
            .then(() => {
                alert("Test drive appointment created successfully!");
                onClose();
            })
            .catch((error) => {
                console.error("Failed to create appointment:", error.response?.data || error.message);
            });
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

                    {/* Test Drive Form */}
                    <h3 className="mt-8 text-lg font-bold">Schedule Test Drive</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={testDriveDetails.name} // Updated from "username" to "name"
                            onChange={(e) =>
                                setTestDriveDetails({ ...testDriveDetails, name: e.target.value })
                            }
                            className="w-full border p-2 rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={testDriveDetails.email}
                            onChange={(e) =>
                                setTestDriveDetails({ ...testDriveDetails, email: e.target.value })
                            }
                            className="w-full border p-2 rounded-lg"
                        />
                        <input
                            type="date"
                            value={testDriveDetails.date}
                            onChange={(e) =>
                                setTestDriveDetails({ ...testDriveDetails, date: e.target.value })
                            }
                            className="w-full border p-2 rounded-lg"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsModal;
