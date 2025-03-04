import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="/images/hero-image.jpg"
          alt="Uganda Hotels"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover Uganda's Finest Hotels
            </h1>
            <p className="text-xl text-white mb-8 opacity-90">
              Experience exceptional comfort and authentic Ugandan hospitality across our carefully selected properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/hotels"
                className="bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-3 rounded-md font-medium text-lg"
              >
                Browse Hotels
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 transition border-2 border-white text-white px-8 py-3 rounded-md font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
