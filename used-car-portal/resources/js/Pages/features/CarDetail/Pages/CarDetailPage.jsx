import React from "react";
import DetailHeroSection from "../Components/DetailHeroSection";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const ToyotaDetailPage = ({ car }) => {
    if (!car) {
        return <div>Car details not available.</div>;
    }

    return (
        <div>
            <Header />
            <DetailHeroSection car={car} />
            {/* Add other sections like features, specifications, etc. */}
            <Footer />
        </div>
    );
};

export default ToyotaDetailPage;
