import React from 'react';
import { FiMonitor, FiUsers, FiGlobe, FiCamera, FiBriefcase, FiCoffee } from 'react-icons/fi';

export default function MemberTypes() {
  const memberTypes = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: 'Remote Workers',
      description: 'Escape the home office and join a community of professionals',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Hybrid Workers',
      description: 'A professional space for your remote work days',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: 'Freelancers',
      description: 'Network and collaborate with other independent professionals',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'Creatives',
      description: 'Find inspiration in our beautifully designed space',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: 'Business Owners',
      description: 'A professional environment to grow your business',
      image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&q=80'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Digital Nomads',
      description: 'Your workspace away from home in wine country',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Who You'll Meet at Haven
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            Join a diverse community of professionals who choose Haven as their workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberTypes.map((type, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-64">
              <div className="absolute inset-0">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/70 transition-opacity duration-300"></div>
              </div>
              <div className="relative p-8">
                <div className="text-white mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-white/80">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Limited Memberships Available</h3>
            <p className="text-dark">
              To ensure a superior member experience, we're limiting initial memberships and gradually 
              opening up spots as we grow. Join our early access list to secure your spot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}