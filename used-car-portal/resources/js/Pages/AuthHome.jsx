import React from "react";
import Navbar from "./Dashboard/Components/Navbar";
import AuthFooter from "../Components/HeaderFooter/AuthFooter";
import IntroductionSection from "./Components/IntroductionSection";
import HowItWorks from "./Components/HowItWorksSection";
import FeaturedCars from "./Components/FeaturedCarsSection";
import Testimonials from "./Components/Testimonials";

const AuthHome = ({userName}) => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Navbar userName={userName} />
            <IntroductionSection />
            <HowItWorks />
            <FeaturedCars />
            <Testimonials />
            <AuthFooter />
        </main>
        );
    };
        
    export default AuthHome;