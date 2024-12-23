import React from "react";
import { FaLock, FaCheckCircle, FaLaptop } from "react-icons/fa"; // Icons for features

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: <FaLock className="text-accent-500 text-4xl" />,
            title: "Secure Transactions",
            description: "Your safety is our top priority. We ensure that every transaction is secure and transparent.",
        },
        {
            id: 2,
            icon: <FaCheckCircle className="text-accent-500 text-4xl" />,
            title: "Verified Listings",
            description: "All car listings are verified to provide accurate and trustworthy information.",
        },
        {
            id: 3,
            icon: <FaLaptop className="text-accent-500 text-4xl" />,
            title: "User-Friendly Platform",
            description: "Our platform is designed for ease of use, making it simple for anyone to buy or sell cars.",
        },
    ];

    return (
        <section className="py-16 bg-primary-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Why Choose Us?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center space-y-4"
                        >
                            {/* Feature Icon */}
                            <div>{feature.icon}</div>

                            {/* Feature Title */}
                            <h3 className="text-xl font-semibold text-primary-700">
                                {feature.title}
                            </h3>

                            {/* Feature Description */}
                            <p className="text-secondary-900 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
