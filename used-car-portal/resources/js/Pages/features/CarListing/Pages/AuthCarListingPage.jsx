import React, { useEffect, useState } from "react";
import Navbar from "../../../Dashboard/Components/Navbar";
import AuthFooter from "../../../../Components/HeaderFooter/AuthFooter";
import CarHeroSection from "../Components/CarHeroSection";
import AuthCarListingSection from "../Components/AuthCarListingSection";
import CallToActionSection from "../Components/CallToActionSection";
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


// Sample car data
const cars = [
    { id: 1, thumbnail: toyotaCar, make: "Toyota", model: "Camry", year: 2021, price: 20000, biddingPrice: 25000 },
    { id: 2, thumbnail: hondaCar, make: "Honda", model: "Civic", year: 2020, price: 18000, biddingPrice: 20000  },
    { id: 3, thumbnail: fordCar, make: "Ford", model: "Mustang", year: 2019, price: 25000, biddingPrice: 30000 },
    { id: 4, thumbnail: bmw3Car, make: "BMW", model: "3 Series", year: 2022, price: 35000, biddingPrice: 40000 },
    { id: 5, thumbnail: teslaCar, make: "Tesla", model: "Model 3", year: 2021, price: 35000, biddingPrice: 40000 },
    { id: 6, thumbnail: mercedesCar, make: "Mercedes-Benz", model: "C200", year: 2021, price: 45000, biddingPrice: 50000 },
    { id: 7, thumbnail: audiCar, make: "Audi", model: "Q5", year: 2020, price: 50000, biddingPrice: 55000 },
    { id: 8, thumbnail: chevroletCar, make: "Chevrolet", model: "Silverado", year: 2020, price: 60000, biddingPrice: 65000 },
    { id: 9, thumbnail: jeepCar, make: "Jeep", model: "Wrangler", year: 2018, price: 28000, biddingPrice: 30000 },
    { id: 10, thumbnail: hyundaiCar, make: "Hyundai", model: "Santa Fe", year: 2020, price: 24000, biddingPrice: 26000 },
    { id: 11, thumbnail: volvoCar, make: "Volvo", model: "XC90", year: 2021, price: 48000, biddingPrice: 50000 },
    { id: 12, thumbnail: lexusCar, make: "Lexus", model: "RX 350", year: 2019, price: 38000, biddingPrice: 40000 },
];

const AuthCarListingPage = (userName) => {
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        year: "",
        minPrice: "",
        maxPrice: "",
    });

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("/cars");
                setCars(response.data);
            } catch (error) {
                console.error("Failed to fetch cars:", error);
            }
        };
        fetchCars();
    }, []);

    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    const filteredCars = cars.filter((car) => {
        const { make, model, year, minPrice, maxPrice } = filters;

        const matchesMake = !make || car.make.toLowerCase() === make.toLowerCase();
        const matchesModel = !model || car.model.toLowerCase() === model.toLowerCase();
        const matchesYear = !year || car.year.toString() === year;
        const matchesPrice =
            (!minPrice || car.price >= parseInt(minPrice)) &&
            (!maxPrice || car.price <= parseInt(maxPrice));

        return matchesMake && matchesModel && matchesYear && matchesPrice;
    });

    return (
        <main className="flex flex-col min-h-screen">
            <Navbar userName={userName} />
            <CarHeroSection
                filters={filters}
                onFilterChange={handleFilterChange}
                allCars={cars}
            />
            <AuthCarListingSection cars={filteredCars} />
            <CallToActionSection />
            <AuthFooter />
        </main>
    );
};
export default AuthCarListingPage;