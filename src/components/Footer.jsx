import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-orange-500 mb-4">UGANDA HOTELS</div>
            <p className="text-gray-300 text-sm">
              Discover Uganda's beauty through our carefully selected hotels offering exceptional service and comfort.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/hotels" className="hover:text-orange-500 transition">Hotels</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                Kampala, Uganda
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                +256 123 456 789
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                info@ugandahotels.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-3">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full sm:w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
              />
              <button className="bg-orange-600 hover:bg-orange-700 transition px-4 py-2 rounded-md font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Uganda Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
