import React, { useState } from "react";

const MainDashboardSection = () => {
    // State for form data
    const [carDetails, setCarDetails] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
        transmission: "",
        fuel_type: "",
        description: "",
        features: [], // Array to store selected features
        images: [],
    });

    const featureOptions = [
        "Air conditioning",
        "Cruise control",
        "Heated front seats",
        "Multifunctional steering wheel",
        "Navigation system",
        "Trailer coupling",
        "LED headlights",
        "Xenon headlights",
    ];

    // Handle file uploads
    const handleFileChange = (e, field) => {
        if (field === "carImages") {
            const files = Array.from(e.target.files);
            if (files.length > 5) {
                alert("You can only upload up to 5 images.");
                return;
            }
            setCarDetails({ ...carDetails, images: files });
        }
    };

    // Handle input changes
    const handleChange = (e, type) => {
        const { name, value } = e.target;
        setCarDetails({ ...carDetails, [name]: value });
    };

    const handleFeatureChange = (feature) => {
        const updatedFeatures = carDetails.features || [];
        if (updatedFeatures.includes(feature)) {
            // Remove the feature if already selected
            setCarDetails({
                ...carDetails,
                features: updatedFeatures.filter((f) => f !== feature),
            });
        } else {
            // Add the feature to the selected list
            setCarDetails({
                ...carDetails,
                features: [...updatedFeatures, feature],
            });
        }
    };

    const handlePostCar = async (e) => {
        e.preventDefault();

        try {
            if (!carDetails.make || !carDetails.model || !carDetails.year || !carDetails.price) {
                alert("Please fill out all required fields.");
                return;
            }

            const formData = new FormData();
            formData.append("make", carDetails.make);
            formData.append("model", carDetails.model);
            formData.append("year", carDetails.year);
            formData.append("price", carDetails.price);
            formData.append("mileage", carDetails.mileage);
            formData.append("transmission", carDetails.transmission);
            formData.append("fuel_type", carDetails.fuel_type);
            formData.append("description", carDetails.description);
            //formData.append("features", JSON.stringify(carDetails.features));
            formData.append("features", JSON.stringify(carDetails.features || []));


            // Handle features as a comma-separated string or send as an array
            //formData.append("features", carDetails.features.join(","));

            // Handle images array
            if (Array.isArray(carDetails.images) && carDetails.images.length > 0) {
                carDetails.images.forEach((file, index) => {
                    formData.append(`images[${index}]`, file);
                });
            }

            const response = await axios.post("/cars", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Car posted successfully!");
            window.location.href = "/authResearch"; // Redirect to the listing page
        } catch (error) {
            console.error("Error posting car:", error.response?.data || error.message || "Unknown error");
            alert("Failed to post the car. Please try again.");
        }
    };

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Post a Car for Sale
                </h2>
                <form onSubmit={handlePostCar} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="make"
                            placeholder="Car Make (e.g. Toyota)"
                            value={carDetails.make}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="text"
                            name="model"
                            placeholder="Car Model (e.g. Corolla)"
                            value={carDetails.model}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="number"
                            name="year"
                            placeholder="Year"
                            value={carDetails.year}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={carDetails.price}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <textarea
                            name="description"
                            placeholder="Car Description"
                            value={carDetails.description}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="number"
                            name="mileage"
                            placeholder="Mileage (e.g., 10000)"
                            value={carDetails.mileage}
                            onChange={(e) => handleChange(e)}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <select
                    name="transmission"
                    value={carDetails.transmission}
                    onChange={(e) => handleChange(e)}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                >
                    <option value="">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic+Manual">Automatic + Manual</option>
                </select>
                <select
                    name="fuel_type"
                    value={carDetails.fuel_type}
                    onChange={(e) => handleChange(e)}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                >
                    <option value="">Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                </select>

                                    </div>

                                    <h3>Features:</h3>
                    {[
                        "Air conditioning",
                        "Cruise control",
                        "Heated front seats",
                        "Multifunctional steering wheel",
                        "Navigation system",
                        "Trailer coupling",
                        "LED headlights",
                        "Xenon headlights",
                    ].map((feature, index) => (
                        <label key={index} className="block">
            <input
                type="checkbox"
                value={feature}
                onChange={(e) => {
                    const selectedFeatures = formData.features || [];
                    if (e.target.checked) {
                        setFormData({ ...formData, features: [...selectedFeatures, feature] });
                    } else {
                        setFormData({
                            ...formData,
                            features: selectedFeatures.filter((f) => f !== feature),
                        });
                    }
                }}
            />
            {feature}
        </label>
    ))}

                    <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(e, "carImages")}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Post Car
                    </button>
                </form>
            </div>
        </section>
    );
};

export default MainDashboardSection;
