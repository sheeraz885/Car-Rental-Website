import React from 'react';
import { CheckCircleIcon, StarIcon, UsersIcon, TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    'Wide selection of vehicles',
    'Competitive pricing',
    'Easy booking process',
    '24/7 customer support',
    'Flexible rental terms',
    'Quality assurance'
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Passionate about making transportation accessible to everyone.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b5b98c0c?w=400&h=400&fit=crop&crop=face',
      bio: 'Ensuring smooth operations and customer satisfaction.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Mike Davis',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Building the technology that powers our platform.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const stats = [
    {
      icon: UsersIcon,
      number: '50,000+',
      label: 'Happy Customers',
      color: 'text-blue-600'
    },
    {
      icon: TruckIcon,
      number: '1,000+',
      label: 'Vehicles Available',
      color: 'text-green-600'
    },
    {
      icon: GlobeAltIcon,
      number: '100+',
      label: 'Cities Worldwide',
      color: 'text-purple-600'
    },
    {
      icon: StarIcon,
      number: '4.9/5',
      label: 'Customer Rating',
      color: 'text-yellow-600'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize car rentals'
    },
    {
      year: '2021',
      title: 'First 1,000 Customers',
      description: 'Reached our first major milestone in customer satisfaction'
    },
    {
      year: '2022',
      title: 'National Expansion',
      description: 'Expanded operations to 50+ cities across the country'
    },
    {
      year: '2023',
      title: 'International Launch',
      description: 'Launched services in multiple international markets'
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Leading the industry with cutting-edge technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About CarRental
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Revolutionizing transportation with innovative car rental solutions that connect people with the perfect vehicle for every journey.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mission</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    To revolutionize the car rental industry by providing a seamless, technology-driven platform that connects vehicle owners with renters, creating value for both parties while promoting sustainable transportation solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600 mb-4">Vision</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the world's most trusted and innovative car rental platform, making transportation accessible, affordable, and environmentally responsible for everyone, everywhere.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=500&fit=crop"
                  alt="Car rental fleet"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Quality Assured</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Every vehicle inspected</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From a simple idea to a global platform - here's how we've grown
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate individuals who make CarRental possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <span className="text-white text-4xl font-bold">T</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Trust & Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Building lasting relationships through honest communication, transparent pricing, and reliable service that our customers can depend on.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <span className="text-white text-4xl font-bold">I</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Innovation & Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Continuously pushing boundaries with cutting-edge technology and innovative solutions to enhance the car rental experience.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <span className="text-white text-4xl font-bold">C</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Community & Sustainability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Creating a responsible community of renters and owners while promoting sustainable transportation for a better future.
              </p>
            </div>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Be part of the transportation revolution. Whether you're looking to rent or list your vehicle, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/vehicles"
              className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Renting
            </a>
            <a
              href="/contact"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}