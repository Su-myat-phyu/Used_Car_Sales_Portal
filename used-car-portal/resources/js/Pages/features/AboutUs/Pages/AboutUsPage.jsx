import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import HeroSection  from "../Components/HeroSection";
import MissionAndVision from "../Components/MissionAndVision";
import WhyChooseUs from "../Components/WhyChooseUs";
import TeamSection from "../Components/TeamSection";
import AchievementsSection from "../Components/AchievementsSection";
import CallToActionSection from "../Components/CallToActionSection";

const AboutUs = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <HeroSection />
            <MissionAndVision />
            <WhyChooseUs />
            <TeamSection />
            <AchievementsSection />
            <CallToActionSection />
            <Footer />
        </main>
        );
    };
        
    export default AboutUs;