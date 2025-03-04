import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hotels from '../data/hotels';

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Find the hotel with the matching id
    const hotelData = hotels.find(h => h.id === parseInt(id));

    if (hotelData) {
      setHotel(hotelData);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel Not Found</h2>
        <p className="text-gray-600 mb-8">The hotel you are looking for does not exist.</p>
        <Link to="/hotels" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition">
          Browse All Hotels
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full">
        <img
          src={hotel.images[activeImage] || "/images/placeholder-hotel.jpg"}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-end">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{hotel.name}</h1>
            <div className="flex items-center text-white mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{hotel.location}, Uganda</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 px-4">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="flex space-x-2 p-4 overflow-x-auto">
                {hotel.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden ${activeImage === index ? 'ring-2 ring-orange-500' : ''}`}
                  >
                    <img
                      src={image || "/images/placeholder-hotel.jpg"}
                      alt={`${hotel.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About this Hotel</h2>
              <p className="text-gray-700 mb-6">{hotel.description}</p>

              {/* Amenities */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Options</h2>

              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{room.type} Room</h3>
                      <div className="text-orange-600 font-bold">${room.price} per night</div>
                    </div>
                    <p className="text-gray-600 mb-3">Capacity: {room.capacity} {room.capacity === 1 ? 'person' : 'people'}</p>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition">
                      Select Room
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 px-4">
            {/* Price Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay at {hotel.name}</h3>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700 ml-1">{hotel.rating} rating</span>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-4">{hotel.price}</div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded font-medium transition">
                  Book Now
                </button>
                <button className="w-full border border-orange-600 bg-white text-orange-600 hover:bg-orange-50 px-4 py-3 rounded font-medium transition">
                  Contact Hotel
                </button>
              </div>

              <hr className="my-6" />

              <div className="text-gray-600 text-sm">
                <p className="mb-2">
                  <strong>Best price guarantee</strong>
                </p>
                <p>
                  Book directly with us for the best rates and exclusive offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
