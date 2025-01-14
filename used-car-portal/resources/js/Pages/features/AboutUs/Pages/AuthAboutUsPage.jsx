import React from "react";
import Navbar from "../../../Dashboard/Components/Navbar";
import AuthFooter from "../../../../Components/HeaderFooter/AuthFooter";
import HeroSection  from "../Components/HeroSection";
import MissionAndVision from "../Components/MissionAndVision";
import WhyChooseUs from "../Components/WhyChooseUs";
import TeamSection from "../Components/TeamSection";
import AchievementsSection from "../Components/AchievementsSection";
import CallToActionSection from "../Components/CallToActionSection";

const AboutUs = ({userName}) => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Navbar userName={userName} />
            <HeroSection />
            <MissionAndVision />
            <WhyChooseUs />
            <TeamSection />
            <AchievementsSection />
            <CallToActionSection />
            <AuthFooter />
        </main>
        );
    };
        
    export default AboutUs;