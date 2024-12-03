import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="pt-20 lg:pt-24">
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596142332133-327e2a0ff006?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white grid md:grid-cols-2 gap-8 items-center">
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
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/iXMyED6oVR4"
                title="Haven Workspace Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}