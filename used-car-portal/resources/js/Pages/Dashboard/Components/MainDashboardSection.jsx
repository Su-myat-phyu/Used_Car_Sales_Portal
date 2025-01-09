import React, { useState } from "react";
import axios from "axios";
import CarListingSection from "./CarListingSection"; // Import the CarListingSection

const MainDashboardSection = () => {
    const [carDetails, setCarDetails] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        biddingPrice: "",
        images: [],
    });
    const [newCar, setNewCar] = useState(null); // State to hold the newly added car

    const handlePostCar = async (e) => {
        e.preventDefault();

        try {
            if (! carDetails.make || !carDetails.model || !carDetails.year || !carDetails.price || !carDetails.biddingPrice) {
                alert("Please fill out all required fields.");
                return;
            }

            const formData = new FormData();
            formData.append("make", carDetails.make);
            formData.append("model", carDetails.model);
            formData.append("year", carDetails.year);
            formData.append("price", carDetails.price);
            formData.append("biddingPrice", carDetails.biddingPrice);

            if (Array.isArray(carDetails.images) && carDetails.images.length > 0) {
                carDetails.images.forEach((file, index) => {
                    formData.append(`images[${index}]`, file);
                });
            }

            const response = await axios.post("/cars", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Car posted successfully!");
            setNewCar(response.data.car); // Set the newly added car
            setCarDetails({
                make: "",
                model: "",
                year: "",
                price: "",
                biddingPrice: "",
                images: [],
            }); // Reset form fields
        } catch (error) {
            console.error("Error posting car:", error.response?.data || error.message || "Unknown error");
            alert("Failed to post the car. Please try again.");
        }
    };

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Post a Car for Sale */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Post a Car for Sale</h2>
                    <form onSubmit={handlePostCar} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="make"
                                placeholder="Car Make"
                                value={carDetails.make}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="text"
                                name="model"
                                placeholder="Car Model"
                                value={carDetails.model}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="number"
                                name="year"
                                placeholder="Year"
                                value={carDetails.year}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={carDetails.price}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="text"
                                name="biddingPrice"
                                placeholder="Bidding Price"
                                value={carDetails.biddingPrice}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                        </div>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => handleFileChange(e, "carImages")}
                            className="border rounded-md p-2 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Post Car
                        </button>
                    </form>
                </div>

                {/* Car Listing Section */}
                <CarListingSection newCar={newCar} />
            </div>
        </section>
    );
};

export default MainDashboardSection;