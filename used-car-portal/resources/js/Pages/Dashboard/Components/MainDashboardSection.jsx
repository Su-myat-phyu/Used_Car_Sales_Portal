import React, { useState } from "react";

const MainDashboardSection = () => {
    // State for form data
    const [carDetails, setCarDetails] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
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
    const [bid, setBid] = useState({
        selectedCar: "",
        biddingPrice: "",
    });

    // Handle file uploads
    const handleFileChange = (e, field) => {
        if (field === "carImages") {
            setCarDetails({
                ...carDetails,
                images: Array.from(e.target.files),
            });
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
        } else if (type === "bid") {
            setBid({ ...bid, [name]: value });
        }
    };

    // Submit handlers (placeholders for backend integration)
    const handlePostCar = (e) => {
        e.preventDefault();
        console.log("Car Details Submitted:", carDetails);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", profile);
    };

    const handlePostBid = (e) => {
        e.preventDefault();
        console.log("Bid Posted:", bid);
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
                                type="text"
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
                                name="mileage"
                                placeholder="Mileage"
                                value={carDetails.mileage}
                                onChange={(e) => handleChange(e, "carDetails")}
                                className="border rounded-md p-2"
                                required
                            />
                        </div>
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={carDetails.description}
                            onChange={(e) => handleChange(e, "carDetails")}
                            className="border rounded-md p-2 w-full"
                            rows="4"
                            required
                        />
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

            {/* Post a Bidding Price */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Post Your Bid</h2>
                <form onSubmit={handlePostBid} className="space-y-4">
                    <select
                        name="selectedCar"
                        value={bid.selectedCar}
                        onChange={(e) => handleChange(e, "bid")}
                        className="border rounded-md p-2 w-full"
                    >
                        <option value="" disabled>
                            Select a Car
                        </option>
                        {/* Replace with dynamic car listings */}
                        <option value="Car 1">Car 1</option>
                        <option value="Car 2">Car 2</option>
                    </select>
                    <input
                        type="text"
                        name="biddingPrice"
                        placeholder="Bidding Price"
                        value={bid.biddingPrice}
                        onChange={(e) => handleChange(e, "bid")}
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-500 text-white px-4 py-2 rounded-md"
                    >
                        Post Bid
                    </button>
                </form>
            </div>
        </section>
    );
};

export default MainDashboardSection;
