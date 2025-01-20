import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AuthFooter from "../../Components/HeaderFooter/AuthFooter";
import Navbar from "./Components/Navbar";
import MainDashboardSection from "./Components/MainDashboardSection";
import BiddingStatusSection from "./Components/BiddingStatusSection";
import UserActivityOverview from "./Components/UserActivityOverview";
import TestDriveStatusSection from "./Components/TestDriveStatusSection";

const UserDashboard = ({ userName }) => {
    return (
        <AuthenticatedLayout>
            {/* Navbar */}
            <Navbar userName={userName} />

            {/* Main Content */}
            <main className="flex flex-col min-h-screen bg-gray-100">
                {/* Hero Section */}
                <div className="py-6 bg-gray-100 text-center">
                    <p className="font-bold text-3xl md:text-5xl text-gray-700">
                        User Dashboard
                    </p>
                </div>

                {/* Main Content Sections */}
                <section className="flex-grow px-4 md:px-8 py-4 space-y-6">
                    <MainDashboardSection />
                    <UserActivityOverview />
                    <BiddingStatusSection /> 
                    <TestDriveStatusSection />
                </section>

                {/* Footer */}
                <AuthFooter />
            </main>
        </AuthenticatedLayout>
    );
};

export default UserDashboard;
