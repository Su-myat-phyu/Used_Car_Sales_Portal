import React, { useState } from "react";

const MainDashboardSection = () => {
    // State for form data
    const [carDetails, setCarDetails] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        biddingPrice: "",
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
            setCarDetails({ ...carDetails, images: Array.from(e.target.files) });
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

    // Submit handlers (placeholders for backend integration)
    const handlePostCar = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("make", carDetails.make);
        formData.append("model", carDetails.model);
        formData.append("year", carDetails.year);
        formData.append("price", carDetails.price);
        formData.append("biddingPrice", carDetails.biddingPrice);
        carDetails.images.forEach((image, index) =>
            formData.append(`images[${index}]`, image)
        );

        try {
            const response = await axios.post("/cars", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Car posted successfully!");
            window.location.href = "/car-listing"; // Redirect to car listing page
            } catch (error) {
                console.error("Error posting car:", error.response.data);
            }
        };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", profile);
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
                                placeholder="BiddingPrice"
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

                {/* Update Profile */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={profile.fullName}
                                onChange={(e) => handleChange(e, "profile")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={profile.email}
                                onChange={(e) => handleChange(e, "profile")}
                                className="border rounded-md p-2"
                                required
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={profile.phoneNumber}
                                onChange={(e) => handleChange(e, "profile")}
                                className="border rounded-md p-2"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={profile.address}
                                onChange={(e) => handleChange(e, "profile")}
                                className="border rounded-md p-2"
                            />
                        </div>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "profilePicture")}
                            className="border rounded-md p-2 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>

            
        </section>
    );
};

export default MainDashboardSection;
