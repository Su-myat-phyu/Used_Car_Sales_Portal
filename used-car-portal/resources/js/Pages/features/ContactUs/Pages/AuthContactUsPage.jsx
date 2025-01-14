import React from "react";
import Navbar from "../../../Dashboard/Components/Navbar";
import AuthFooter from "../../../../Components/HeaderFooter/AuthFooter";
import ContactHeroSection from "../Components/ContactHeroSection";
import ContactFormSection from "../Components/ContactFormSection";
import ContactInformationSection from "../Components/ContactInformationSection";
import FAQsSection from "../Components/FAQsSection";



const ContactUs = ({userName}) => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Navbar userName={userName} />
            <ContactHeroSection />
            <ContactFormSection />
            <ContactInformationSection />
            <FAQsSection />
            <AuthFooter />
        </main>
        );
    };
        
    export default ContactUs;