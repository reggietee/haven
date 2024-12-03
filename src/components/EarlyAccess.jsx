import React from 'react';

export default function EarlyAccess() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Join Our Early Access List
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto mb-8">
            Be the first to secure your spot at Haven. Early supporters receive exclusive perks and member benefits.
          </p>
          <a
            href="https://www.indiegogo.com/projects/haven-workspace-coworking-in-niagara-on-the-lake/coming_soon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 font-semibold inline-block"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}