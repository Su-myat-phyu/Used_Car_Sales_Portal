import React, { useState, useEffect } from "react";
import axios from "axios";

const CarPostsApproval = () => {
    const [carPosts, setCarPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all car posts
    const fetchCarPosts = async () => {
        try {
            const response = await axios.get("/api/car-posts");
            setCarPosts(response.data);
        } catch (error) {
            console.error("Error fetching car posts:", error.response || error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCarPosts();
    }, []);

    // Approve a car post
    const handleApprove = async (id) => {
        try {
            const response = await axios.post(`/api/car-posts/${id}/approve`);
            alert(response.data.message);
            // Update the UI by removing the approved car
            setCarPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error approving car post:", error.response || error);
            alert("Failed to approve car post. Please try again.");
        }
    };

    // Deactivate a car post
    const handleDeactivate = async (id) => {
        try {
            const response = await axios.delete(`/api/car-posts/${id}`);
            alert(response.data.message);
            // Update the UI by removing the deactivated car
            setCarPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error deactivating car post:", error.response || error);
            alert("Failed to deactivate car post. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Car Posts Approval</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Make</th>
                            <th className="px-4 py-2 border-b">Model</th>
                            <th className="px-4 py-2 border-b">Price</th>
                            <th className="px-4 py-2 border-b">Year</th>
                            <th className="px-4 py-2 border-b">User Name</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carPosts.map((car) => (
                            <tr key={car.id}>
                                <td className="px-4 py-2 border-b">{car.make}</td>
                                <td className="px-4 py-2 border-b">{car.model}</td>
                                <td className="px-4 py-2 border-b">{car.price}</td>
                                <td className="px-4 py-2 border-b">{car.year}</td>
                                <td className="px-4 py-2 border-b">{car.user_name}</td>
                                <td className="px-4 py-2 border-b">
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleApprove(car.id)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleDeactivate(car.id)}
                                    >
                                        Deactivate
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarPostsApproval;
