import React from "react";
import Header from "../../Components/HeaderFooter/Header";
import Footer from "../../Components/HeaderFooter/Footer";
import RegistrationForm from "../../Components/Forms/RegistrationForm";



const Register = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <RegistrationForm />
            <Footer />
        </main>
        );
    };
        
    export default Register;