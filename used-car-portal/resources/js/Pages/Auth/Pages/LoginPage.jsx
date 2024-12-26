import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import LoginForm from "../Components/LoginForm";



const Register = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <LoginForm />
            <Footer />
        </main>
        );
    };
        
    export default Register;