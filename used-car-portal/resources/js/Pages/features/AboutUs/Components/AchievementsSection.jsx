import React from "react";

const AchievementsSection = () => {
    const stats = [
        {
            id: 1,
            value: "10,000+",
            label: "Cars Sold",
        },
        {
            id: 2,
            value: "1,000+",
            label: "Happy Customers",
        },
        {
            id: 3,
            value: "100+",
            label: "Partnered Dealers",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary-700 mb-12">
                    Our Journey in Numbers
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-primary-50 shadow-md rounded-lg p-8 text-center"
                        >
                            {/* Stat Value */}
                            <h3 className="text-5xl font-extrabold text-accent-500">
                                {stat.value}
                            </h3>

                            {/* Stat Label */}
                            <p className="text-lg font-medium text-primary-700 mt-4">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
