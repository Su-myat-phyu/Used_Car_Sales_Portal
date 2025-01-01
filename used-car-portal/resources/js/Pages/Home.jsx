import React from "react";
import Header from "../Components/HeaderFooter/Header";
import Footer from "../Components/HeaderFooter/Footer";
import IntroductionSection from "./Components/IntroductionSection";
import HowItWorks from "./Components/HowItWorksSection";
import FeaturedCars from "./Components/FeaturedCarsSection";
import Testimonials from "./Components/Testimonials";

const Home = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <IntroductionSection />
            <HowItWorks />
            <FeaturedCars />
            <Testimonials />
            <Footer />
        </main>
        );
    };
        
    export default Home;