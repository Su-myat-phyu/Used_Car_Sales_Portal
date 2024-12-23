import React from "react";
import person1 from "../../../../../assets/person1.jpg";
import person2 from "../../../../../assets/person2.jpg";
import person3 from "../../../../../assets/person3.jpg";
import person4 from "../../../../../assets/person4.jpg";

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "CEO",
            bio: "Alice is the visionary behind Cardiana, leading the company with a focus on innovation and customer satisfaction.",
            profilePic: person1, // Replace with actual image URL
        },
        {
            id: 2,
            name: "Bob Smith",
            role: "Lead Developer",
            bio: "Bob is responsible for developing and maintaining our user-friendly platform, ensuring a seamless experience.",
            profilePic: person2, // Replace with actual image URL
        },
        {
            id: 3,
            name: "Clara Davis",
            role: "Marketing Manager",
            bio: "Clara drives our marketing campaigns, connecting buyers and sellers to the best car deals.",
            profilePic: person3, // Replace with actual image URL
        },
        {
            id: 4,
            name: "Daniel White",
            role: "Customer Support",
            bio: "Daniel ensures every customer query is resolved, providing exceptional service and support.",
            profilePic: person4, // Replace with actual image URL
        },
    ];

    return (
        <section className="py-16 bg-primary-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Meet Our Team
                </h2>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4"
                        >
                            {/* Profile Picture */}
                            <img
                                src={member.profilePic}
                                alt={member.name}
                                className="w-24 h-24 rounded-full shadow-md"
                            />

                            {/* Name and Role */}
                            <h3 className="text-xl font-semibold text-primary-700">
                                {member.name}
                            </h3>
                            <p className="text-sm text-accent-500">{member.role}</p>

                            {/* Bio */}
                            <p className="text-secondary-900 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
