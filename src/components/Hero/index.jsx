import React from 'react';
import HeroContent from './HeroContent';
import VideoEmbed from './VideoEmbed';

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
            <HeroContent />
            <VideoEmbed videoId="iXMyED6oVR4" />
          </div>
        </div>
      </div>
    </section>
  );
}