import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.images[0] || "/images/placeholder-hotel.jpg"}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
          {hotel.rating} ★
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{hotel.name}</h3>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{hotel.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {amenity}
            </span>
          ))}
          {hotel.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              +{hotel.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-orange-600 font-bold">{hotel.price}</div>
          <Link
            to={`/hotels/${hotel.id}`}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
