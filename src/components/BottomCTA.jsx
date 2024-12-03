import React from 'react';

export default function BottomCTA() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Haven?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Don't miss out on our exclusive early access offers. Limited spots available.
          </p>
          <a
            href="https://www.indiegogo.com/projects/haven-workspace-coworking-in-niagara-on-the-lake/coming_soon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 font-semibold inline-block"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}