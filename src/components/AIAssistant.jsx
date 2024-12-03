import React from 'react';
import { FiMessageSquare, FiMessageCircle } from 'react-icons/fi';

export default function AIAssistant() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Meet Garrison, Your Virtual Assistant
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Have questions about Haven? Garrison is available 24/7 to help you learn more about our space and services.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FiMessageSquare className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Chat with Garrison on WhatsApp for instant answers about our amenities, pricing, and availability.
                </p>
                <a
                  href="https://wa.me/12892725333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-white/80"
                >
                  Start WhatsApp Chat →
                </a>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FiMessageCircle className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Telegram</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Prefer Telegram? Chat with Garrison on @GarrisonAI. You can even send voice notes for a more natural conversation!
                </p>
                <a
                  href="https://t.me/GarrisonAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-white/80"
                >
                  Chat on Telegram →
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/garrison.jpg" 
              alt="Garrison AI Assistant"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-dark p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-medium">
                "Hi! I'm Garrison. How can I help you learn more about Haven?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}