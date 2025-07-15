import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Electric Vehicle Rentals',
    excerpt: 'Discover how electric vehicles are revolutionizing the car rental industry with sustainable transportation solutions and cutting-edge technology.',
    content: '',
    author: 'Sarah Johnson',
    date: '2024-01-20',
    readTime: '5 min read',
    category: 'Electric Vehicles',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Car Rental: Experience Premium Comfort',
    excerpt: 'Explore our premium luxury vehicle collection and learn what makes a truly exceptional rental experience with world-class service.',
    content: '',
    author: 'Michael Chen',
    date: '2024-01-18',
    readTime: '4 min read',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Road Trip Essentials: Planning Your Perfect Journey',
    excerpt: 'Essential tips and tricks for planning the ultimate road trip adventure with your rental vehicle, from route planning to safety.',
    content: '',
    author: 'Emma Rodriguez',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Motorcycle Adventures: Freedom on Two Wheels',
    excerpt: 'Experience the thrill of motorcycle rentals and discover scenic routes perfect for your next adventure with safety tips.',
    content: '',
    author: 'Jake Thompson',
    date: '2024-01-12',
    readTime: '5 min read',
    category: 'Motorcycles',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Smart Booking: How to Save on Car Rentals',
    excerpt: 'Learn insider tips and strategies to get the best deals on car rentals without compromising quality or service.',
    content: '',
    author: 'Lisa Park',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Money Saving',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'City vs Highway: Choosing the Right Vehicle',
    excerpt: 'Understand which vehicle type suits your driving needs best, whether for city commuting or highway cruising adventures.',
    content: '',
    author: 'David Wilson',
    date: '2024-01-08',
    readTime: '3 min read',
    category: 'Vehicle Guide',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
  }
];

export default function Blog() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [featuredRef, featuredVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [postsRef, postsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [newsletterRef, newsletterVisible] = useIntersectionObserver({ threshold: 0.1 });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            CarRental Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest car rental tips, travel guides, and industry insights
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div ref={featuredRef} className={`mb-20 transition-all duration-1000 ${
            featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    Featured Article
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span className="mr-6 font-medium">{featuredPost.author}</span>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-6">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                  >
                    Read Full Article
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div ref={postsRef} className={`transition-all duration-1000 ${
          postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 h-full ${
                  postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span className="mr-4 font-medium">{post.author}</span>
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-semibold transition-colors duration-200">
                      Read More 
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div ref={newsletterRef} className={`mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden transition-all duration-1000 ${
          newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with CarRental
            </h2>
            <p className="text-blue-100 mb-10 text-xl max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest car rental tips, exclusive deals, and travel guides delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 placeholder-gray-500 shadow-lg"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}