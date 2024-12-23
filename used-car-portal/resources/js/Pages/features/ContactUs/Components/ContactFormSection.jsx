import React, { useState } from "react";

const ContactForm = () => {
    // States for form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // State for form submission status
    const [status, setStatus] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        // Mock form submission logic
        setStatus("Your message has been sent successfully!");
        setTimeout(() => setStatus(""), 5000); // Clear message after 5 seconds

        // Reset form data
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section className="py-16 bg-primary-50">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary-700 text-center mb-12">
                    Get in Touch
                </h2>

                {/* Form Container */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Left Section */}
                    <div className="space-y-6">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="space-y-6">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 text-center mt-8">
                        <button
                            type="submit"
                            className="bg-accent-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-accent-400 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Status Notification */}
                {status && (
                    <div className="mt-4 text-center text-green-600 font-medium">
                        {status}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
