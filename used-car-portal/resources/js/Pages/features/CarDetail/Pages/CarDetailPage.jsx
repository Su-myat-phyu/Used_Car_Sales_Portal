import React from "react";
import DetailHeroSection from "../Components/DetailHeroSection";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import CarSpecificationSection from "../Components/CarSpecificationSection";
import DescriptionSection from "../Components/DescriptionSection";
import ImageGallerySection from "../Components/ImageGallerySection";
import toyota1 from "../../../../../assets/toyota1.webp";
import toyota2 from "../../../../../assets/toyota2.webp";
import toyota3 from "../../../../../assets/toyota3.jpg";
import toyota4 from "../../../../../assets/toyota4.jpeg";
import toyota5 from "../../../../../assets/toyota5.jpg";
import UserReviewSection from "../Components/UserReviewSection";

const ToyotaDetailPage = ({ car }) => {
    if (!car) {
        return <div>Car details not available.</div>;
    }

    const specifications = {
        Make: car.make || "N/A",
        Model: car.model || "N/A",
        Year: car.year || "N/A",
        Mileage: car.mileage || "N/A",
        Condition: car.condition || "N/A",
        "Fuel Type": car.fuelType || "N/A",
        Transmission: car.transmission || "N/A",
        "Exterior Color": car.exteriorColor || "N/A",
        "Interior Color": car.interiorColor || "N/A",
    };

    const carImages = [
        toyota1,toyota2,toyota3,toyota4,toyota5
       
       
    ];

    const reviews = [
        {
            name: "Jane D.",
            rating: 5,
            text: "Great car, smooth ride! Highly recommend.",
        },
        {
            name: "John S.",
            rating: 4,
            text: "Comfortable and affordable. Couldn’t be happier.",
        },
        {
            name: "Emily R.",
            rating: 5,
            text: "Absolutely love it! Fantastic features and performance.",
        },
        {
            name: "Mark T.",
            rating: 3,
            text: "Decent car, but I had some issues with the fuel efficiency.",
        },
    ];
    
    return (
        <div>
            <Header />
            <DetailHeroSection car={car} />
            <CarSpecificationSection specifications={specifications} />
            <DescriptionSection />
            <ImageGallerySection images={carImages} />
            <UserReviewSection reviews={reviews} />
            <Footer />
        </div>
    );
};

export default ToyotaDetailPage;
