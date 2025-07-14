import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

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
    title: 'The Ultimate Guide to Car Rental in 2024',
    excerpt: 'Everything you need to know about renting a car in the modern era, from booking tips to insurance coverage.',
    content: '',
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Electric vs. Gasoline Cars: Which Should You Rent?',
    excerpt: 'Compare the benefits and drawbacks of electric and gasoline rental cars to make the best choice for your trip.',
    content: '',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '4 min read',
    category: 'Car Comparison',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Top 10 Road Trip Destinations for 2024',
    excerpt: 'Discover the most scenic and exciting road trip destinations that are perfect for your next rental car adventure.',
    content: '',
    author: 'Mike Davis',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'How to Save Money on Car Rentals',
    excerpt: 'Practical tips and strategies to get the best deals on car rentals without compromising on quality.',
    content: '',
    author: 'Emily Chen',
    date: '2024-01-08',
    readTime: '3 min read',
    category: 'Money Saving',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Understanding Car Rental Insurance',
    excerpt: 'A comprehensive guide to understanding different types of car rental insurance and what coverage you really need.',
    content: '',
    author: 'Robert Wilson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'Luxury Car Rentals: What to Expect',
    excerpt: 'Everything you need to know about luxury car rentals, from premium features to special requirements.',
    content: '',
    author: 'Lisa Anderson',
    date: '2024-01-03',
    readTime: '5 min read',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop'
  },
  {
    id: '7',
    title: 'Best Family Cars for Your Next Vacation',
    excerpt: 'Find the perfect family-friendly rental car with safety features, space, and comfort for your vacation.',
    content: '',
    author: 'David Brown',
    date: '2024-01-01',
    readTime: '4 min read',
    category: 'Family Travel',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop'
  },
  {
    id: '8',
    title: 'Motorcycle Rental Safety Tips',
    excerpt: 'Essential safety guidelines and tips for renting and riding motorcycles during your travels.',
    content: '',
    author: 'Alex Rodriguez',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop'
  },
  {
    id: '9',
    title: 'Winter Driving with Rental Cars',
    excerpt: 'Important considerations and tips for renting cars during winter months and driving in snowy conditions.',
    content: '',
    author: 'Jennifer Lee',
    date: '2023-12-25',
    readTime: '5 min read',
    category: 'Seasonal Tips',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop'
  },
  {
    id: '10',
    title: 'Business Travel Car Rental Guide',
    excerpt: 'Optimize your business travel with the right rental car choices, expense management, and professional tips.',
    content: '',
    author: 'Michael Chang',
    date: '2023-12-22',
    readTime: '4 min read',
    category: 'Business Travel',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop'
  },
  {
    id: '11',
    title: 'Eco-Friendly Car Rental Options',
    excerpt: 'Explore environmentally conscious car rental choices including hybrid and electric vehicles.',
    content: '',
    author: 'Emma Green',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
  },
  {
    id: '12',
    title: 'International Car Rental: What You Need to Know',
    excerpt: 'Navigate international car rentals with confidence - licenses, insurance, and local driving laws.',
    content: '',
    author: 'Carlos Martinez',
    date: '2023-12-18',
    readTime: '8 min read',
    category: 'International Travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
  },
  {
    id: '13',
    title: 'Car Rental Apps: The Future of Mobility',
    excerpt: 'Discover how mobile apps are revolutionizing the car rental experience with seamless booking and keyless entry.',
    content: '',
    author: 'Tech Reviewer',
    date: '2023-12-15',
    readTime: '4 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
  },
  {
    id: '14',
    title: 'Convertible Car Rentals: Summer Driving Guide',
    excerpt: 'Make the most of your summer vacation with a convertible rental car and experience open-air driving.',
    content: '',
    author: 'Summer Explorer',
    date: '2023-12-12',
    readTime: '5 min read',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop'
  },
  {
    id: '15',
    title: 'SUV vs Sedan: Which Rental is Right for You?',
    excerpt: 'Compare SUVs and sedans to determine which vehicle type best suits your travel needs and preferences.',
    content: '',
    author: 'Vehicle Expert',
    date: '2023-12-10',
    readTime: '6 min read',
    category: 'Vehicle Comparison',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop'
  },
  {
    id: '16',
    title: 'Car Rental Loyalty Programs: Maximize Your Benefits',
    excerpt: 'Learn how to leverage car rental loyalty programs to get upgrades, discounts, and exclusive perks.',
    content: '',
    author: 'Loyalty Expert',
    date: '2023-12-08',
    readTime: '4 min read',
    category: 'Rewards',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    id: '17',
    title: 'Airport Car Rental vs City Pickup: Pros and Cons',
    excerpt: 'Weigh the advantages and disadvantages of renting cars at airports versus city locations.',
    content: '',
    author: 'Travel Advisor',
    date: '2023-12-05',
    readTime: '5 min read',
    category: 'Location Tips',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop'
  },
  {
    id: '18',
    title: 'Vintage Car Rentals: Drive Classic Automobiles',
    excerpt: 'Experience automotive history with vintage car rentals and make your special occasion unforgettable.',
    content: '',
    author: 'Classic Car Enthusiast',
    date: '2023-12-03',
    readTime: '6 min read',
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop'
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CarRental Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Stay updated with the latest car rental tips, travel guides, and industry insights
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4 font-medium">{featuredPost.author}</span>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
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

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with CarRental
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest car rental tips, exclusive deals, and travel guides delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 placeholder-gray-500"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}