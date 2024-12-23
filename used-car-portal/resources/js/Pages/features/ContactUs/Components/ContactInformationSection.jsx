import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInformation = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary-700 text-center mb-12">
                    Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-accent-500 text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold text-primary-700">Address</h4>
                                <p className="text-secondary-900">
                                    123 Main Street, Cityville, Countryland, 12345
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-accent-500 text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold text-primary-700">Phone</h4>
                                <p className="text-secondary-900">+1 (123) 456-7890</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-accent-500 text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold text-primary-700">Email</h4>
                                <p className="text-secondary-900">support@cardiana.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div>
                        <iframe
                            title="Google Map"
                            className="w-full h-64 rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094575!2d-122.47171938468083!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dffba0e1%3A0x80899f32c9a3c47!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1614091830567!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;
