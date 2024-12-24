import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import CarHeroSection from "../Components/CarHeroSection";
import CarListingSection from "../Components/CarListingSection";


const CarListing = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <CarHeroSection />
            <CarListingSection />
            <Footer />
        </main>
        );
    };
        
    export default CarListing;