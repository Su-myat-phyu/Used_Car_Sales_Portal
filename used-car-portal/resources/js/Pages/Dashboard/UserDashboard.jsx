import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
    const [formData, setFormData] = useState({
        carTitle: "",
        carPrice: "",
        carImage: null,
        userName: "",
        userEmail: "",
        userBidPrice: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, carImage: e.target.files[0] });
    };

    const handlePostCar = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("carTitle", formData.carTitle);
        form.append("carPrice", formData.carPrice);
        form.append("carImage", formData.carImage);

        try {
            const response = await axios.post("/dashboard/post-car", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(response.data.message);
        } catch (error) {
            alert("Error posting car: " + error.response.data.message);
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/dashboard/update-profile", {
                userName: formData.userName,
                userEmail: formData.userEmail,
            });
            alert(response.data.message);
        } catch (error) {
            alert("Error updating profile: " + error.response.data.message);
        }
    };

    const handlePostBid = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/dashboard/post-bid", {
                userBidPrice: formData.userBidPrice,
            });
            alert(response.data.message);
        } catch (error) {
            alert("Error posting bid: " + error.response.data.message);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Post a Car for Sale */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">Post a Car for Sale</h2>
                <form onSubmit={handlePostCar}>
                    <input type="text" name="carTitle" onChange={handleChange} required />
                    <input type="text" name="carPrice" onChange={handleChange} required />
                    <input type="file" onChange={handleFileChange} required />
                    <button type="submit">Post Car</button>
                </form>
            </section>

            {/* Update Profile */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">Update Profile</h2>
                <form onSubmit={handleUpdateProfile}>
                    <input type="text" name="userName" onChange={handleChange} required />
                    <input type="email" name="userEmail" onChange={handleChange} required />
                    <button type="submit">Update Profile</button>
                </form>
            </section>

            {/* Post Bid */}
            <section>
                <h2 className="text-2xl font-semibold">Post Your Bid</h2>
                <form onSubmit={handlePostBid}>
                    <input type="number" name="userBidPrice" onChange={handleChange} required />
                    <button type="submit">Post Bid</button>
                </form>
            </section>
        </div>
    );
};

export default UserDashboard;
