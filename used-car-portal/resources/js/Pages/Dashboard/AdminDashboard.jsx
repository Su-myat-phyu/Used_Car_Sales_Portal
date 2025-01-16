import {React, useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "../../Components/HeaderFooter/Footer";
import Navbar from "./Components/Navbar";


const AdminDashboard = ({ userName }) => {
    const [selectedSection, setSelectedSection] = useState("users");

    const renderSection = () => {
        switch (selectedSection) {
            case "users":
                return <ViewUsers />;
            case "cars":
                return <ManageCars />;
            default:
                return <ViewUsers />;
        }
    };
    return (
        <AuthenticatedLayout>
            {/* Navbar */}
            <Navbar userName={userName} />

            {/* Main Content */}
            <main className="flex flex-col min-h-screen bg-gray-100">
                {/* Hero Section */}
                <div className="py-6 bg-gray-100 text-center">
                    <p className="font-bold text-3xl md:text-5xl text-gray-700">
                        Admin Dashboard
                    </p>
                </div>

                {/* Main Content Sections 
                <section className="flex-grow px-4 md:px-8 py-4 space-y-6">
                    <Sidebar setSelectedSection={setSelectedSection} />
                    <main className="flex-1 p-6 bg-gray-100">{renderSection()}</main>
                </section>*/}

                {/* Footer */}
                <Footer />
            </main>
        </AuthenticatedLayout>
    );
};

export default AdminDashboard;
