import React from "react";
import { Link } from '@inertiajs/react';


const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Choose anywhere",
            description:
                "No more compromises! With us, you have an unrivaled selection of cars in one place.",
            image: "https://carvago.com/images/how-it-works-mobile-1-2x.webp", // Replace with the actual image path
        },
        {
            id: 2,
            title: "We’ll inspect the car closely",
            description:
                "A certified mechanic will thoroughly inspect your car. You will decide according to the result after.",
            image: "https://carvago.com/images/how-it-works-mobile-2-2x.webp", // Replace with the actual image path
        },
        {
            id: 3,
            title: "We’ll deliver it to your home",
            description:
                "We arrange all the paperwork, registration, and delivery. All you need to do is enjoy your new car.",
            image: "https://carvago.com/images/how-it-works-mobile-3-2x.webp", // Replace with the actual image path
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    How does it work?
                </h2>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step) => (
                        <div key={step.id} className="text-center">
                            {/* Step Image */}
                            <img
                                src={step.image}
                                alt={step.title}
                                className="mx-auto mb-6 w-100 h-auto"
                            />
                            {/* Step Number */}
                            <span className="block text-primary-500 text-xl font-bold mb-2">
                                {`0${step.id}.`}
                            </span>
                            {/* Step Title */}
                            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                                {step.title}
                            </h3>
                            {/* Step Description */}
                            <p className="text-secondary-700 text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                <Link
                        to="/about"
                        className="bg-accent-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-primary-400 transition"
                    >
                        Want to know more?
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
