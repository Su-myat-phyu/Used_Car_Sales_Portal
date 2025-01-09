import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const AboutUs = () => {
  return (
    
    <main className="bg-white font-sans text-gray-700">
        <Header />
      {/* About Us Header */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-primary-500">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 px-6 font-serif">
        Welcome to Merry Meals, where nourishment meets care and compassion. We are dedicated to providing high-quality, nutritious meals to individuals and families who need them most. Whether it’s delivering hot, freshly prepared meals or convenient frozen options, our mission is to ensure that everyone has access to wholesome food that promotes health and well-being.

At Merry Meals, we believe that food is more than just sustenance; it’s about creating connections, supporting communities, and improving lives. Our team works passionately to serve those who are homebound, elderly, or facing challenges that make meal preparation difficult. With every meal delivered, we bring warmth, hope, and a sense of comfort right to your doorstep.

Join us as we continue to spread joy, one meal at a time, and make a meaningful impact in the lives of those we serve. Merry Meals—because everyone deserves a seat at the table.
        </p>
      </section>

      {/* Key Statistics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-primary-500 font-serif">10.0M+</h2>
            <p className="mt-2 text-gray-600">Meals Delivered</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-primary-500 font-serif">10,000+</h2>
            <p className="mt-2 text-gray-600">Volunteers Engaged</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-primary-500 font-serif">1,000+</h2>
            <p className="mt-2 text-gray-600">Communities Supported</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary-500 font-serif">
              Making a Difference, One Meal at a Time
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed font-serif">
              Our mission is to ensure that no individual goes hungry. Through the power of dedicated volunteers and generous donors, we have successfully delivered millions of meals to families and individuals in need.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://mealsonwheels.org.au/wp-content/uploads/2021/03/Home-Page-Our-Mission-Tile-768x512.jpg" /* Replace with actual image */
              alt="Volunteers"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-500">How You Can Help</h2>
          <p className="mt-4 text-gray-600 px-6 font-serif">
            Join us in delivering hope. Become a volunteer or make a donation to support our cause.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-primary-500 text-white px-6 py-3 rounded hover:bg-primary-700 transition font-serif">
              Donate Now
            </button>
            <button className="border-2 border-primary-500 text-primary-500 px-6 py-3 rounded hover:bg-primary-500 hover:text-white transition font-serif">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-500 font-serif">Our Volunteers</h2>
          <p className="mt-4 text-gray-600 font-serif">
            Meet the people who make it all possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {/* Replace with actual images */}
            <div>
              <img
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Volunteer 1"
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-serif">Jane Doe</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1597690/pexels-photo-1597690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Volunteer 2"
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-serif">John Smith</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4909509/pexels-photo-4909509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Volunteer 3"
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-serif">Maria Johnson</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Volunteer 4"
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-serif">Robert Brown</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUs;
