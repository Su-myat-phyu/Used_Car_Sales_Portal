import React from "react";

const MissionAndVision = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Our Mission & Vision
                </h2>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Column */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-secondary-900 text-lg leading-relaxed">
                        Our mission is to create a trusted, innovative, and user-centric platform for 
                        buying and selling used cars. We aim to simplify the car trading process by 
                        offering intuitive tools, secure transactions, and unparalleled support for 
                        both buyers and sellers. Through transparency and reliability, we strive to 
                        empower our users to make informed decisions and achieve their automotive 
                        goals effortlessly.

                        </p>
                    </div>

                    {/* Vision Column */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-secondary-900 text-lg leading-relaxed">
                        Our vision is to be the leading online destination for used car sales, 
                        fostering a global community of car enthusiasts and everyday drivers alike. 
                        We envision a future where technology bridges the gap between buyers and 
                        sellers, creating a seamless, accessible, and eco-friendly marketplace that 
                        supports sustainable mobility and drives customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;
