import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Coworking in Niagara-on-the-Lake
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
        Your premium coworking space in the heart of wine country.
        Where creativity meets productivity in a historic setting.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="https://www.indiegogo.com/projects/haven-workspace-coworking-in-niagara-on-the-lake/coming_soon"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 font-semibold text-center"
        >
          Get Early Access
        </a>
        <a 
          href="https://wa.me/12892725333"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 font-semibold inline-flex items-center justify-center gap-2"
        >
          <FiMessageCircle className="w-5 h-5" />
          Chat with Garrison
        </a>
      </div>
    </div>
  );
}