import React from 'react';

export default function SpaceGallery() {
  return (
    <section id="space" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Better than Home
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Located in the heart of Niagara-on-the-Lake, our 1,700 sq ft workspace offers a premium environment for focused work and collaboration.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Prime Location</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Second floor of Garrison Plaza</li>
                <li>• Intersection of Mary St & Mississagua St</li>
                <li>• Next to Avondale Store</li>
                <li>• Free parking for members</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Amenities</h3>
              <ul className="space-y-2 text-white/80">
                <li>• High-speed fiber internet</li>
                <li>• Professional meeting rooms</li>
                <li>• Quiet focus areas</li>
                <li>• Collaborative spaces</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="w-full">
            <img 
              src="/exterior.jpg" 
              alt="Haven Workspace Exterior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <img 
                src="/office-1.jpg" 
                alt="Open workspace area"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="/office-2.jpg" 
                alt="Kitchen area"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="/office-3.jpg" 
                alt="Private offices"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="/office-4.jpg" 
                alt="Office corridor"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}