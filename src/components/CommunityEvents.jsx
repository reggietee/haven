import React from 'react';
import { FiUsers, FiBook, FiGlobe, FiCoffee } from 'react-icons/fi';

export default function CommunityEvents() {
  const events = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Networking Mixers',
      description: 'Monthly networking events to connect with fellow professionals',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: 'Skill Workshops',
      description: 'Learn from experts in marketing, finance, and technology',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Wine Country Socials',
      description: 'Exclusive member events at local wineries and restaurants',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: 'Coffee & Connect',
      description: 'Weekly morning meetups to share ideas and build relationships',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Community Events & Programming
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            Join a vibrant community of professionals through our curated events and workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-80">
              <div className="absolute inset-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-white mb-4">{event.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-white/80">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}