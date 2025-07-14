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
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop'
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest car rental tips and travel guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}