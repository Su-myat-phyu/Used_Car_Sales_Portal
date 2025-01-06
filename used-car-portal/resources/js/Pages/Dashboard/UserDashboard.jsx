import React from "react";
import Header from "../../Components/HeaderFooter/Header";
import Footer from "../../Components/HeaderFooter/Footer";
import MainDashboardSection from "./Components/MainDashboardSection";
import UserActivityOverview from "./Components/UserActivityOverview";




const UserDashboard = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <MainDashboardSection />
            <UserActivityOverview />
            <Footer />
        </main>
        );
    };
        
    export default UserDashboard;