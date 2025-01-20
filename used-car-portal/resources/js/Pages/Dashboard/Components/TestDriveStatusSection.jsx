import React, { useState, useEffect } from "react";
import axios from "axios";

const TestDriveStatusSection = () => {
    const [testDrives, setTestDrives] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestDrives = async () => {
            try {
                const response = await axios.get("/user/test-drives");
                setTestDrives(response.data); // Ensure response data matches expected format
            } catch (err) {
                setError(err.response?.data?.error || "Failed to load test drives.");
            } finally {
                setLoading(false);
            }
        };

        fetchTestDrives();
    }, []);

    if (loading) {
        return (
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Test Drive Appointments</h2>
                <p>Loading test drive appointments...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Test Drive Appointments</h2>
                <p className="text-red-500">{error}</p>
            </section>
        );
    }

    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Test Drive Appointments</h2>
            {testDrives.length === 0 ? (
                <p>No test drive appointments found.</p>
            ) : (
                <ul className="space-y-4">
                    {testDrives.map((testDrive) => (
                        <li
                            key={testDrive.id}
                            className="border rounded-md p-4 bg-gray-50"
                        >
                            <p>
                                <strong>Car:</strong> {testDrive.car.make}{" "}
                                {testDrive.car.model} ({testDrive.car.year})
                            </p>
                            <p>
                                <strong>Date:</strong> {new Date(testDrive.date).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                <span
                                    className={
                                        testDrive.status === "approved"
                                            ? "text-green-600 font-semibold"
                                            : testDrive.status === "rejected"
                                            ? "text-red-600 font-semibold"
                                            : "text-yellow-600 font-semibold"
                                    }
                                >
                                    {testDrive.status.charAt(0).toUpperCase() + testDrive.status.slice(1)}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default TestDriveStatusSection;
