import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useVehicle } from '../context/VehicleContext';
import VehicleCard from '../components/Vehicle/VehicleCard';

// Intersection Observer Hook for Scroll Animations
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default function Home() {
  const { state } = useVehicle();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    startDate: '',
    endDate: '',
    vehicleType: ''
  });

  // Intersection Observer refs
  const [featuredRef, featuredVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [blogRef, blogVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useIntersectionObserver({ threshold: 0.1 });

  const featuredVehicles = state.vehicles.slice(0, 6);

  const heroSlides = [
    {
      id: 1,
      title: "Premium Car Rentals",
      subtitle: "Experience Luxury on Every Journey",
      description: "Discover our exclusive collection of luxury vehicles and premium cars for your perfect ride",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
      gradient: "from-purple-600/80 to-blue-800/80"
    },
    {
      id: 2,
      title: "Adventure Awaits",
      subtitle: "Unleash Your Wild Side",
      description: "From rugged SUVs to powerful motorcycles, find the perfect vehicle for your next adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      gradient: "from-orange-600/80 to-red-800/80"
    },
    {
      id: 3,
      title: "Electric Future",
      subtitle: "Drive Sustainable, Drive Smart",
      description: "Experience the future of transportation with our eco-friendly electric vehicle collection",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop",
      gradient: "from-green-600/80 to-teal-800/80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      comment: "Absolutely amazing service! The BMW X5 was in perfect condition and the booking process was seamless. Will definitely use CarRental again!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Los Angeles",
      rating: 5,
      comment: "Great selection of vehicles and competitive prices. The Tesla Model S exceeded my expectations. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami",
      rating: 5,
      comment: "Professional service and well-maintained vehicles. The motorcycle rental was perfect for exploring the coast. Five stars!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b5b98c0c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Chicago",
      rating: 5,
      comment: "Excellent customer support and transparent pricing. The luxury car made our anniversary celebration extra special.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "San Francisco",
      rating: 5,
      comment: "Easy booking, clean vehicles, and fair prices. The electric car was a great experience. Will book again soon!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Electric Vehicle Rentals',
      excerpt: 'Discover how electric vehicles are revolutionizing the car rental industry with sustainable transportation solutions.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=350&fit=crop',
      author: 'Sarah Johnson',
      date: '2024-01-20',
      readTime: '5 min read',
      category: 'Electric Vehicles'
    },
    {
      id: '2',
      title: 'Luxury Car Rental: Experience Premium Comfort',
      excerpt: 'Explore our premium luxury vehicle collection and learn what makes a truly exceptional rental experience.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=350&fit=crop',
      author: 'Michael Chen',
      date: '2024-01-18',
      readTime: '4 min read',
      category: 'Luxury'
    },
    {
      id: '3',
      title: 'Road Trip Essentials: Planning Your Perfect Journey',
      excerpt: 'Essential tips and tricks for planning the ultimate road trip adventure with your rental vehicle.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
      author: 'Emma Rodriguez',
      date: '2024-01-15',
      readTime: '6 min read',
      category: 'Travel Tips'
    },
    {
      id: '4',
      title: 'Motorcycle Adventures: Freedom on Two Wheels',
      excerpt: 'Experience the thrill of motorcycle rentals and discover scenic routes perfect for your next adventure.',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&h=350&fit=crop',
      author: 'Jake Thompson',
      date: '2024-01-12',
      readTime: '5 min read',
      category: 'Motorcycles'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(nextTestimonial, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    window.location.href = `/vehicles?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div 
              className="relative bg-cover bg-center h-full flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-300">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl p-4 w-80 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Find Your Ride</h3>
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pick-up Location"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  value={searchFilters.startDate}
                  onChange={(e) => setSearchFilters({ ...searchFilters, startDate: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  value={searchFilters.endDate}
                  onChange={(e) => setSearchFilters({ ...searchFilters, endDate: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <select
                  value={searchFilters.vehicleType}
                  onChange={(e) => setSearchFilters({ ...searchFilters, vehicleType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Vehicle Type</option>
                  <option value="car">Cars</option>
                  <option value="bike">Motorcycles</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl"
              >
                <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
                Search Vehicles
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <div ref={featuredRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and highly-rated vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`transition-all duration-1000 ${
                  featuredVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <VehicleCard
                  vehicle={vehicle}
                  isInWishlist={state.wishlist.includes(vehicle.id)}
                />
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 ${
            featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '1200ms' }}>
            <Link
              to="/vehicles"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About CarRental
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We're revolutionizing the car rental industry by providing a seamless, technology-driven platform that connects vehicle owners with renters, creating value for both parties while promoting sustainable transportation.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Vehicles Available</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Cities Covered</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
                  <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More About Us
              </Link>
            </div>
            <div className={`relative transition-all duration-1000 ${
              aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <img
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=500&fit=crop"
                alt="About CarRental"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Trusted Service</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Section */}
      <div ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real feedback from our satisfied customers
            </p>
          </div>
          
          <div className={`relative overflow-hidden transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mx-auto max-w-4xl shadow-xl">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                      "{testimonial.comment}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div ref={blogRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Stay updated with car rental tips and travel guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 h-full ${
                  blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span className="mr-4 font-medium">{post.author}</span>
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-semibold transition-colors duration-200">
                        Read More 
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 ${
            blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '800ms' }}>
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our premium service and extensive fleet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '24/7', title: '24/7 Support', desc: 'Round-the-clock customer support for all your rental needs', gradient: 'from-blue-500 to-purple-600' },
              { icon: '✓', title: 'Best Prices', desc: 'Competitive pricing with no hidden fees', gradient: 'from-green-500 to-teal-600' },
              { icon: '★', title: 'Quality Fleet', desc: 'Well-maintained vehicles with latest features', gradient: 'from-purple-500 to-pink-600' }
            ].map((feature, index) => (
              <div key={index} className={`text-center group transition-all duration-1000 ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <span className="text-white text-3xl font-bold">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto relative">
            Join thousands of satisfied customers who trust us with their travel needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative">
            <Link
              to="/vehicles"
              className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Vehicles
            </Link>
            <Link
              to="/register"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join as Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}