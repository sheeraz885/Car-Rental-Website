import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  StarIcon, 
  MapPinIcon, 
  UsersIcon, 
  CogIcon, 
  FireIcon,
  ArrowLeftIcon,
  CalendarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useVehicle } from '../context/VehicleContext';
import { useAuth } from '../context/AuthContext';
import Modal from '../components/UI/Modal';
import Toast from '../components/UI/Toast';

export default function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, bookVehicle, addToWishlist, removeFromWishlist } = useVehicle();
  const { state: authState } = useAuth();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    customerInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; isVisible: boolean }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  const vehicle = state.vehicles.find(v => v.id === id);
  const isInWishlist = state.wishlist.includes(id || '');

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vehicle not found</h1>
          <button
            onClick={() => navigate('/vehicles')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Vehicles
          </button>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (!authState.isAuthenticated) {
      setToast({
        message: 'Please login to add to wishlist',
        type: 'error',
        isVisible: true
      });
      return;
    }

    if (isInWishlist) {
      removeFromWishlist(vehicle.id);
      setToast({
        message: 'Removed from wishlist',
        type: 'success',
        isVisible: true
      });
    } else {
      addToWishlist(vehicle.id);
      setToast({
        message: 'Added to wishlist',
        type: 'success',
        isVisible: true
      });
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!authState.isAuthenticated) {
      setToast({
        message: 'Please login to book a vehicle',
        type: 'error',
        isVisible: true
      });
      return;
    }

    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = days * vehicle.pricePerDay;

    bookVehicle({
      userId: authState.user!.id,
      vehicleId: vehicle.id,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      totalPrice,
      status: 'upcoming',
      customerInfo: bookingData.customerInfo,
      createdAt: new Date().toISOString()
    });

    setIsBookingModalOpen(false);
    setToast({
      message: 'Booking confirmed successfully!',
      type: 'success',
      isVisible: true
    });
  };

  const calculatePrice = () => {
    if (!bookingData.startDate || !bookingData.endDate) return 0;
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return days * vehicle.pricePerDay;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/vehicles')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Vehicles
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="p-6">
              <div className="mb-4">
                <img
                  src={vehicle.images[selectedImage]}
                  alt={vehicle.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {vehicle.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {vehicle.rating} ({vehicle.reviews} reviews)
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {vehicle.location}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleWishlistToggle}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isInWishlist ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {vehicle.description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center">
                  <CogIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{vehicle.transmission}</span>
                </div>
                <div className="flex items-center">
                  <FireIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{vehicle.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">📊</span>
                  <span className="text-gray-700 dark:text-gray-300">{vehicle.mileage} MPG</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Pricing</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">${vehicle.pricePerDay}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">per day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">${vehicle.pricePerWeek}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">per week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">${vehicle.pricePerMonth}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">per month</div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Book Vehicle"
        maxWidth="lg"
      >
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date
              </label>
              <input
                type="date"
                required
                value={bookingData.startDate}
                onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date
              </label>
              <input
                type="date"
                required
                value={bookingData.endDate}
                onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={bookingData.customerInfo.name}
              onChange={(e) => setBookingData({ 
                ...bookingData, 
                customerInfo: { ...bookingData.customerInfo, name: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={bookingData.customerInfo.email}
              onChange={(e) => setBookingData({ 
                ...bookingData, 
                customerInfo: { ...bookingData.customerInfo, email: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              value={bookingData.customerInfo.phone}
              onChange={(e) => setBookingData({ 
                ...bookingData, 
                customerInfo: { ...bookingData.customerInfo, phone: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {calculatePrice() > 0 && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900 dark:text-white">Total Price:</span>
                <span className="text-2xl font-bold text-blue-600">${calculatePrice()}</span>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </Modal>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </div>
  );
}