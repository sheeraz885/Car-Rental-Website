import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

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
    excerpt: 'Discover how electric vehicles are revolutionizing the car rental industry with sustainable transportation solutions.',
    content: `
      <h2>Introduction to Electric Vehicle Rentals</h2>
      <p>The automotive industry is experiencing a revolutionary shift towards electric vehicles (EVs), and the car rental sector is at the forefront of this transformation. Electric vehicle rentals are becoming increasingly popular as consumers become more environmentally conscious and seek sustainable transportation options.</p>
      
      <h2>Benefits of Electric Vehicle Rentals</h2>
      <p>Electric vehicles offer numerous advantages for rental customers:</p>
      <ul>
        <li><strong>Environmental Impact:</strong> Zero direct emissions contribute to cleaner air quality</li>
        <li><strong>Cost Efficiency:</strong> Lower operating costs due to reduced fuel expenses</li>
        <li><strong>Advanced Technology:</strong> Cutting-edge features and infotainment systems</li>
        <li><strong>Quiet Operation:</strong> Peaceful driving experience with minimal noise</li>
        <li><strong>Instant Torque:</strong> Immediate acceleration and responsive performance</li>
      </ul>
      
      <h2>Charging Infrastructure Development</h2>
      <p>The expansion of charging networks worldwide is making electric vehicle rentals more practical and convenient. Major cities are investing heavily in fast-charging stations, making long-distance travel with EVs increasingly feasible.</p>
      
      <h2>Future Outlook</h2>
      <p>As battery technology continues to improve and charging infrastructure expands, electric vehicle rentals will become the standard rather than the exception. The future of transportation is electric, and rental companies are leading the charge.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-20',
    readTime: '5 min read',
    category: 'Electric Vehicles',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Car Rental: Experience Premium Comfort',
    excerpt: 'Explore our premium luxury vehicle collection and learn what makes a truly exceptional rental experience.',
    content: `
      <h2>The World of Luxury Car Rentals</h2>
      <p>Luxury car rentals offer an unparalleled driving experience that combines comfort, performance, and prestige. Whether for special occasions, business travel, or simply treating yourself, luxury vehicles provide an elevated transportation experience.</p>
      
      <h2>Premium Features and Amenities</h2>
      <ul>
        <li><strong>Superior Comfort:</strong> Premium leather seating and climate control</li>
        <li><strong>Advanced Technology:</strong> State-of-the-art infotainment and safety systems</li>
        <li><strong>Exceptional Performance:</strong> Powerful engines and refined handling</li>
        <li><strong>Prestigious Brands:</strong> Mercedes-Benz, BMW, Audi, and more</li>
      </ul>
      
      <h2>When to Choose Luxury</h2>
      <p>Luxury car rentals are perfect for special occasions, important business meetings, or when you want to make a lasting impression. The investment in a premium vehicle often pays dividends in comfort and confidence.</p>
    `,
    author: 'Michael Chen',
    date: '2024-01-18',
    readTime: '4 min read',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Road Trip Essentials: Planning Your Perfect Journey',
    excerpt: 'Essential tips and tricks for planning the ultimate road trip adventure with your rental vehicle.',
    content: `
      <h2>Planning the Perfect Road Trip</h2>
      <p>Road trips offer the ultimate freedom to explore at your own pace. With proper planning and the right rental vehicle, your journey can be as memorable as your destination.</p>
      
      <h2>Essential Planning Steps</h2>
      <ul>
        <li><strong>Route Planning:</strong> Map out your journey with interesting stops</li>
        <li><strong>Vehicle Selection:</strong> Choose a comfortable car for long distances</li>
        <li><strong>Accommodation:</strong> Book hotels or plan camping spots in advance</li>
        <li><strong>Emergency Kit:</strong> Pack essentials for unexpected situations</li>
      </ul>
      
      <h2>Making the Most of Your Journey</h2>
      <p>The key to a successful road trip is flexibility. While planning is important, leave room for spontaneous discoveries and unexpected adventures along the way.</p>
    `,
    author: 'Emma Rodriguez',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Motorcycle Adventures: Freedom on Two Wheels',
    excerpt: 'Experience the thrill of motorcycle rentals and discover scenic routes perfect for your next adventure.',
    content: `
      <h2>The Thrill of Motorcycle Rentals</h2>
      <p>Motorcycle rentals offer an unmatched sense of freedom and adventure. Whether you're exploring winding mountain roads or cruising coastal highways, motorcycles provide an intimate connection with the journey.</p>
      
      <h2>Safety First</h2>
      <ul>
        <li><strong>Protective Gear:</strong> Always wear appropriate safety equipment</li>
        <li><strong>License Requirements:</strong> Ensure you have proper motorcycle endorsement</li>
        <li><strong>Weather Awareness:</strong> Check conditions before riding</li>
        <li><strong>Route Planning:</strong> Choose motorcycle-friendly roads</li>
      </ul>
      
      <h2>Best Motorcycle Routes</h2>
      <p>From scenic coastal highways to mountain passes, certain routes are particularly well-suited for motorcycle adventures. Research local recommendations and connect with riding communities for insider tips.</p>
    `,
    author: 'Jake Thompson',
    date: '2024-01-12',
    readTime: '5 min read',
    category: 'Motorcycles',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Smart Booking: How to Save on Car Rentals',
    excerpt: 'Learn insider tips and strategies to get the best deals on car rentals without compromising quality.',
    content: `
      <h2>Maximizing Your Rental Savings</h2>
      <p>Car rental costs can vary significantly based on timing, location, and booking strategies. With the right approach, you can secure excellent vehicles at competitive prices.</p>
      
      <h2>Money-Saving Strategies</h2>
      <ul>
        <li><strong>Book in Advance:</strong> Early bookings often secure better rates</li>
        <li><strong>Compare Platforms:</strong> Use multiple sites to find the best deals</li>
        <li><strong>Flexible Dates:</strong> Adjust travel dates for better pricing</li>
        <li><strong>Membership Programs:</strong> Join loyalty programs for exclusive discounts</li>
      </ul>
      
      <h2>Hidden Costs to Avoid</h2>
      <p>Be aware of additional fees such as insurance, fuel charges, and late return penalties. Understanding the total cost upfront helps you make informed decisions and avoid surprises.</p>
    `,
    author: 'Lisa Park',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Money Saving',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'City vs Highway: Choosing the Right Vehicle',
    excerpt: 'Understand which vehicle type suits your driving needs best, whether for city commuting or highway cruising.',
    content: `
      <h2>Matching Vehicles to Your Needs</h2>
      <p>Different driving environments require different vehicle characteristics. Understanding these differences helps you choose the perfect rental for your specific journey.</p>
      
      <h2>City Driving Considerations</h2>
      <ul>
        <li><strong>Compact Size:</strong> Easier parking and maneuvering</li>
        <li><strong>Fuel Efficiency:</strong> Better mileage in stop-and-go traffic</li>
        <li><strong>Visibility:</strong> Good sight lines for urban navigation</li>
        <li><strong>Technology:</strong> GPS and parking assistance features</li>
      </ul>
      
      <h2>Highway Travel Requirements</h2>
      <p>For long-distance highway travel, prioritize comfort, stability, and performance. Larger vehicles with powerful engines and comfortable seating make highway miles more enjoyable.</p>
    `,
    author: 'David Wilson',
    date: '2024-01-08',
    readTime: '3 min read',
    category: 'Vehicle Guide',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Blog
        </button>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-white/90 text-sm">
                <UserIcon className="h-4 w-4 mr-1" />
                <span className="mr-4 font-medium">{post.author}</span>
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ShareIcon className="h-5 w-5 mr-1" />
                Share
              </button>
            </div>

            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <button
                      onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}