import React from "react";
import { FaStar } from "react-icons/fa"; // Star icon for ratings

const Testimonials = () => {
    // Dummy data for testimonials
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback: "Cardiana made my car buying experience seamless and enjoyable. Highly recommended!",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Amazing platform! I found the perfect car within minutes. Great service and support.",
            rating: 4,
        },
        {
            id: 3,
            name: "Michael Johnson",
            feedback: "Very user-friendly and reliable. I would definitely use Cardiana again in the future.",
            rating: 5,
        },
        {
            id: 4,
            name: "Kelly Brown",
            feedback: "Buying a car on Carvago was simply a pleasure. Everything went smoothly, I always knew what stage the car was in and what would happen next.",
            rating: 4.5,
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    What Our Customers Say
                </h2>

                {/* Testimonials Carousel */}
                <div className="flex space-x-16 overflow-x-auto snap-x">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="snap-center bg-white shadow-md rounded-lg p-6 flex-shrink-0 w-80 mx-auto"
                        >
                            {/* Customer Feedback */}
                            <p className="text-lg text-secondary-900 mb-4">
                                "{testimonial.feedback}"
                            </p>

                            {/* Customer Name */}
                            <h4 className="text-xl font-semibold text-primary-700 mb-2">
                                - {testimonial.name}
                            </h4>

                            {/* Star Rating */}
                            <div className="flex">
                                {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                                    <FaStar key={i} className="text-accent-500" />
                                ))}
                                {/* Handle half-star for ratings like 4.5 */}
                                {testimonial.rating % 1 !== 0 && (
                                    <FaStar className="text-accent-500 opacity-50" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
