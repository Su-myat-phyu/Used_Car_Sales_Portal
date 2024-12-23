import React from "react";
import { Link } from "@inertiajs/react"; // For smooth scrolling
import bannerImage from "../../../../../assets/bannerImage.jpg"; // Replace with your actual image path

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Who We Are</h1>
                <p className="text-lg md:text-xl font-medium mb-8">
                At Cardiana, we understand the importance of trust in transactions, which is why we emphasize security and transparency at every step. Whether you’re a car enthusiast looking to upgrade or a seller seeking the best value for your vehicle, we’re here to support you with the tools and resources you need to make informed decisions.

Our commitment to innovation, combined with a deep understanding of the automotive market, enables us to offer features such as detailed car listings, advanced search options, and a secure bidding process. We are proud to serve as a bridge between buyers and sellers, fostering a community where your automotive goals can become a reality.
                </p>
                <Link
                    to="about" // This should match the ID of the next section
                    smooth={true}
                    duration={800}
                    className="bg-accent-500 hover:bg-primary-400 text-white py-3 px-6 rounded-lg text-lg transition shadow-lg"
                >
                    Learn More
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
