import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import IntroductionSection from "./Components/IntroductionSection";

const Home = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <IntroductionSection />
            <Footer />
        </main>
        );
    };
        
    export default Home;