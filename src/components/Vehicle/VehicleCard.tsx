import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon, MapPinIcon, UsersIcon, CogIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Vehicle } from '../../context/VehicleContext';
import { useVehicle } from '../../context/VehicleContext';

interface VehicleCardProps {
  vehicle: Vehicle;
  isInWishlist?: boolean;
}

export default function VehicleCard({ vehicle, isInWishlist = false }: VehicleCardProps) {
  const { addToWishlist, removeFromWishlist } = useVehicle();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist) {
      removeFromWishlist(vehicle.id);
    } else {
      addToWishlist(vehicle.id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <img
          src={vehicle.images[0]}
          alt={vehicle.name}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={handleWishlistToggle}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            {isInWishlist ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-sm ${
            vehicle.type === 'luxury' ? 'bg-purple-500/90 text-white' :
            vehicle.type === 'bike' ? 'bg-orange-500/90 text-white' :
            'bg-blue-500/90 text-white'
          }`}>
            {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{vehicle.name}</h3>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {vehicle.rating} ({vehicle.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {vehicle.location}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center">
            <UsersIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{vehicle.seats} seats</span>
          </div>
          <div className="flex items-center">
            <CogIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{vehicle.transmission}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-3xl font-bold text-blue-600">${vehicle.pricePerDay}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">per day</div>
          </div>
        </div>

        <Link
          to={`/vehicle/${vehicle.id}`}
          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}