import React from "react";

const CarSpecificationSection = ({ specifications }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-8">
                    Car Specifications
                </h2>

                {/* Specification Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white shadow-md p-6 rounded-lg">
                    {Object.keys(specifications).map((key) => (
                        <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">{key}:</span>
                            <span className="text-gray-800 font-semibold">
                                {specifications[key]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarSpecificationSection;
