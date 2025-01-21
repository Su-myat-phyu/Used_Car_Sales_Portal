import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);


const AdminOverview = () => {
    const [overviewData, setOverviewData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/admin/dashboard/overview");
                setOverviewData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Provide a fallback in case overviewData is null or undefined
    if (!overviewData) {
        return <p>No data available.</p>;
    }

    const { totalUsers = 0, totalCars = 0, availableCars = 0, soldCars = 0, bidsOverTime = [] } = overviewData;

    // Pie chart data
    const pieData = {
        labels: ["Available Cars", "Sold Cars"],
        datasets: [
            {
                data: [availableCars, soldCars],
                backgroundColor: ["#4CAF50", "#FF5722"],
            },
        ],
    };

    // Line graph data
    const lineData = {
        labels: bidsOverTime.map((item) => item.date),
        datasets: [
            {
                label: "Bids Over Time",
                data: bidsOverTime.map((item) => item.total_bids),
                borderColor: "#4CAF50",
                fill: false,
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-blue-100 rounded-lg shadow">
                    <h3 className="text-xl font-bold">Total Active Users</h3>
                    <p className="text-3xl text-blue-600">{totalUsers}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow">
                    <h3 className="text-xl font-bold">Total Cars</h3>
                    <p className="text-3xl text-green-600">{totalCars}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Car Status Distribution</h3>
                    <Pie data={pieData} />
                </div>
                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Bids Over Time</h3>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
