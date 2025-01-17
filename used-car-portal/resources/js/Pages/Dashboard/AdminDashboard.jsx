import {React, useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "../../Components/HeaderFooter/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import UsersManagement from './Components/UsersManagement';
import CarPostsApproval from './Components/CarPostsApproval';
import AppointmentsApproval from "./Components/AppointmentsApproval";
import Transactions from "./Components/Transactions";

const AdminDashboard = ({ userName }) => {
    const [activeSection, setActiveSection] = useState('users');

    const renderSection = () => {
        switch (activeSection) {
            case 'users':
                return <UsersManagement />;
            case 'carPosts':
                return <CarPostsApproval />;
            case 'appointments':
                return <AppointmentsApproval />;
            case 'transactions':
                return <Transactions />;
            default:
                return <div>Select a section</div>;
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

                {/* Main Content Sections */}
                <div className="flex font-roboto">
                    <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
                   {/*<main className="flex-1 p-6 bg-gray-100">{renderSection()}</main> */}
                   <div className="flex-1">
                        <div className="p-6">{renderSection()}</div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </main>
        </AuthenticatedLayout>
    );
};

export default AdminDashboard;
