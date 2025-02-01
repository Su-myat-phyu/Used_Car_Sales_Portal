import React, { useState } from "react";
import axios from "axios";

const CarDetailsModal = ({ car, onClose }) => {
    const [bidPrice, setBidPrice] = useState("");
    const [testDriveDetails, setTestDriveDetails] = useState({
        name: "",
        email: "",
        date: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/test-drives", {
                car_id: car.id,
                ...testDriveDetails,
                bid_price: bidPrice,
            });
            alert("Test drive appointment created successfully!");
            setErrorMessage(""); // Clear any existing error message
            onClose();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle double booking error
                setErrorMessage(error.response.data.error);
            } else {
                console.error("Failed to create appointment:", error.response?.data || error.message);
                setErrorMessage("Failed to schedule test drive. Please try again.");
            }
        }
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

                    {/* New Details */}
                    <p>Mileage: {car.mileage || 'N/A'}</p>
                    <p>Transmission: {car.transmission || 'N/A'}</p>
                    <p>Fuel Type: {car.fuel_type || 'N/A'}</p>

                    {/*<h3>Features:</h3>
                    {car.features && car.features.length > 0 ? (
                        <ul>
                            {car.features.map((feature, index) => (
                                <li key={index}>- {feature}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No features listed.</p>
                    )} */}

{/*<h3>Features:</h3>
                    {Array.isArray(car.features) && car.features.length > 0 ? (
                        <ul>
                            {car.features.map((feature, index) => (
                                <li key={index}>- {feature}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No features listed.</p>
                    )} */}

<h3>Features:</h3>
{(() => {
    // Ensure features is an array
    const features = Array.isArray(car.features)
        ? car.features
        : JSON.parse(car.features || '[]');

    return features.length > 0 ? (
        <ul>
            {features.map((feature, index) => (
                <li key={index}>- {feature}</li>
            ))}
        </ul>
    ) : (
        <p>No features listed.</p>
    );
})()}


{/*<div>
    <p>Mileage: {car.mileage ? `${car.mileage} km` : "N/A"}</p>
    <p>Transmission: {car.transmission || "N/A"}</p>
    <p>Fuel Type: {car.fuel_type || "N/A"}</p>
    <p>Features: 
        {car.features && car.features.length > 0 
            ? car.features.join(", ") 
            : "No features listed."}
    </p>
</div>*/}


                    {/* Test Drive Form */}
                    <h3 className="mt-8 text-lg font-bold">Schedule Test Drive</h3>
                    {errorMessage && (
                        <div className="text-red-500 mb-4">{errorMessage}</div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={testDriveDetails.name}
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