import React from 'react';
import MemberCard from './MemberCard';
import { memberTypes } from './memberData';

export default function MemberTypes() {
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
            <MemberCard key={index} type={type} />
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