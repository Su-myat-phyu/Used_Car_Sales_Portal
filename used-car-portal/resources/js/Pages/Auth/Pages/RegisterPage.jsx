import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import RegistrationForm from "../Components/RegistrationForm";



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