import React, { useEffect, useState } from "react";
import axios from "axios";

const BiddingStatusSection = () => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        // Fetch the bidding data for the user
        const fetchBids = async () => {
            try {
                const response = await axios.get("/user/bids");
                setBids(response.data);
            } catch (err) {
                console.error("Error fetching bids:", err.response || err.message);
            }
        };

        fetchBids();
    }, []);

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Your Bidding Status</h2>
            {bids.length === 0 ? (
                <p className="text-gray-600">You have not submitted any bids yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border py-2 px-4 text-left text-gray-700">Car Name</th>
                            <th className="border py-2 px-4 text-left text-gray-700">Bidding Price</th>
                            <th className="border py-2 px-4 text-left text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid) => (
                            <tr key={bid.id} className="odd:bg-white even:bg-gray-100">
                                <td className="border py-2 px-4 text-gray-800">{bid.car_name}</td>
                                <td className="border py-2 px-4 text-gray-800">${bid.bid_amount}</td>
                                <td
                                    className={`border py-2 px-4 font-semibold ${
                                        bid.status === "Accepted"
                                            ? "text-green-600"
                                            : bid.status === "Declined"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {bid.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BiddingStatusSection;
