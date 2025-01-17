import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersManagement = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Fetch users
    useEffect(() => {
        axios.get('/users-management').then((response) => {
            setUsers(response.data);
        });
    }, []);

    // Handle edit user
    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    // Handle deactivate user
    const handleDeactivate = (id) => {
        if (confirm('Are you sure you want to deactivate this user?')) {
            axios.delete(`/users-management/${id}`).then(() => {
                setUsers(users.filter((user) => user.id !== id));
            });
        }
    };

    // Handle update user
    const handleUpdate = () => {
        axios.put(`/users-management/${selectedUser.id}`, selectedUser).then(() => {
            setUsers(
                users.map((user) =>
                    user.id === selectedUser.id ? selectedUser : user
                )
            );
            setShowEditModal(false);
        });
    };

    return (
        <div className="p-4 w-full">
            <h2 className="text-2xl font-bold mb-4">Users Management</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="text-sm">
                                <td className="border border-gray-300 px-4 py-2">{user.full_name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.phone_number}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.address}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                        onClick={() => handleEdit(user)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleDeactivate(user.id)}
                                    >
                                        Deactivate
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit User Modal */}
            {showEditModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Edit User</h3>
                        <div>
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                value={selectedUser.full_name || ''}
                                onChange={(e) =>
                                    setSelectedUser({
                                        ...selectedUser,
                                        full_name: e.target.value,
                                    })
                                }
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mt-4 mb-2">Email</label>
                            <input
                                type="email"
                                value={selectedUser.email || ''}
                                onChange={(e) =>
                                    setSelectedUser({
                                        ...selectedUser,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div className="flex mt-6">
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersManagement;
