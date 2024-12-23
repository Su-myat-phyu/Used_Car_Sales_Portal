import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import ContactHeroSection from "../Components/ContactHeroSection";
import ContactFormSection from "../Components/ContactFormSection";
import ContactInformationSection from "../Components/ContactInformationSection";
import FAQsSection from "../Components/FAQsSection";



const ContactUs = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <ContactHeroSection />
            <ContactFormSection />
            <ContactInformationSection />
            <FAQsSection />
            <Footer />
        </main>
        );
    };
        
    export default ContactUs;