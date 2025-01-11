import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const UpdateProfileInformationForm = () => {
    const { auth } = usePage().props;
    const [role, setRole] = useState(auth.user.role || "user");
    const [successMessage, setSuccessMessage] = useState(null);

    const { data, setData, patch, errors, processing } = useForm({
        full_name: auth.user.full_name || "",
        email: auth.user.email || "",
        phoneNumber: auth.user.phone_number || "",
        address: auth.user.address || "",
        employeeId: auth.user.employeeId || "",
        department: auth.user.department || "",
        profilePicture: null, // Leave empty to avoid overriding unless uploaded
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("profile.update"), {
            onSuccess: () => {
                setSuccessMessage("Profile updated successfully.");
            },
        });
    };;

    const handleFileChange = (e) => {
        setData("profilePicture", e.target.files[0]);
    };

    return (
        <section className="container mx-auto px-6 py-16">
            
            {/*<header className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Update Profile</h2>
            </header>*/}

{successMessage ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
                    <p>{successMessage}</p>
                    <button
                        onClick={() => window.location.href = route("dashboard")}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back to Dashboard
                    </button>
                </div>
            ) : (

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
            >
                {/* Full Name */}
                <div>
                    <InputLabel htmlFor="full_name" value="Full Name" />
                    <TextInput
                        id="full_name"
                        className="mt-1 block w-full"
                        value={data.full_name}
                        onChange={(e) => setData("full_name", e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.full_name} />
                </div>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="Email Address" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {/* Role */}
                <div>
                    <InputLabel htmlFor="role" value="Role" />
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setData("role", e.target.value);
                        }}
                        className="mt-1 block w-full border border-gray-300 p-2 rounded"
                        disabled // Role shouldn't be updated in profile updates
                    >
                        <option value="user">User</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>

                {/* Conditional Fields for Role: User */}
                {role === "user" && (
                    <>
                        {/* Phone Number */}
                        <div>
                            <InputLabel htmlFor="phoneNumber" value="Phone Number" />
                            <TextInput
                                id="phoneNumber"
                                className="mt-1 block w-full"
                                value={data.phone_number}
                                onChange={(e) => setData("phoneNumber", e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.phoneNumber} />
                        </div>

                        {/* Address */}
                        <div>
                            <InputLabel htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                className="mt-1 block w-full"
                                value={data.address}
                                onChange={(e) => setData("address", e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.address} />
                        </div>

                        {/* Profile Picture */}
                        <div>
                            <InputLabel htmlFor="profilePicture" value="Profile Picture" />
                            <input
                                id="profilePicture"
                                type="file"
                                className="mt-1 block w-full border border-gray-300 p-2 rounded"
                                onChange={handleFileChange}
                            />
                            <InputError className="mt-2" message={errors.profilePicture} />
                        </div>
                    </>
                )}

                {/* Conditional Fields for Role: Admin */}
                {role === "admin" && (
                    <>
                        {/* Employee ID */}
                        <div>
                            <InputLabel htmlFor="employeeId" value="Employee ID" />
                            <TextInput
                                id="employeeId"
                                className="mt-1 block w-full"
                                value={data.employeeId}
                                onChange={(e) => setData("employeeId", e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.employeeId} />
                        </div>

                        {/* Department */}
                        <div>
                            <InputLabel htmlFor="department" value="Department" />
                            <select
                                id="department"
                                className="mt-1 block w-full border border-gray-300 p-2 rounded"
                                value={data.department}
                                onChange={(e) => setData("department", e.target.value)}
                            >
                                <option value="sales">Sales</option>
                                <option value="management">Management</option>
                                <option value="support">Support</option>
                            </select>
                            <InputError className="mt-2" message={errors.department} />
                        </div>
                    </>
                )}

                {/* Save Button */}
                <PrimaryButton processing={processing}>Save Changes</PrimaryButton>
            </form>
            )}
        </section>
    );
};

export default UpdateProfileInformationForm;
