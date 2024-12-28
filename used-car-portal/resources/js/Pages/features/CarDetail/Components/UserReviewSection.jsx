import React from "react";

const UserReviewSection = ({ reviews }) => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary-700 mb-8">Customer Reviews</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
                        >
                            {/* User Name */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {review.name}
                            </h3>

                            {/* Star Rating */}
                            <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={i < review.rating ? "gold" : "none"}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-yellow-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499c.344-.906 1.695-.906 2.04 0l2.108 5.574a1 1 0 00.95.668h5.462c.958 0 1.357 1.225.658 1.82l-4.38 3.799a1 1 0 00-.318 1.054l1.646 5.477c.29.967-.792 1.738-1.597 1.201l-4.683-2.994a1 1 0 00-1.124 0l-4.683 2.994c-.805.537-1.887-.234-1.597-1.201l1.646-5.477a1 1 0 00-.318-1.054l-4.38-3.799c-.699-.595-.3-1.82.658-1.82h5.462a1 1 0 00.95-.668l2.108-5.574z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 mt-4 italic">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserReviewSection;
