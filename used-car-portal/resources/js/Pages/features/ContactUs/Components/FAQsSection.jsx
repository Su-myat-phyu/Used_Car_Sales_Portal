import React, { useState } from "react";

const FAQsSection = () => {
    const faqs = [
        {
            id: 1,
            question: "How can I list a car for sale?",
            answer:
                "To list a car for sale, you need to register for an account. Once logged in, navigate to the 'Sell a Car' section, fill out the required details, and upload photos of your car.",
        },
        {
            id: 2,
            question: "How do I contact a seller?",
            answer:
                "To contact a seller, browse the car listing and click on the 'Contact Seller' button. You can then send a message directly to the seller.",
        },
        {
            id: 3,
            question: "What are the fees for listing a car?",
            answer:
                "Listing a car is free of charge for all users. Additional premium features may incur fees, which are optional.",
        },
    ];

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary-700 text-center mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white shadow-md rounded-lg p-4"
                        >
                            <div
                                onClick={() => toggleFAQ(faq.id)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-primary-700">
                                    {faq.question}
                                </h3>
                                <span className="text-primary-500">
                                    {openFAQ === faq.id ? "-" : "+"}
                                </span>
                            </div>
                            {openFAQ === faq.id && (
                                <div className="mt-2 text-secondary-900">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQsSection;
