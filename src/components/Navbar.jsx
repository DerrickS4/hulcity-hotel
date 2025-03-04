import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHotelsSubmenuOpen, setIsHotelsSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const hotels = [
    { id: 1, name: "Hulcity Gold Hotel", slug: "gold-hotel" },
    { id: 2, name: "Hulcity Silver Hotel", slug: "silver-hotel" },
    { id: 3, name: "Hulcity Alex Park Motel", slug: "alex-park-motel" },
    { id: 4, name: "Hulcity Haks Motel", slug: "haks-motel" },
    { id: 5, name: "Hulcity Valley Motel", slug: "valley-motel" }
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isHotelsSubmenuOpen) setIsHotelsSubmenuOpen(false);
  };

  const toggleHotelsSubmenu = () => {
    setIsHotelsSubmenuOpen(!isHotelsSubmenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled
        ? 'bg-white-500 bg-opacity-50 backdrop-blur-sm shadow-md'
        : 'bg-white shadow-md'}`}
      style={{
        padding: isScrolled ? '25px' : '15px',
        margin: isScrolled ? '30px' : '0',
        borderRadius: isScrolled ? '12px' : '0'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-75 transition-opacity duration-200">
              <img src={logo} alt='Company Logo' className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/hotels"
                className="text-gray-700 hover:text-orange-600 transition font-medium"
              >
                Hotels
              </Link>
              {/* Desktop Hover Submenu */}
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white bg-opacity-80 backdrop-blur-md rounded-md shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                {hotels.map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    {hotel.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-1"></div>
                <Link
                  to="/hotels"
                  className="block px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50"
                >
                  View All Hotels
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-orange-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Hotels with submenu */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-gray-700 hover:text-orange-600 transition font-medium"
                onClick={toggleHotelsSubmenu}
              >
                Hotels
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${isHotelsSubmenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Submenu */}
              {isHotelsSubmenuOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-100">
                  {hotels.map((hotel) => (
                    <Link
                      key={hotel.id}
                      to={`/hotels/${hotel.slug}`}
                      className="block text-gray-600 hover:text-orange-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {hotel.name}
                    </Link>
                  ))}
                  <Link
                    to="/hotels"
                    className="block text-orange-600 font-medium hover:text-orange-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Hotels
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block text-gray-700 hover:text-orange-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-orange-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};


export default Navbar;
