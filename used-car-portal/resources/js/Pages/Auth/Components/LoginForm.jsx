import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const LoginForm = () => {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className={`mt-1 block w-full p-2 border rounded-md ${
                                errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className={`mt-1 block w-full p-2 border rounded-md ${
                                errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData("remember", e.target.checked)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                            Remember Me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-accent-500 text-white py-2 px-4 rounded-md hover:bg-primary-400 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot Password */}
                <div className="mt-4 text-center">
                    <a
                        href="/forgot-password"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>

                {/* Register Link */}
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Don't have an account?</span>
                    <a
                        href="/register"
                        className="text-accent-500 hover:text-primary-400"
                    >
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
