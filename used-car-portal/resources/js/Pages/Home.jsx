import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import IntroductionSection from "./Components/IntroductionSection";
import HowItWorks from "./Components/HowItWorksSection";

const Home = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <IntroductionSection />
            <HowItWorks />
            <Footer />
        </main>
        );
    };
        
    export default Home;