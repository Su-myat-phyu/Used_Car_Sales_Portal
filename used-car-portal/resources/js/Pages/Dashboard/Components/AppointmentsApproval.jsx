import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentsApproval = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch pending appointments
    const fetchAppointments = async () => {
        try {
            const response = await axios.get("/test-drives");
            setAppointments(response.data);
        } catch (error) {
            console.error("Error fetching appointments:", error.response || error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    // Approve an appointment
    const handleApproveAppointment = async (id) => {
        try {
            const response = await axios.post(`/test-drives/${id}/approve`);
            alert(response.data.message); // Show success message
            // Remove the approved appointment from the list
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appt) => appt.id !== id)
            );
        } catch (error) {
            console.error("Error approving appointment:", error.response || error);
            if (error.response?.status === 403) {
                alert("Unauthorized action. You are not allowed to approve this appointment.");
            } else {
                alert("Failed to approve appointment. Please try again.");
            }
        }
    };

    // Reject an appointment
    const handleRejectAppointment = async (id) => {
        try {
            const response = await axios.post(`/test-drives/${id}/reject`);
            alert(response.data.message); // Show success message
            // Remove the rejected appointment from the list
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appt) => appt.id !== id)
            );
        } catch (error) {
            console.error("Error rejecting appointment:", error.response || error);
            alert("Failed to reject appointment. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Appointments Approval</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">User Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Car</th>
                            <th className="px-4 py-2 border-b">Schedule Date</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appt) => (
                            <tr key={appt.id}>
                                <td className="px-4 py-2 border-b">{appt.name}</td>
                                <td className="px-4 py-2 border-b">{appt.email}</td>
                                <td className="px-4 py-2 border-b">
                                    {appt.car.make} {appt.car.model}
                                </td>
                                <td className="px-4 py-2 border-b">{appt.date}</td>
                                <td className="px-4 py-2 border-b">
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleApproveAppointment(appt.id)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleRejectAppointment(appt.id)}
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
