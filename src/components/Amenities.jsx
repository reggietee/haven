import React from 'react';
import { FiMonitor, FiCoffee, FiMail, FiUsers, FiHome, FiCalendar, FiBook, FiMic } from 'react-icons/fi';

export default function Amenities() {
  const amenities = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'For Casual Members',
      description: 'A vibrant collaborative space with conference table and soft seating for casual work, meetings, and networking.',
    },
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: 'For Active Members',
      description: 'Professional quiet workspace with standing desks, ergonomic chairs, and dual monitors for focused work.',
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: 'Kitchen & Lounge',
      description: 'Fully stocked kitchen and comfortable break areas',
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      title: 'Private Office',
      description: 'Secure, furnished private office spaces',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Meeting Rooms',
      description: 'Professional meeting spaces with A/V equipment',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Mail Service',
      description: 'Professional business address and mail handling',
    },
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: 'Community Events',
      description: 'Regular networking and community building events',
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: 'Business Library',
      description: 'Access to popular business books and resources',
    },
    {
      icon: <FiMic className="w-6 h-6" />,
      title: 'Tech Suite',
      description: 'Access to podcasting equipment, green screens, teleprompters, VR headsets, meditation headbands and emerging technology',
    },
  ];

  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            Everything you need to run your business efficiently and comfortably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-primary mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{amenity.title}</h3>
              <p className="text-dark">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}