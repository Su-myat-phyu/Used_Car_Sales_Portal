import React from "react";
import Header from "../../Components/HeaderFooter/Header";
import Footer from "../../Components/HeaderFooter/Footer";
import MainDashboardSection from "./Components/MainDashboardSection";
import UserActivityOverview from "./Components/UserActivityOverview";




const UserDashboard = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <div className="bg-gray-100 text-center py-2">
                <p className="font-bold text-5xl">User Dashboard</p>
            </div>
            <MainDashboardSection />
            <UserActivityOverview />
            <Footer />
        </main>
        );
    };
        
    export default UserDashboard;