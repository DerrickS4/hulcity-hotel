import React from 'react';
import '../index.css';

const AboutSection = () => {
  return (
    <div className="about-section py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Hotel</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of the city. Our hotel combines contemporary design
            with exceptional service to create unforgettable stays for all our guests.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* In a real app, this would be an actual image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Hotel Exterior Image</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, our hotel was born from a vision to create a space where travelers could
              experience the true essence of hospitality. We began as a small boutique establishment and
              have since grown into a recognized name in the hospitality industry.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have continuously evolved, enhancing our services and facilities to meet
              the changing needs of our guests while maintaining our commitment to personalized service
              and attention to detail.
            </p>
            <p className="text-gray-600">
              Today, we pride ourselves on offering a blend of modern luxury with warm, traditional
              hospitality that makes every guest feel at home.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-100 rounded-lg p-10 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Hospitality</h3>
              <p className="text-gray-600 text-center">
                We believe in creating warm, welcoming experiences that make our guests feel truly valued and cared for.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We are committed to excellence in every aspect of our service, from our accommodations to our dining experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We strive to operate in an environmentally responsible manner, implementing eco-friendly practices across our hotel.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                {/* This would be a real image in production */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-orange-500 mb-3">General Manager</p>
              <p className="text-gray-600 px-6">
                With over 15 years in hospitality, Sarah ensures that every aspect of our hotel exceeds expectations.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                {/* This would be a real image in production */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-orange-500 mb-3">Executive Chef</p>
              <p className="text-gray-600 px-6">
                Michael brings his international culinary expertise to create unforgettable dining experiences for our guests.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                {/* This would be a real image in production */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Elena Romero</h3>
              <p className="text-orange-500 mb-3">Guest Relations Director</p>
              <p className="text-gray-600 px-6">
                Elena's passion for hospitality ensures every guest receives personalized attention and exceptional service.
              </p>
            </div>
          </div>
        </div>

        {/* Accolades */}
        <div className="bg-gray-800 text-white rounded-lg p-10 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Accolades</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">4.8</div>
              <p className="text-lg mb-1">Star Rating</p>
              <p className="text-sm text-gray-400">Based on 2000+ reviews</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">#3</div>
              <p className="text-lg mb-1">City Ranking</p>
              <p className="text-sm text-gray-400">TripAdvisor 2024</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">93%</div>
              <p className="text-lg mb-1">Return Rate</p>
              <p className="text-sm text-gray-400">For business travelers</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
              <p className="text-lg mb-1">Industry Awards</p>
              <p className="text-sm text-gray-400">Since our opening</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-orange-100 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Hospitality</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We invite you to discover the perfect blend of luxury, comfort, and exceptional service that defines our hotel experience.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
