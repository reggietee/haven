import React from 'react';

export default function MemberCard({ type }) {
  return (
    <div className="group relative overflow-hidden rounded-lg h-64">
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
  );
}