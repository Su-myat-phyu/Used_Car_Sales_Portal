import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentsApproval = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get("/admin/test-drives");
            setAppointments(response.data);
        } catch (error) {
            console.error("Error fetching test drives:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleApproval = async (id, status) => {
        try {
            await axios.patch(`/admin/test-drives/${id}`, { status });
            fetchAppointments(); // Refresh list after status update
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Appointments Approval</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">User Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Car</th>
                            <th className="px-4 py-2 border-b">Bidding Price</th>
                            <th className="px-4 py-2 border-b">Schedule</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td className="px-4 py-2 border-b">{appointment.name}</td>
                                <td className="px-4 py-2 border-b">{appointment.email}</td>
                                <td className="px-4 py-2 border-b">
                                    {appointment.car?.make} {appointment.car?.model}
                                </td>
                                <td className="px-4 py-2 border-b">
                                    ${Number(appointment.car?.bidding_price || 0).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 border-b">
                                    {new Date(appointment.date).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleApproval(appointment.id, "approved")}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleApproval(appointment.id, "rejected")}
                                    >
                                        Reject
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

export default AppointmentsApproval;
