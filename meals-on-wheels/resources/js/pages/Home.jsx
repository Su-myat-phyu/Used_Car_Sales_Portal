import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/logo.png';
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-white font-sans text-lg">
      
      <Header />
        {/* Main Section */}
      <section className="flex flex-wrap items-center mt-0 py-16 px-6 bg-white">

       { /* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold leading-tight text-gray-800 mb-4 font-serif">
            Delivering{' '}
            <span className="text-primary-500">Nourishment</span>, Bringing{' '}
            <span className="text-primary-500">Smiles</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg font-serif">
            Welcome to Meals On Wheels, where compassion meets cuisine. We are a dedicated team
            committed to delivering hot, nutritious meals to qualified adults in need. Our mission
            is simple — ensuring that no one goes hungry. Whether it's due to age, illness, or
            disability, we're here to provide a helping hand.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-800">
              Get Meal
            </button>
            <button className="bg-secondary-600 text-white px-8 py-3 rounded-md hover:bg-secondary-400">
              Donate
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="w-full lg:w-1/2 flex space-x-4 mt-8 lg:mt-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661508502918-c839a45c8be4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9sZCUyMHBlb3BsZSUyMHJlY2VpdmVkJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Helping Hand"
            className="rounded-lg shadow-lg w-2/5 h-64 object-cover" /* Adjusted image size */
          />
          <img
            src="https://images.pexels.com/photos/6646855/pexels-photo-6646855.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Charity"
            className="rounded-lg shadow-lg w-2/5 h-64 object-cover" /* Adjusted image size */
          />
        </div>
      </section>
  
        {/* Hot Noon Meal and Frozen Meal Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h3 className="text-4xl font-semibold text-secondary-600 mb-6 font-serif">Our Meals</h3>
        <div className="flex justify-center space-x-8 px-6">
          {/* Hot Noon Meal Card */}
          <div className="bg-white p-6 rounded shadow w-1/3">
            <img
              src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hot Noon Meal"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-bold mb-2 font-serif">Hot Noon Meal</h4>
            <p className="text-gray-700 text-lg font-serif">
              Enjoy a freshly prepared, nutritious Hot Noon Meal delivered right to your doorstep!
              Our hot meals are crafted daily with care, ensuring they are packed with flavor,
              warmth, and the nutrients you need to stay energized throughout the day. Designed
              especially for individuals who appreciate convenience without compromising on quality,
              each meal is delivered piping hot and ready to eat.
            </p>
          </div>

          {/* Frozen Meal Card */}
          <div className="bg-white p-6 rounded shadow w-1/3">
            <img
              src="https://charity-organization-by-khant.netlify.app/assets/frozen-meal-3-l279h2ff.png"
              alt="Frozen Meal"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-bold mb-2 font-serif">Frozen Meal</h4>
            <p className="text-gray-700 text-lg font-serif">
              Our Frozen Meals offer the flexibility and convenience of enjoying delicious,
              wholesome food at your own time. Prepared using fresh, high-quality ingredients, these
              meals are quickly frozen to lock in their flavor and nutrients.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Purpose Section */}
<section className="py-16 bg-white px-6 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 text-left md:pr-6">
    <h3 className="text-3xl font-bold text-accent-600 mb-4 font-serif">
      Our Shared Purpose
    </h3>
    <p className="text-gray-700 font-serif mb-6 leading-relaxed">
        At Merry Meals, our purpose is to nourish lives and build stronger communities by
          providing convenient, nutritious meals to individuals and families in need. We are driven
          by a shared commitment to ensuring everyone has access to fresh, high-quality meals
          regardless of their circumstances.
    </p>

    <button className="bg-accent-600 text-white py-2 px-6 rounded-full hover:bg-green-600">
      Learn more
    </button>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src="https://static.timesnewsgroup.com.au/prod/uploads/sites/2/2024/06/Untitled-design-2024-06-26T121803.310.jpg"
      alt="Shared Purpose"
      className="rounded-lg shadow-lg w-full object-cover"
    />
  </div>
</section>

{/* How We Help Section */}
<section className="py-16 bg-gray-50 px-6 flex flex-col md:flex-row-reverse items-center">
  <div className="md:w-1/2 text-left md:pl-6">
    <h3 className="text-3xl font-bold text-accent-400 mb-4 font-serif">
      How We Help
    </h3>
    <p className="text-gray-700 font-serif mb-6 leading-relaxed">
    At Merry Meals, we help by providing reliable and timely meal delivery services to
          individuals who are homebound, elderly, or facing challenges that prevent them from
          preparing meals. Our team works tirelessly to ensure that each meal we deliver is
          wholesome, nutritious, and tailored to meet specific dietary needs.
    </p>

    <button className="bg-accent-400 text-white py-2 px-6 rounded-full hover:bg-blue-600">
      Learn more
    </button>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src="https://plus.unsplash.com/premium_photo-1661543044634-4f692aa15c3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="How We Help"
      className="rounded-lg shadow-lg w-full object-cover"
    />
  </div>
</section>

      {/* Donor Testimonials Section */}
<section className="py-16 bg-white px-6 text-center">
  <h3 className="text-3xl font-bold text-gray-800 mb-12 font-serif">
    What Our Donors Say
  </h3>
  <div className="flex flex-col md:flex-row justify-center gap-8">
    {/* Testimonial 1 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Charles"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Charles</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        Contributing to MerryMeal has been a heartwarming experience. Knowing that my donation
        helps deliver hot meals to those in need brings a sense of fulfillment. Every bit counts
        in making a difference in someone's day.
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Peter"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Peter</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        MerryMeal's dedication to providing nutritious meals to vulnerable individuals is truly
        commendable. I'm proud to support such a worthy cause. Together, we can ensure that no one
        goes hungry.
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Taylor"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Taylor</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        Donating to MerryMeal goes beyond charity; it's about nourishing communities. The joy of
        knowing that my contribution helps deliver both hot and frozen meals to those who require
        them is unmatched. Joining hands for a healthier, happier world.
      </p>
    </div>
  </div>
</section>

  <Footer />

      </div>
    );
  }

