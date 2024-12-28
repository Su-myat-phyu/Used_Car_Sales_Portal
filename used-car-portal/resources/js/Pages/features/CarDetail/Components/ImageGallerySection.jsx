import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageGallerySection = ({ images }) => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary-700 mb-6">Image Gallery</h2>

                {/* Main Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Thumbs]} // Add Swiper modules
                    navigation // Enable navigation arrows
                    pagination={{ clickable: true }} // Enable pagination
                    spaceBetween={20} // Default space between slides
                    slidesPerView={1} // Default for smaller screens
                    breakpoints={{
                        // Responsive settings for different screen sizes
                        640: {
                            slidesPerView: 1, // 1 slide on small screens
                            spaceBetween: 10, // Smaller spacing
                        },
                        768: {
                            slidesPerView: 2, // 2 slides on tablets
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides on desktops
                            spaceBetween: 20,
                        },
                    }}
                    className="h-auto"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Car Image ${index + 1}`}
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                
            </div>
        </section>
    );
};

export default ImageGallerySection;
