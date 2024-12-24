import React from "react";
import fordCar from "../../../../../assets/fordCar.jpg";
import teslaCar from "../../../../../assets/teslaCar.jpg";
import mercedesCar from "../../../../../assets/mercedes.webp";
import audiCar from "../../../../../assets/audiCar.jpg";
import chevroletCar from "../../../../../assets/chevroletCar.webp";

const cars = [
    {
        id: 1,
        thumbnail: "https://media.gettyimages.com/id/56545963/photo/detroit-united-states-the-hybrid-version-of-the-toyota-camry-is-introduced-09-january-during.jpg?s=612x612&w=0&k=20&c=GP4Suekr83BJ6YTv-3Fmc2BAfaM_S1IbiwnbLyil5wg=",
        make: "Toyota",
        model: "Camry",
        year: 2021,
        price: "$20,000",
    },
    {
        id: 2,
        thumbnail: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-si-sedan/non-VLP/Family-Page/2025/MY25_Civic-Si_Family_Card_Jelly_1x.jpg?sc_lang=en",
        make: "Honda",
        model: "Civic",
        year: 2020,
        price: "$18,000",
    },
    {
        id: 3,
        thumbnail: fordCar,
        make: "Ford",
        model: "Mustang",
        year: 2019,
        price: "$25,000",
    },
    {
        id: 4,
        thumbnail: "https://media.gettyimages.com/id/1175887431/photo/2011-bmw-3-series-coupe.jpg?s=612x612&w=0&k=20&c=jaILtzVAFpYbUjusU7Iblmb0y-CFPgPgtkyGmmHrFUk=",
        make: "BMW",
        model: "3 Series",
        year: 2022,
        price: "$35,000",
    },
    {
        id: 5,
        thumbnail: teslaCar,
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        price: "$35,000",
    },
    {
        id: 6,
        thumbnail: mercedesCar,
        make: "Mercedes-Benz",
        model: "C200",
        year: 2021,
        price: "$45,000",
    },
    {
        id: 7,
        thumbnail: audiCar,
        make: "Audi",
        model: "Q5",
        year: 2020,
        price: "$50,000",
    },
    {
        id: 8,
        thumbnail: chevroletCar,
        make: "Chevrolet",
        model: "Silverado",
        year: 2020,
        price: "$60,000",
    },
    {
        id: 9,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/0/07/2018_Jeep_Wrangler_Unlimited_Rubicon_2.0_Front.jpg",
        make: "Jeep",
        model: "Wrangler",
        year: 2018,
        price: "$28,000",
    },
    {
        id: 10,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/e/e7/2020_Hyundai_Santa_Fe.jpg",
        make: "Hyundai",
        model: "Santa Fe",
        year: 2020,
        price: "$24,000",
    },
    {
        id: 11,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/4a/2021_Volvo_XC90.jpg",
        make: "Volvo",
        model: "XC90",
        year: 2021,
        price: "$48,000",
    },
    {
        id: 12,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/f5/2019_Lexus_RX_350.jpg",
        make: "Lexus",
        model: "RX 350",
        year: 2019,
        price: "$38,000",
    },
];

const CarListingSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Available Cars
                </h2>

                {/* Car Listing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <div
                            key={car.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Thumbnail */}
                            <img
                                src={car.thumbnail}
                                alt={`${car.make} ${car.model}`}
                                className="w-full h-48 object-cover"
                            />

                            {/* Car Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {car.make} {car.model}
                                </h3>
                                <p className="text-gray-600">{car.year}</p>
                                <p className="text-accent-500 font-semibold text-lg">
                                    {car.price}
                                </p>

                                {/* CTA Button */}
                                <button
                                    className="mt-4 bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <button className="px-4 py-2 mx-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                        Previous
                    </button>
                    <button className="px-4 py-2 mx-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                        1
                    </button>
                    <button className="px-4 py-2 mx-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                        2
                    </button>
                    <button className="px-4 py-2 mx-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CarListingSection;
