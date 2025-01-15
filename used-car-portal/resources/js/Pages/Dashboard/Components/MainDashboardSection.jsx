import React, { useState } from "react";

const MainDashboardSection = () => {
    // State for form data
    const [carDetails, setCarDetails] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        description: "",
        images: [],
    });
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        profilePicture: null,
    });

    // Handle file uploads
    const handleFileChange = (e, field) => {
        if (field === "carImages") {
            const files = Array.from(e.target.files);
            if (files.length > 5) {
                alert("You can only upload up to 5 images.");
                return;
            }
            setCarDetails({ ...carDetails, images: files });
        } else if (field === "profilePicture") {
            setProfile({
                ...profile,
                profilePicture: e.target.files[0],
            });
        }
    };

    // Handle input changes
    const handleChange = (e, type) => {
        const { name, value } = e.target;

        if (type === "carDetails") {
            setCarDetails({ ...carDetails, [name]: value });
        } else if (type === "profile") {
            setProfile({ ...profile, [name]: value });
        } 
    };

    const handlePostCar = async (e) => {
    e.preventDefault();

    try {
        // Ensure carDetails is valid
        if (!carDetails.make || !carDetails.model || !carDetails.year || !carDetails.price) {
            alert("Please fill out all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("make", carDetails.make);
        formData.append("model", carDetails.model);
        formData.append("year", carDetails.year);
        formData.append("price", carDetails.price);
        formData.append("description", carDetails.description);

        // Handle images array
        if (Array.isArray(carDetails.images) && carDetails.images.length > 0) {
            carDetails.images.forEach((file, index) => {
                formData.append(`images[${index}]`, file);
            });
            //car.images.forEach((file, index) => {
                //formData.append(`images[${index}]`, file); // Correctly append files
            //});
        }

        const response = await axios.post("/cars", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        // Success feedback
        alert("Car posted successfully!");
        window.location.href = "/authResearch"; // Redirect to the listing page
    } catch (error) {
        // Improved error logging
        console.error("Error posting car:", error.response?.data || error.message || "Unknown error");
        alert("Failed to post the car. Please try again.");
    }
};




return (
    <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            {/* Post a Car for Sale */}
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Post a Car for Sale</h2>
                <form onSubmit={handlePostCar} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="make"
                            placeholder="Car Make (e.g. Toyota)"
                            value={carDetails.make}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            
                        />
                        <input
                            type="text"
                            name="model"
                            placeholder="Car Model (e.g. Corolla)"
                            value={carDetails.model}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="number"
                            name="year"
                            placeholder="Year"
                            value={carDetails.year}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={carDetails.price}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />

                        <textarea
                            name="description"
                            placeholder="Car Description"
                            value={carDetails.description}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />

                       
                        
                    </div>
                    
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

            
            
        </div>

        
    </section>
);
};

export default MainDashboardSection;
