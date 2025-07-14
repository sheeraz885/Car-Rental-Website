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
    title: 'The Ultimate Guide to Car Rental in 2024',
    excerpt: 'Everything you need to know about renting a car in the modern era, from booking tips to insurance coverage.',
    content: `
      <h2>Introduction</h2>
      <p>Car rental has evolved significantly in recent years, with new technologies, changing consumer preferences, and innovative business models reshaping the industry. Whether you're planning a vacation, need a temporary replacement vehicle, or require transportation for business travel, understanding the modern car rental landscape is essential for making informed decisions.</p>
      
      <h2>Choosing the Right Rental Company</h2>
      <p>The car rental market offers numerous options, from traditional giants like Hertz and Avis to newer players like Turo and Zipcar. Each has its advantages:</p>
      <ul>
        <li><strong>Traditional Companies:</strong> Extensive networks, established processes, and comprehensive insurance options</li>
        <li><strong>Peer-to-Peer Platforms:</strong> Unique vehicles, competitive pricing, and local experiences</li>
        <li><strong>App-Based Services:</strong> Convenience, digital-first experience, and flexible rental periods</li>
      </ul>
      
      <h2>Booking Tips for 2024</h2>
      <p>To get the best deals and ensure availability:</p>
      <ul>
        <li>Book in advance, especially during peak travel seasons</li>
        <li>Compare prices across multiple platforms</li>
        <li>Consider membership programs for frequent renters</li>
        <li>Be flexible with pickup locations and times</li>
        <li>Read the fine print regarding fuel policies and mileage limits</li>
      </ul>
      
      <h2>Insurance Considerations</h2>
      <p>Understanding insurance options is crucial for protecting yourself and your finances. Most rental companies offer several types of coverage, and you may already have protection through your personal auto insurance or credit card benefits.</p>
      
      <h2>Conclusion</h2>
      <p>The car rental industry continues to evolve, offering more choices and flexibility than ever before. By staying informed about the latest trends and best practices, you can ensure a smooth and cost-effective rental experience.</p>
    `,
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Electric vs. Gasoline Cars: Which Should You Rent?',
    excerpt: 'Compare the benefits and drawbacks of electric and gasoline rental cars to make the best choice for your trip.',
    content: `
      <h2>The Electric Revolution in Car Rentals</h2>
      <p>Electric vehicles (EVs) are becoming increasingly common in rental fleets, offering a glimpse into the future of transportation. But are they right for your next trip?</p>
      
      <h2>Advantages of Electric Rentals</h2>
      <ul>
        <li><strong>Environmental Impact:</strong> Zero direct emissions and reduced carbon footprint</li>
        <li><strong>Cost Savings:</strong> Lower fuel costs and potential toll/parking discounts</li>
        <li><strong>Quiet Operation:</strong> Peaceful driving experience</li>
        <li><strong>Instant Torque:</strong> Smooth acceleration and responsive performance</li>
        <li><strong>Technology Features:</strong> Advanced infotainment and driver assistance systems</li>
      </ul>
      
      <h2>Considerations for Electric Vehicles</h2>
      <ul>
        <li><strong>Range Limitations:</strong> Plan routes around charging infrastructure</li>
        <li><strong>Charging Time:</strong> Longer refueling stops compared to gas stations</li>
        <li><strong>Availability:</strong> Limited selection in some markets</li>
        <li><strong>Learning Curve:</strong> Different driving and charging procedures</li>
      </ul>
      
      <h2>When to Choose Gasoline</h2>
      <p>Traditional gasoline vehicles remain the better choice for:</p>
      <ul>
        <li>Long-distance road trips</li>
        <li>Rural areas with limited charging infrastructure</li>
        <li>Travelers unfamiliar with EV technology</li>
        <li>Situations requiring maximum flexibility</li>
      </ul>
      
      <h2>Making Your Decision</h2>
      <p>Consider your specific travel needs, destination, and comfort level with new technology when choosing between electric and gasoline rental vehicles.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '4 min read',
    category: 'Car Comparison',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Top 10 Road Trip Destinations for 2024',
    excerpt: 'Discover the most scenic and exciting road trip destinations that are perfect for your next rental car adventure.',
    content: `
      <h2>Planning Your Perfect Road Trip</h2>
      <p>Road trips offer the ultimate freedom to explore at your own pace. Here are the top destinations that promise unforgettable experiences.</p>
      
      <h2>Top Destinations</h2>
      <ul>
        <li><strong>Pacific Coast Highway, California:</strong> Stunning coastal views and charming seaside towns</li>
        <li><strong>Blue Ridge Parkway, Virginia/North Carolina:</strong> Spectacular mountain scenery and fall foliage</li>
        <li><strong>Route 66:</strong> The classic American road trip experience</li>
        <li><strong>Great Ocean Road, Australia:</strong> Dramatic coastline and unique rock formations</li>
        <li><strong>Ring Road, Iceland:</strong> Otherworldly landscapes and natural wonders</li>
      </ul>
      
      <h2>Planning Tips</h2>
      <p>Make the most of your road trip with proper planning and preparation.</p>
    `,
    author: 'Mike Davis',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'How to Save Money on Car Rentals',
    excerpt: 'Practical tips and strategies to get the best deals on car rentals without compromising on quality.',
    content: `
      <h2>Smart Booking Strategies</h2>
      <p>Saving money on car rentals doesn't mean sacrificing quality. Here are proven strategies to get the best deals.</p>
      
      <h2>Timing is Everything</h2>
      <ul>
        <li>Book in advance for better rates</li>
        <li>Avoid peak travel seasons when possible</li>
        <li>Consider weekday vs weekend pricing</li>
        <li>Be flexible with pickup and drop-off times</li>
      </ul>
      
      <h2>Comparison Shopping</h2>
      <p>Use multiple platforms to compare prices and find hidden deals.</p>
    `,
    author: 'Emily Chen',
    date: '2024-01-08',
    readTime: '3 min read',
    category: 'Money Saving',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop'
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
              .filter(p => p.id !== post.id && p.category === post.category)
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