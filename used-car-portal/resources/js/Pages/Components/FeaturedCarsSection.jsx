import React from "react";

const FeaturedCars = () => {
    // Dummy data for featured cars
    const cars = [
        {
            id: 1,
            thumbnail: "https://media.gettyimages.com/id/56545963/photo/detroit-united-states-the-hybrid-version-of-the-toyota-camry-is-introduced-09-january-during.jpg?s=612x612&w=0&k=20&c=GP4Suekr83BJ6YTv-3Fmc2BAfaM_S1IbiwnbLyil5wg=", // Replace with actual image path
            price: "$20,000",
            make: "Toyota",
            model: "Camry",
        },
        {
            id: 2,
            thumbnail: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-si-sedan/non-VLP/Family-Page/2025/MY25_Civic-Si_Family_Card_Jelly_1x.jpg?sc_lang=en", // Replace with actual image path
            price: "$18,000",
            make: "Honda",
            model: "Civic",
        },
        {
            id: 3,
            thumbnail: "https://media.gettyimages.com/id/1175887431/photo/2011-bmw-3-series-coupe.jpg?s=612x612&w=0&k=20&c=jaILtzVAFpYbUjusU7Iblmb0y-CFPgPgtkyGmmHrFUk=", // Replace with actual image path
            price: "$35,000",
            make: "BMW",
            model: "3 Series",
        },
        {
            id: 4,
            thumbnail: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80", // Replace with actual image path
            price: "$40,000",
            make: "Mercedes",
            model: "C-Class",
        },
    ];

    return (
        <section className="bg-primary-50 py-16">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Featured Cars for You
                </h2>

                {/* Car Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {cars.map((car) => (
                        <div
                            key={car.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            {/* Car Thumbnail */}
                            <img
                                src={car.thumbnail}
                                alt={`${car.make} ${car.model}`}
                                className="w-full h-40 object-cover"
                            />

                            {/* Car Details */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-secondary-900">
                                    {car.make} {car.model}
                                </h3>
                                <p className="text-lg text-primary-700 font-bold mb-4">
                                    {car.price}
                                </p>

                                {/* View Details Button */}
                                <button className="bg-accent-500 text-white py-2 px-4 rounded-lg w-full hover:bg-primary-400 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars;
