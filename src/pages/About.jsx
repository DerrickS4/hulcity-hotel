import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Uganda Hotels</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Providing exceptional hospitality experiences across Uganda.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/images/about-story.jpg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Uganda Hotels was founded in 2010 with a vision to showcase the best accommodations across Uganda. What started as a small collection of boutique hotels has grown into a curated selection of the finest properties in Uganda.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to connect travelers with authentic Ugandan hospitality while maintaining the highest standards of comfort, service, and sustainability. We believe that a great hotel experience is central to a memorable journey.
              </p>
              <p className="text-gray-700">
                Over the years, we've built strong relationships with hoteliers throughout Uganda, allowing us to offer our guests unparalleled experiences at exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Authentic Experiences</h3>
              <p className="text-gray-700">
                We believe in showcasing the true essence of Ugandan hospitality, culture, and natural beauty through our carefully selected properties.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Exceptional Service</h3>
              <p className="text-gray-700">
                We're committed to providing outstanding customer service at every touchpoint, ensuring that your stay exceeds expectations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V12m0 0L10 10m2 2l2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We prioritize environmentally responsible practices and support hotels that contribute positively to their local communities and ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="/images/team-1.jpg"
                  alt="Sarah Nakimuli"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Nakimuli</h3>
              <p className="text-orange-600 mb-3">Founder & CEO</p>
              <p className="text-gray-700">
                With over 15 years in hospitality, Sarah founded Uganda Hotels with a passion for showcasing Ugandan hospitality.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="/images/team-2.jpg"
                  alt="David Okello"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">David Okello</h3>
              <p className="text-orange-600 mb-3">Hotel Relations Director</p>
              <p className="text-gray-700">
                David manages our relationships with hotels across Uganda, ensuring consistent quality and guest satisfaction.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="/images/team-3.jpg"
                  alt="Rachel Auma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Rachel Auma</h3>
              <p className="text-orange-600 mb-3">Customer Experience Manager</p>
              <p className="text-gray-700">
                Rachel leads our customer support team, ensuring that every guest has a seamless and memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Uganda's Finest Hotels?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse our collection of exceptional hotels and start planning your Ugandan adventure today.
          </p>
          <Link
            to="/hotels"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 transition px-8 py-3 rounded-md font-medium"
          >
            Explore Our Hotels
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
