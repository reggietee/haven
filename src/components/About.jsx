import React from 'react';
import { FiCoffee, FiWifi, FiHome } from 'react-icons/fi';

export default function About() {
  const features = [
    {
      icon: <FiHome className="w-6 h-6" />,
      title: 'Prime Location',
      description: 'Located in the historic district of Niagara-on-the-Lake',
    },
    {
      icon: <FiWifi className="w-6 h-6" />,
      title: 'High-Speed Internet',
      description: 'Lightning-fast fiber internet throughout the space',
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: 'Premium Amenities',
      description: 'Unlimited Nespresso Coffee, tea, and modern meeting rooms',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Why Choose Haven?
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            We've created the perfect environment for professionals, entrepreneurs,
            and remote workers to thrive in Niagara-on-the-Lake.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{feature.title}</h3>
              <p className="text-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}