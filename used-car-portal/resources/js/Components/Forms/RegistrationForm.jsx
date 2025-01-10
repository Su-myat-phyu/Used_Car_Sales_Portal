import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const RegistrationForm = () => {
    const [role, setRole] = useState("user");
    const { data, setData, post, errors } = useForm({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
        phoneNumber: "",
        address: "",
        profilePicture: null,
        employeeId: "",
        department: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit the form data to backend
        // Submit the form data to backend
        post("/register", {
            onSuccess: (response) => {
                alert("Registration successful! Redirecting to login...");
                window.location.href = "/login"; // Redirect to login
            },
            onError: (errors) => {
                console.error("Registration failed:", errors);
                alert("Registration failed. Please try again.");
            },
        });
        

        
        
        
    };

    const handleFileChange = (e) => {
        setData("profilePicture", e.target.files[0]);
    };

    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Register</h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
            >
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={data.fullName}
                        onChange={(e) => setData("full_name", e.target.value)}
                        required
                    />
                    {errors.full_name && (
                        <p className="text-red-500 text-sm">{errors.full_name}</p>
                    )}
                </div>

                {/* Email Address */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={data.password_confirmation} // Change here
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value) // Change here
                        }
                        required
                    />
                    {errors.password_confirmation && ( // Change here
                        <p className="text-red-500 text-sm">
                            {errors.password_confirmation} // Change here
                        </p>
                    )}
                </div>


                {/* Role Selection */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                        Role
                    </label>
                    <select
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setData("role", e.target.value);
                        }}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="user">User</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>

                {/* Conditional Fields Based on Role */}
                {role === "user" && (
                    <>
                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded"
                                value={data.phoneNumber}
                                onChange={(e) =>
                                    setData("phoneNumber", e.target.value)
                                }
                                required
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-sm">
                                    {errors.phoneNumber}
                                </p>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                required
                            />
                            {errors.address && (
                                <p className="text-red-500 text-sm">
                                    {errors.address}
                                </p>
                            )}
                        </div>

                        {/* Profile Picture */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Profile Picture (Optional)
                            </label>
                            <input
                                type="file"
                                className="w-full border border-gray-300 p-2 rounded"
                                onChange={handleFileChange}
                            />
                        </div>
                    </>
                )}

                {role === "admin" && (
                    <>
                        {/* Employee ID */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Employee ID
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded"
                                value={data.employeeId}
                                onChange={(e) =>
                                    setData("employeeId", e.target.value)
                                }
                                required
                            />
                            {errors.employeeId && (
                                <p className="text-red-500 text-sm">
                                    {errors.employeeId}
                                </p>
                            )}
                        </div>

                        {/* Department */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Department
                            </label>
                            <select
                                value={data.department}
                                onChange={(e) =>
                                    setData("department", e.target.value)
                                }
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            >
                                <option value="sales">Sales</option>
                                <option value="management">Management</option>
                                <option value="support">Support</option>
                            </select>
                        </div>
                    </>
                )}

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-accent-500 text-white p-2 rounded hover:bg-primary-400 transition"
                >
                    Register
                </button>

                {/* Error Messages */}
                {errors.general && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.general}
                    </p>
                )}

                {/* Login Link */}
                <p className="text-center text-gray-700 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-accent-500 hover:text-primary-400">
                        Login
                    </a></p>
            </form>
        </div>
    );
};

export default RegistrationForm;