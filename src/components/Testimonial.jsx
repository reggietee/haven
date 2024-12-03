import React from 'react';
import { FiQuote } from 'react-icons/fi';

export default function Testimonial() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <FiQuote className="absolute text-primary/10 w-24 h-24 -top-8 -left-4" />
          <blockquote className="relative z-10">
            <p className="text-2xl md:text-3xl font-serif text-dark italic mb-6 max-w-4xl mx-auto text-center">
              "This is exactly what Niagara-on-the-Lake needs. A modern workspace where professionals can collaborate and grow together."
            </p>
            <footer className="text-center">
              <cite className="text-primary font-semibold not-italic">Sam Miele</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}