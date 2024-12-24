import React from "react";
import toyotaCar from "../../../../../assets/toyotaCar.png";
import hondaCar from "../../../../../assets/hondaCar.webp";
import fordCar from "../../../../../assets/fordCar.jpg";
import bmw3Car from "../../../../../assets/bmw3Car.png";
import teslaCar from "../../../../../assets/teslaCar.jpg";
import mercedesCar from "../../../../../assets/mercedes.webp";
import audiCar from "../../../../../assets/audiCar.jpg";
import chevroletCar from "../../../../../assets/chevroletCar.webp";
import jeepCar from "../../../../../assets/jeepCar.webp";
import hyundaiCar from "../../../../../assets/hyundaiCar.png";
import volvoCar from "../../../../../assets/volvoCar.jpg";
import lexusCar from "../../../../../assets/lexusCar.jpeg";

const cars = [
    {
        id: 1,
        thumbnail: toyotaCar,
        model: "Camry",
        year: 2021,
        price: "$20,000",
    },
    {
        id: 2,
        thumbnail: hondaCar,
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
        thumbnail: bmw3Car,
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
        thumbnail: jeepCar,
        make: "Jeep",
        model: "Wrangler",
        year: 2018,
        price: "$28,000",
    },
    {
        id: 10,
        thumbnail: hyundaiCar,
        make: "Hyundai",
        model: "Santa Fe",
        year: 2020,
        price: "$24,000",
    },
    {
        id: 11,
        thumbnail: volvoCar,
        make: "Volvo",
        model: "XC90",
        year: 2021,
        price: "$48,000",
    },
    {
        id: 12,
        thumbnail: lexusCar,
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
