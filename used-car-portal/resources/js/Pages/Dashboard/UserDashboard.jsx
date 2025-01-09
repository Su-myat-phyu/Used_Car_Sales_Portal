import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "../../Components/HeaderFooter/Footer";
import Navbar from "./Components/Navbar";
import MainDashboardSection from "./Components/MainDashboardSection";
import UserActivityOverview from "./Components/UserActivityOverview";

const UserDashboard = () => {
    const userName = "John Doe"; // Replace this with the actual registered name (e.g., from context or props)

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
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </AuthenticatedLayout>
    );
};

export default UserDashboard;
